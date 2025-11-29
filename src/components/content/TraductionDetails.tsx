import { useNovelSummary } from "../../hooks/content/useNovelResume";
import { RBox } from "../ui/RBox";
import { RTypography } from "../ui/RTypography";
import { NovelBody } from "./NovelBody";

export const TraductionDetails = (props: { traductionDetailsFilePath: string }) => {
    const { paragraphs } = useNovelSummary(props.traductionDetailsFilePath);

    return <RBox className="black-bg"
        component="section">
        <RTypography variant="h3" className="title text-center mt-4">
            Detalles de la traducción
        </RTypography>
        <NovelBody bodyParagraphs={paragraphs} textComponent={RTypography} />
    </RBox>
}