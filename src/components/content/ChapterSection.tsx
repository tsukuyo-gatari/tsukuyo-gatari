import { Box, Divider } from "@mui/material";
import { RBox } from "../ui/RBox";
import { LectureTypography } from "../ui/RTypography";
import { LectureTitle } from "../ui/LectureTitle";
import { useChapterSection } from "../../hooks/content/useChapterSection";
import { ChapterResume } from "./ChapterResume";

export interface ChapterSectionProps {
    summaryFilePath: string;
    chaptersImages: string[];
    chaptersVideos: string[];
    chaptersLinks?: string[];
    novelTitle: string;
    romajiTitle: string;
    jpTitle: string;
    esTitle: string;
    sectionId: string;
    subsectionsLinks?: string[];
}

export const ChapterSection = (props: ChapterSectionProps) => {
    const { chapters } = useChapterSection(props);

    return (
        <RBox display={"flex"} flexDirection="column" gap={6} width={'100%'}>
            <ChapterTitle romajiTitle={props.romajiTitle} jpTitle={props.jpTitle} esTitle={props.esTitle} sectionId={props.sectionId} />
            {chapters.map((chapter) => (
                <Box key={chapter.title}>
                    <ChapterResume key={chapter.title} {...chapter} />
                    <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 7 } }} />
                </Box>
            ))}
        </RBox>
    )
}

const ChapterTitle = (props: { romajiTitle: string, jpTitle: string, esTitle: string, sectionId?: string }) => {
    return (
        <Box display={"flex"} flexDirection="column" width={'100%'} justifyContent="center" alignItems="center" gap={2} component={'section'} id={props.sectionId}>
            <LectureTitle text={props.romajiTitle} />
            <LectureTypography variant="h5" sx={{ color: '#aaaaaa !important' }}>
                {props.esTitle}
            </LectureTypography>
            <LectureTypography variant="h5" sx={{ color: '#dddddd !important' }}>
                {props.jpTitle}
            </LectureTypography>
        </Box>
    )
}