import { Box } from "@mui/material"
import { ChapterTitle, type ChapterTitleProps } from "../components/content/ChapterTitle"
import { TsukiMessage } from "../components/content/TsukiMessage"
import { ChapterContent, type ChapterBreakpoints } from "../components/content/ChapterContent"
import { CommentsView, type CommentsViewProps } from "../components/comment/CommentsView"
import { useChapter } from "../hooks/content/useChapter"
import { ChaptersLink } from "../components/ui/ChaptersLink"
import { VideoViews, type VideoViewsProp } from "../components/content/VideoViews"
import { useChapterData } from "../hooks/dataReader/chapterReader"

export interface ChapterPageProps {
    chapterFile?: string;
    titleData?: ChapterTitleProps;
    tsukiMessage1Data?: {
        breakpoint: number;
        moonImageSrc?: string;
    },
    tsukiMessage2Data?: {
        breakpoint: number;
        moonImageSrc?: string;
    },
    chapterLargeBreakpoints?: ChapterBreakpoints[];
    chapterSmallBreakpoints?: ChapterBreakpoints[];
    nextChapterLink?: string;
    previousChapterLink?: string;
    listChaptersLink?: string;
    videoLinks?: VideoViewsProp[];
    commentsSection?: CommentsViewProps;
}

export const ChapterPage = (props: ChapterPageProps) => {
    const { paragraphs, tsukiMessage1, tsukiMessage2 } = useChapter({ chapterFile: props.chapterFile });
    
    return (
        <Box width="100vw" component="main" display={'flex'} flexDirection={'column'}>
            <ChapterTitle {...props.titleData} />
            {tsukiMessage1.length > 0 && props.tsukiMessage1Data && <TsukiMessage paragraphs={tsukiMessage1} {...props.tsukiMessage1Data} />}
            <ChapterContent paragraphs={paragraphs} largeBreakpoints={props.chapterLargeBreakpoints}
                smallBreakpoints={props.chapterSmallBreakpoints} />
            {tsukiMessage2.length > 0 && props.tsukiMessage2Data && <TsukiMessage paragraphs={tsukiMessage2} {...props.tsukiMessage2Data} />}
            <ChaptersLink nextChapterLink={props.nextChapterLink} previousChapterLink={props.previousChapterLink} listChaptersLink={props.listChaptersLink} />
            {props.videoLinks && <VideoViews videoViews={props.videoLinks} />}
            <CommentsView {...props.commentsSection} />
        </Box>
    )
}

export const FileChapterPage = (props: { filePath: string }) => {
    const { chapterData } = useChapterData({ filePath: props.filePath })
    
    return <ChapterPage {...chapterData} />
}