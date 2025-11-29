import { useState, useEffect } from "react";
import type { CommentProps } from "../../components/comment/Comment";
import type { InputTextProps } from "../../components/ui/InputText";
import type { IconSelectProps } from "../../components/ui/Icon";
import type { AnimatedButtonProps } from "../../components/ui/AnimatedButton";

export const useWriteComment = (props: { submit?: (comment: CommentProps) => void }) => {
    const [nickName, setNickName] = useState('');
    const [comment, setComment] = useState('');
    const [iconIndex, setIconIndex] = useState(0);
    const [disabled, setDisabled] = useState(true);

    const validateInputs = () => {
        if (nickName.trim() === '' || comment.trim() === '') {
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    const getComment = (): CommentProps => {
        return {
            nickName: nickName.trim(),
            commentText: comment.trim(),
            iconIndex: iconIndex,
            datetime: new Date(),
        }
    }

    const submitComment = () => {
        const commentData = getComment();
        setNickName('');
        setComment('');
        props.submit?.(commentData);
    }

    useEffect(validateInputs, [nickName, comment]);

    const getNickNameController = (): InputTextProps => {
        return {
            value: nickName,
            onChange: (e) => setNickName(e.target.value),
        }
    }

    const getCommentController = (): InputTextProps => {
        return {
            value: comment,
            onChange: (e) => setComment(e.target.value),
        }
    }

    const getButtonProps = (): AnimatedButtonProps => {
        return {
            onClick: submitComment,
            disabled: disabled,
        }
    }

    const getIconSelectProps = (): IconSelectProps => {
        return {
            iconIndex: iconIndex,
            setIconIndex: (index: number) => setIconIndex(index),
        }
    }

    return {
        nickNameController: getNickNameController(),
        commentController: getCommentController(),
        iconSelectController: getIconSelectProps(),
        buttonProps: getButtonProps(),
    }
}