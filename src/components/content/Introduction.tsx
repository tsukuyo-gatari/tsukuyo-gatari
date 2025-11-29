import { useIntroduction } from "../../hooks/content/useIntroduction";
import { RBox } from "../ui/RBox";
import { RTypography } from "../ui/RTypography";

export interface IntroductionProps {
    summaryFilePath: string;
}

export const Introduction = (props: IntroductionProps) => {
    const { introductionBody } = useIntroduction({ summaryFilePath: props.summaryFilePath });
    if (!introductionBody || introductionBody.trim() === "") {
        return null;
    }
    return (
        <RBox className="black-bg"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Introducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                {introductionBody}
            </RTypography>
        </RBox>
    )
}