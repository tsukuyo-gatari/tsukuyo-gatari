import { useEffect, useState } from "react";
import { readFile } from "./reader";
import { publicFileReader } from "./publicFileReader";
import type { CatalogoNovelasProps } from "../../components/content/CatalogoNovelas";
import type { NovelResumeProps } from "../../components/content/NovelResume";
import type { CommentsViewProps } from "../../components/comment/CommentsView";

export const useHomeData = () => {
    const [aboutThisPageMessage, setAboutThisPageMessage] = useState<string>("");
    const [aboutTraductionMessage, setAboutTraductionMessage] = useState<string>("");
    const [catalogoNovelasData, setCatalogoNovelasData] = useState<CatalogoNovelasProps>({});
    const [commentsSectionsData, setCommentsSectionsData] = useState<CommentsViewProps>({});

    const { getFromTraductionsFolder, getFromNovelImageFolder, readJsonFolder } = publicFileReader();
    
    const init = async () => {
        await readPageData();
        await readCatalogoData();
    }

    const readPageData = async () => {
        const aboutPageData = await readFile(getFromTraductionsFolder("about_this_page.txt"))
        setAboutThisPageMessage(aboutPageData);
        const traductionData = await readFile(getFromTraductionsFolder("about_traduction.txt"))
        setAboutTraductionMessage(traductionData);
    }

    const readCatalogoData = async () => {
        const catalogoData = await readJsonFolder("home")
        const novelResumes = catalogoData.novelResumes.map((novelData: any) => buildNovelResume(novelData));
        const commentsSectionData = catalogoData.commentSection ? getCommentSection(catalogoData.commentSection) : {};
        setCatalogoNovelasData({ novelResumes: novelResumes });
        setCommentsSectionsData(commentsSectionData);
    }

    const getCommentSection = (data: any): CommentsViewProps => {
        return {
            section: data.section,
            commentsBG: getFromNovelImageFolder(data.commentsBG),
            bgPosition: data.bgPosition
        }
    }

    const buildNovelResume = (data: any): NovelResumeProps => {
        return {
            sumaryFile: data.sumaryFile && getFromTraductionsFolder(data.sumaryFile),
            image: getFromNovelImageFolder(data.image),
            to: data.to,
            videoLink: data.videoLink,
        }
    }

    useEffect(() => {init()}, []);

    return {
        aboutThisPageMessage,
        aboutTraductionMessage,
        catalogoNovelasData,
        commentsSectionsData
    }
}