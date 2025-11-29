import { Box } from "@mui/material"
import { LectureTypography } from "../ui/RTypography"
import { WriteComment } from "./WriteComment"
import { type CommentProps, Comment } from "./Comment"
import { useCommentSection } from "../../hooks/comment/useCommentSection"
import "../../styles.css"

export interface CommentsSectionProps {
    addComment?: (comment: CommentProps) => void;
    comments: CommentProps[];
    commentBG?: string;
    bgPosition?: string;
    opacity?: number;
    opacitySmall?: number;
}

export const CommentsSection = (props: CommentsSectionProps) => {
    const { backgroundImage, comments, submitComment } = useCommentSection(props);

    return <Box className="section-box" border={1} gap={2} display={'flex'} paddingBottom={5}
        sx={{ backgroundImage: backgroundImage, backgroundPosition: props.bgPosition }}>
        <WriteComment submit={submitComment} />
        {comments.length === 0 ?
            <Box padding={1}><LectureTypography>No hay comentarios aún. Sé el primero en comentar :).</LectureTypography></Box> :
            comments.map((comment) => (
                <Comment key={comment.datetime.toISOString()} {...comment} />
            ))}
    </Box>
}