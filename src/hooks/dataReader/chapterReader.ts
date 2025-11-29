import { useEffect, useState } from "react";
import { type ChapterPageProps } from "../../pages/ChaptersPage";
import type { ChapterTitleProps } from "../../components/content/ChapterTitle";
import type { CommentsViewProps } from "../../components/comment/CommentsView";
import type { ChapterBreakpoints } from "../../components/content/ChapterContent";
import { publicFileReader } from "./publicFileReader";

export const useChapterData = (props: { filePath: string }) => {
    const [chapterData, setChapterData] = useState<ChapterPageProps>()
    const { getFromNovelImageFolder, getFromPublicImageFolder, getFromTraductionsFolder, readJsonFolder } = publicFileReader()
    
    const init = async () => {
        const data = await readJsonFolder(props.filePath)
        const chapterData = buildChapterData(data)
        setChapterData(chapterData)
    }

    const buildChapterData = (data: any): ChapterPageProps => {
        const { bgImageFolderName, traductionsFolderName } = data.resourceData
        const chapterData = data.chapterData

        return {
            chapterFile: getFromTraductionsFolder(traductionsFolderName + chapterData.chapterFile),
            titleData: getTitleData(chapterData.titleData, bgImageFolderName),
            tsukiMessage1Data: chapterData.tsukiMessage1Data && getTsukiMessageData(chapterData.tsukiMessage1Data),
            tsukiMessage2Data: chapterData.tsukiMessage2Data && getTsukiMessageData(chapterData.tsukiMessage2Data),
            nextChapterLink: chapterData.nextChapterLink,
            previousChapterLink: chapterData.previousChapterLink,
            listChaptersLink: chapterData.listChaptersLink,
            videoLinks: chapterData.videoLinks,
            commentsSection: getCommentSectionData(chapterData.commentsSection),
            chapterLargeBreakpoints: chapterData.chapterLargeBreakpoints.map((breakpoint: any) => getBreackPointsData(breakpoint, bgImageFolderName)),
            chapterSmallBreakpoints: chapterData.chapterSmallBreakpoints.map((breakpoint: any) => getBreackPointsData(breakpoint, bgImageFolderName))
        }
    }

    const getTitleData = (titleData: any, bgImageFolderName: string): ChapterTitleProps => {
        return {
            ...titleData,
            smallTitleImg: getFromNovelImageFolder(bgImageFolderName + titleData.smallTitleImg),
            largeTitleImg: getFromNovelImageFolder(bgImageFolderName + titleData.largeTitleImg)
        }
    }

    const getTsukiMessageData = (tsukiMessageData: any): { breakpoint: number; moonImageSrc?: string } => {
        return {
            breakpoint: tsukiMessageData.breakpoint,
            moonImageSrc: getFromPublicImageFolder("assets/" + tsukiMessageData.moonImageSrc)
        }
    }

    const getCommentSectionData = (commentsSection: any): CommentsViewProps => {
        return {
            section: commentsSection.section,
            commentsBG: getFromNovelImageFolder(commentsSection.commentsBG)
        }
    }

    const getBreackPointsData = (data: any, bgImageFolderName: string): ChapterBreakpoints => {
        return {
            breakpoint: data.breakpoint,
            opacity: data.opacity,
            imageSrc: getFromNovelImageFolder(bgImageFolderName + data.imageSrc),
            position: data.position
        }
    }

    useEffect(() => { init() }, [props.filePath])

    return { chapterData }
}