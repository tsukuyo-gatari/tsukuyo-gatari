import { Box } from "@mui/material"
import { LectureTitle } from "../ui/LectureTitle"
import { LongDetail } from "../ui/LongDetail"
import { useReadBodyData } from "../../hooks/content/useBodyData";

export interface InterviewProps {
    interviewPath: string;
    backgroundImage?: string;
}
    
export const Interview = (props: InterviewProps) => {
    const { bodyData } = useReadBodyData({ path: props.interviewPath });

    return <Box display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'} gap={2}
        paddingLeft={{ xs: 1, lg: 10 }} paddingRight={{ xs: 1, lg: 10 }} marginBottom={5} component={"section"} id="interview">
            <LectureTitle text="Entrevista al autor" />
            <LongDetail bodyParagraphs={bodyData} backgroundImage={props.backgroundImage}/>
        </Box>
}