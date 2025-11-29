import { useMediaQuery } from "@mui/material";
import { NovelBody } from "./NovelBody";
import { LectureBox } from "../ui/RBox";

export interface ChapterContentProps {
    paragraphs?: string[];
    largeBreakpoints?: ChapterBreakpoints[];
    smallBreakpoints?: ChapterBreakpoints[];
}

export interface ChapterBreakpoints {
    breakpoint: number;
    opacity: number;
    imageSrc?: string;
    position?: string;
}

export const ChapterContent = ({ paragraphs, largeBreakpoints, smallBreakpoints }: ChapterContentProps) => {
    const isMdUp = useMediaQuery('(min-width:600px)');
    const isMdByHeight = useMediaQuery('(min-height:500px)');
    return isMdUp && isMdByHeight ? <ChapterBody paragraphs={paragraphs} breakpoints={largeBreakpoints} /> : 
    <ChapterBody paragraphs={paragraphs} breakpoints={smallBreakpoints}/>
}


const ChapterBody = ({ paragraphs, breakpoints }: { paragraphs?: string[]; breakpoints?: ChapterBreakpoints[] }) => {
    const getGradient = (opacity: number, imageSrc?: string) => {
        return `linear-gradient(rgba(0,0,0,${opacity}), rgba(0,0,0,${opacity})), url(${imageSrc})`;
    }

    const getStartPoint = (index: number) => {
        if (index === 0) return 0;
        return breakpoints ? breakpoints[index - 1].breakpoint : 0;
    }

    return <>
        {breakpoints?.map((bp, index) => (
            <LectureBox key={bp.imageSrc} width={'100%'} display={'flex'} justifyContent={'center'}
            ignoreTopPadding={index !== 0}
            ignoreBottomPadding={index !== breakpoints.length -1}
            sx={{
                backgroundImage: getGradient(bp.opacity, bp.imageSrc),
                backgroundPosition: bp.position ?? 'center',
                backgroundSize: 'cover',
            }}>
                <NovelBody bodyParagraphs={paragraphs?.slice(getStartPoint(index), bp.breakpoint) ?? []} />
            </LectureBox>
        ))}
    </>
}