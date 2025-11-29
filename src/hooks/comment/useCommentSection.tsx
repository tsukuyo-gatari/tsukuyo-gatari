import { useState, useEffect } from "react";
import type { CommentProps } from "../../components/comment/Comment";
import type { CommentsSectionProps } from "../../components/comment/CommentsSection";

export const useCommentSection = (props: CommentsSectionProps) => {
    const opacity = props.opacity || 0.7;
    const opacitySmall = props.opacitySmall || 0.6;
    const backgroundImage = {
        xs: `linear-gradient(rgba(0,0,0,${opacitySmall}), rgba(0,0,0,${opacitySmall})), url(${props.commentBG})`,
        lg: `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${props.commentBG})`,
    }

    const [comments, setComments] = useState<CommentProps[]>(props.comments || []);

    useEffect(() => setComments(props.comments || []), [props.comments]);

    const submitComment = (comment: CommentProps) => {
        setComments((prevComments) => [comment, ...prevComments]);
        props.addComment?.(comment);
    }

    return {
        backgroundImage,
        comments,
        submitComment,
    }
}