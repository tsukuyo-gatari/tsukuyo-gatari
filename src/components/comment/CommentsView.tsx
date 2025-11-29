import { Box } from "@mui/material";
import { useComments } from "../../hooks/dataReader/commentsReader";
import { LectureTitle } from "../ui/LectureTitle";
import { CommentsSection } from "./CommentsSection";

export interface CommentsViewProps {
    section?: string;
    includeSubsections?: boolean;
    commentsBG?: string;
    bgPosition?: string;
    opacity?: number;
    opacitySmall?: number;
}

export const CommentsView = (props: CommentsViewProps) => {
    const { comments, addComment } = useComments(props.section || '', props.includeSubsections);

    return <Box display={'flex'} alignItems={'center'} flexDirection={'column'} width={'100%'} gap={2}
        paddingLeft={{ xs: 1, lg: 10 }} paddingRight={{ xs: 1, lg: 10 }} marginBottom={5} component={"section"} id="comentarios">
        <LectureTitle text="Comentarios" />
        <CommentsSection addComment={addComment} comments={comments} commentBG={props.commentsBG} bgPosition={props.bgPosition}
            opacity={props.opacity} opacitySmall={props.opacitySmall} />
    </Box>
}