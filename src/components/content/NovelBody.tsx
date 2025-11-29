import { Box } from "@mui/material"
import { LectureTypography } from "../ui/RTypography"

export const NovelBody = (props: { bodyParagraphs: string[], textComponent?: React.ElementType }) => {
    const TextComponent = props.textComponent || LectureTypography;

    return (
        <Box display={"flex"} flexDirection="column" width={'100%'}>
            {props.bodyParagraphs.map((paragraph) => (
                <TextComponent key={paragraph} variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                    {paragraph}
                </TextComponent>
            ))}
        </Box>
    )
}