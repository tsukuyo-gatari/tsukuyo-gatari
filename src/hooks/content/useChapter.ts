import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { readFile, readBodyParagraphs } from "../dataReader/reader";

export const useChapter = (props: { chapterFile?: string }) => {
    const [paragraphs, setParagraphs] = useState<string[]>([]);
    const [tsukiMessage1, setTsukiMessage1] = useState<string[]>([]);
    const [tsukiMessage2, setTsukiMessage2] = useState<string[]>([]);
    const location = useLocation();

    const init = async () => {
        const fileData = await readFile(props.chapterFile??"");
        let tsukiMessage1: string[] = [];
        let tsukiMessage2: string[] = [];
        let paragraphIndex = 0;
        const data = fileData.split('-*-').filter(line => line.trim() !== '');
        if (fileData.includes('-*-')) {
            tsukiMessage1 = readBodyParagraphs(data[0]);
            tsukiMessage2 = readBodyParagraphs(data[2]);
            paragraphIndex = 1;
        }
        const paragraphs = readBodyParagraphs(data[paragraphIndex]);
        setParagraphs(paragraphs);
        setTsukiMessage1(tsukiMessage1);
        setTsukiMessage2(tsukiMessage2);
    }

    useEffect(() => { init() }, [location, props.chapterFile]);

    return { paragraphs, tsukiMessage1, tsukiMessage2 };
}