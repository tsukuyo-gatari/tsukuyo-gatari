import { Box } from "@mui/material";
import { navigateTo } from "../../hooks/redirect";
import AnimatedButton from "../ui/AnimatedButton";
import { LectureTypography } from "../ui/RTypography";
import { NovelBody } from "./NovelBody";
import { Image } from "../ui/Image";

export interface ChaptersData {
    image: string;
    title: string;
    novel: string;
    summary: string[];
    videoLink?: string;
    to?: string;
    sectionLink?: string;
}

export const ChapterResume = (props: ChaptersData) => {
    const navigate = navigateTo();

    const getPath = () => {
        if (props.to) {
            return `#/${globalThis.location.href.split("#/")[1]}${props.to}`;
        }
    }

    return (
        <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 6 }} width={'100%'} component={'section'} id={props.sectionLink}>
            <Image src={props.image} sx={{ width: { xs: '100%', md: '100%' }, height: '100%' }} to={props.videoLink} />
            <Box display={"flex"} flexDirection="column" width={'100%'}>
                <LectureTypography variant="h6">{props.novel}</LectureTypography>
                <LectureTypography variant="h4">{props.title}</LectureTypography>
                <NovelBody bodyParagraphs={props.summary} />
                <Box component={'a'} href={getPath()}>
                    <AnimatedButton text="Leer más" marginTop="30px" onClick={() => props.to && navigate(props.to)} />
                </Box>
            </Box>
        </Box>
    )
}