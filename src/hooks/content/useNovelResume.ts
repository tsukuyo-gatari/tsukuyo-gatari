import { useEffect, useState } from "react";
import { navigateTo } from "../redirect";
import { readBodyParagraphs, readFile, readSummaryFile, type SumaryInfo } from "../dataReader/reader";

export const useNovelResume = (props: { sumaryFile?: string }) => {
    const navigate = navigateTo();

    const [sumaryInfo, setSumaryInfo] = useState<SumaryInfo>({
        engTitle: '',
        jpTitle: '',
        romajiTitle: '',
        esTitle: '',
        bodyParagraphs: []
    });

    const initData = async () => {
        const content = await readSummaryFile(props.sumaryFile ?? '');
        setSumaryInfo(content);
    }

    useEffect(() => { initData() }, [])

    return { sumaryInfo, navigate };
}

export const useNovelSummary = (summaryFilePath: string) => {
    const [paragraphs, setParagraphs] = useState<string[]>([]);

    const init = async () => {
        const fileData = await readFile(summaryFilePath);
        const paragraphs = readBodyParagraphs(fileData);
        setParagraphs(paragraphs);
    }

    useEffect(() => { init() }, []);

    return { paragraphs };
}