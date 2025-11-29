import { Box } from "@mui/material"
import { CommentsView } from "../components/comment/CommentsView"
import { ChapterContent } from "../components/content/ChapterContent"
import { ChapterTitle } from "../components/content/ChapterTitle"
import { VideoViews } from "../components/content/VideoViews"
import { useChapterData } from "../hooks/dataReader/chapterReader"
import { useChapter } from "../hooks/content/useChapter"
import { TraductionDetails } from "../components/content/TraductionDetails"
import { publicFileReader } from "../hooks/dataReader/publicFileReader"

export const JigokuChapterPage = () => {
    const { chapterData } = useChapterData({ filePath: "jigoku/chpt" })
    const { paragraphs } = useChapter({ chapterFile: chapterData?.chapterFile });
    const {getFromTraductionsFolder } = publicFileReader()
    
    return <Box width="100vw" component="main" display={'flex'} flexDirection={'column'}>
        <ChapterTitle {...chapterData?.titleData} />
        <TraductionDetails traductionDetailsFilePath={getFromTraductionsFolder("jigoku/jigoku_traduction_details.txt")}/>
        <ChapterContent paragraphs={paragraphs} largeBreakpoints={chapterData?.chapterLargeBreakpoints}
        smallBreakpoints={chapterData?.chapterSmallBreakpoints} />
        <VideoViews videoViews={chapterData?.videoLinks} />
        <CommentsView {...chapterData?.commentsSection}/>
    </Box>
}