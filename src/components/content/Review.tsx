import { Box } from "@mui/material"
import { LectureTitle } from "../ui/LectureTitle"
import { LongDetail } from "../ui/LongDetail"
import { useReadBodyData } from "../../hooks/content/useBodyData";

export interface ReviewProps {
    reviewPath: string;
    backgroundImage?: string;
}
    
export const Review = (props: ReviewProps) => {
    const { bodyData } = useReadBodyData({ path: props.reviewPath });

    return <Box display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'} gap={2}
        paddingLeft={{ xs: 1, lg: 10 }} paddingRight={{ xs: 1, lg: 10 }} marginBottom={5} component={"section"} id="review">
            <LectureTitle text="Review" />
            <LongDetail bodyParagraphs={bodyData} backgroundImage={props.backgroundImage}/>
        </Box>
}