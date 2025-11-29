import { Box } from "@mui/material"
import { NovelBody } from "../content/NovelBody"

export const LongDetail = (props: { backgroundImage?: string, bodyParagraphs: string[] }) => {
    const getGradient = (opacity: number, imageSrc?: string) => {
        return `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${imageSrc})`;
    }

    return <Box className="section-box" width={'100%'} height={'500px'} sx={{overflowY: "auto"}} border={1} gap={2}>
        <Box display={'flex'} paddingBottom={5} paddingLeft={5} paddingRight={5}
            sx={{
                backgroundImage: getGradient(0.7, props.backgroundImage),
            }}>
            <NovelBody bodyParagraphs={props.bodyParagraphs} />
        </Box>
    </Box>
}