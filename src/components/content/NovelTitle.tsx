import { Box } from "@mui/material";
import { LectureTypography } from "../ui/RTypography";
import { redirectTo } from "../../hooks/redirect";

export interface NovelTitleProps {
    smallTitleImg?: string;
    largeTitleImg?: string;
    engTitle?: string;
    jpTitle?: string;
    romajiTitle?: string;
    esTitle?: string;
    videoLink?: string;
}

export const NovelTitle = (props: NovelTitleProps) => {
    const getBackgroundImage = (image: string) => `
      linear-gradient(to right, rgba(0, 0, 0, 0.85) 40%, transparent 100%),
      url(${image})
    `;

    return (
        <Box width={'100%'} display={'flex'} flexDirection={'row'}
            sx={{
                backgroundImage: {
                    xs: getBackgroundImage(props.smallTitleImg ?? ''), lg: getBackgroundImage(props.largeTitleImg ?? ''),
                    md: getBackgroundImage(props.largeTitleImg ?? ''), sm: getBackgroundImage(props.largeTitleImg ?? '')
                },
                backgroundPosition: 'right center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundBlendMode: 'normal',
            }}>
            <Box display={'flex'} flexDirection={'column'} width={'50%'}
                marginTop={10} marginBottom={10} marginLeft={{ xs: 3, lg: 5 }} marginRight={{ xs: 3, lg: 5 }}
                textAlign={'left'} gap={{ xs: 3, lg: 5 }}>
                <LectureTypography variant="h1">
                    {props.engTitle}
                </LectureTypography>
                <LectureTypography variant="h3">
                    {props.jpTitle}
                </LectureTypography>
                <LectureTypography variant="h5" marginTop={{ xs: -3, lg: -5 }}>
                    {props.romajiTitle}
                </LectureTypography>
                <LectureTypography variant="h4">
                    {props.esTitle}
                </LectureTypography>
            </Box>
            <Box component={'canvas'} width={'50%'} flexGrow={1}
                sx={{ cursor: props.videoLink ? 'pointer' : 'default' }}
                onClick={() => props.videoLink && redirectTo(props.videoLink)}></Box>
        </Box>
    )
}
