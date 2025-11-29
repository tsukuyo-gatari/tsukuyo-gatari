import { useEffect, useState } from "react";
import { readBodyParagraphs, readFile } from "../dataReader/reader";

export const useReadBodyData = (props: { path: string }) => {
    const [bodyData, setBodyData] = useState<string[]>([]);

    const init = async () => {
        const content = await readFile(props.path);
        const bodyData = readBodyParagraphs(content);
        setBodyData(bodyData);
    }

    useEffect(() => { init() }, [props.path]);

    return { bodyData };
}