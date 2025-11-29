import { useState, useEffect } from "react";
import type { ChapterSectionProps } from "../../components/content/ChapterSection";
import { readFile, readBodyParagraphs } from "../dataReader/reader";
import type { ChaptersData } from "../../components/content/ChapterResume";

export const useChapterSection = (props: ChapterSectionProps) => {
    const [chapters, setChapters] = useState<ChaptersData[]>([]);

    const init = async () => {
        const chaptersData = await readFile(props.summaryFilePath)
        const chapters: ChaptersData[] = chaptersData.split("/*/").map((chapter, index) => {
            const data = chapter.trim();
            const title = data.split("\n")[0].trim();

            const summary = readBodyParagraphs(data.split("\n").slice(1).join("\n").trim());
            return {
                title, summary, image: props.chaptersImages[index], novel: props.novelTitle,
                videoLink: props.chaptersVideos[index], to: props.chaptersLinks?.[index],
                sectionLink: props.subsectionsLinks?.[index]
            };
        });
        setChapters(chapters);
    }

    useEffect(() => { init() }, [])

    return { chapters };
}