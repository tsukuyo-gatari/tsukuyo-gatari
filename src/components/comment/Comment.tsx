import { Box, Divider } from "@mui/material";
import { LectureTypography } from "../ui/RTypography";
import "../../styles.css";
import { IconAvatar } from "../ui/Icon";
import { useAvatar } from "../../hooks/ui/useAvatar";

export interface CommentProps {
    datetime: Date;
    nickName: string;
    commentText: string;
    iconIndex: number;
}

export const Comment = (props: CommentProps) => {
    const { getIconLink } = useAvatar();

    return <Box className="comment-box" gap={2} paddingLeft={{ xs: 2, lg: 5 }} paddingRight={5}>
        <IconAvatar iconLink={getIconLink(props.iconIndex)} />
        <Box className="comment-content" gap={2} paddingBottom={2}>
            <CommentInfo nickName={props.nickName} datetime={props.datetime} />
            <CommentDivider />
            <CommentBody commentText={props.commentText} />
        </Box>
    </Box>
}

interface CommentInfoProps {
    nickName: string;
    datetime: Date;
}

const CommentInfo = (props: CommentInfoProps) => {
    return <Box paddingTop={2} display={'flex'} flexDirection={'row'} gap={2} alignItems={'center'} width={'100%'} paddingLeft={{ xs: 2, lg: 5 }} paddingRight={{ xs: 2, lg: 5 }}>
        <LectureTypography variant="body1">{props.nickName}</LectureTypography>
        <LectureTypography variant="h6" sx={{ color: 'gray !important' }}>{props.datetime.toLocaleString()}</LectureTypography>
    </Box>
}

const CommentBody = (props: { commentText: string }) => {
    return <LectureTypography variant="body1" align="left" whiteSpace="pre-line" sx={{ paddingLeft: { xs: 2, lg: 5 }, paddingRight: { xs: 1, lg: 5 } }}>
        {props.commentText}
    </LectureTypography>
}

const CommentDivider = () => {
    return <Box width={'100%'}>
        <Divider sx={{ borderColor: 'white', borderBottomWidth: 1, mx: { xs: 2, lg: 5 } }} />
    </Box>
}