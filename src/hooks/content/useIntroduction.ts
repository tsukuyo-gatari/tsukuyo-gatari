import { useState, useEffect } from "react";
import { readSummaryFile } from "../dataReader/reader";

export const useIntroduction = (props: { summaryFilePath: string }) => {
    const [introductionBody, setIntroductionBody] = useState<string>("");

    const initData = async () => {
        const content = await readSummaryFile(props.summaryFilePath);
        setIntroductionBody(content.bodyParagraphs.join("\n"));
    }
    useEffect(() => { initData() }, []);

    return { introductionBody };
}