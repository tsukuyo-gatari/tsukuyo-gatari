import { Box } from "@mui/material";
import { LectureTypography } from "../ui/RTypography";
import type { CommentProps } from "./Comment";
import { IconSelect } from "../ui/Icon";
import { InputText, type InputTextProps } from "../ui/InputText";
import "../../styles.css";
import { useWriteComment } from "../../hooks/comment/useWriteComment";
import AnimatedButton from "../ui/AnimatedButton";
import { useAvatar } from "../../hooks/ui/useAvatar";


export interface WriteCommentProps {
    submit?: (comment: CommentProps) => void;
}

export const WriteComment = (props: WriteCommentProps) => {
    const writeCommentController = useWriteComment({ submit: props.submit });
    const { commenticons } = useAvatar();
    
    return <Box className="write-comment-box" gap={2} paddingLeft={{ xs: 3, lg: 10 }} paddingRight={{ xs: 3, lg: 10 }} paddingTop={2} paddingBottom={2}>
        <NickNameInput {...writeCommentController.nickNameController} />
        <CommentInput {...writeCommentController.commentController} />
        <IconSelect icons={commenticons} {...writeCommentController.iconSelectController} />
        <AnimatedButton text="Comentar" width={{ xs: "50%", lg: "10%" }} {...writeCommentController.buttonProps} />
    </Box>
}


const NickNameInput = (props: InputTextProps) => {
    return <>
        <LectureTypography>
            NickName
        </LectureTypography>
        <InputText maxLength={50} placeholder="Escribe un NickName" {...props} />
    </>
}

const CommentInput = (props: InputTextProps) => {
    return <>
        <LectureTypography>
            Comentario
        </LectureTypography>
        <InputText multiline rows={4} placeholder="Escribe un comentario o review :)" {...props} />
    </>
}