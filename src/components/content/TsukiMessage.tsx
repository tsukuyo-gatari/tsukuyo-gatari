import { useMediaQuery, Box, useTheme } from "@mui/material";
import { ImageNoLink } from "../ui/Image";
import { NovelBody } from "./NovelBody";
import { LectureBox } from "../ui/RBox";
import { LectureTypography } from "../ui/RTypography";

export interface TsukiMessageProps {
    paragraphs: string[];
    breakpoint: number;
    moonImageSrc?: string;
}

export const TsukiMessage = ({ paragraphs, breakpoint, moonImageSrc }: TsukiMessageProps) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('sm'));

    return isMdUp ? <TsukiMessageLarge paragraphs={paragraphs} moonImageSrc={moonImageSrc} /> :
        <TsukiMessageSmall paragraphs={paragraphs} breakpoint={breakpoint} moonImageSrc={moonImageSrc} />
}

const TsukiMessageSmall = ({ paragraphs, breakpoint, moonImageSrc }: TsukiMessageProps) => {
    return <LectureBox bgcolor={'black'} display={'flex'} flexDirection={'column'}>
        <Box display={'flex'} width={'100%'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <Box display={'flex'} width={'50%'} flexDirection={'column'}>
                {paragraphs.slice(0, breakpoint).map(paragraph => (
                    <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line" key={paragraph}>
                        {paragraph}
                    </LectureTypography>
                ))}
            </Box>
            <ImageNoLink src={moonImageSrc} width={'50%'} maxHeight={'20%'}/>
        </Box>

        {paragraphs.slice(breakpoint).map(paragraph => (
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line" key={paragraph}>
                {paragraph}
            </LectureTypography>
        ))}
    </LectureBox>
}

const TsukiMessageLarge = ({ paragraphs, moonImageSrc }: { paragraphs: string[]; moonImageSrc?: string }) => {
    return <LectureBox bgcolor={'black'} display={'flex'} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}
        gap={{ lg: 50, md: 20, sm: 10 }}>
        <Box display={'flex'} flexDirection={'column'} width={'50%'}>
            <NovelBody bodyParagraphs={paragraphs} />
        </Box>
        <ImageNoLink src={moonImageSrc} width={'20%'} />
    </LectureBox>
}