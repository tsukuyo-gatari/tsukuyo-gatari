import { Route, Routes } from "react-router-dom"
import { FileChapterPage } from "../pages/ChaptersPage"
import { SorekamiFileNovelSummary } from "../pages/NovelSummary"

export const SorekamiRoutes = () => {
    return <Routes>
        <Route path='/' element={<SorekamiFileNovelSummary />} />
        <Route path='/chapter-1/' element={<FileChapterPage filePath="sorekami/chpt1" />} />
        <Route path='/chapter-1-04/' element={<FileChapterPage filePath="sorekami/chpt1a" />} />
        <Route path='/chapter-2-307/' element={<FileChapterPage filePath="sorekami/chpt2a" />} />
        <Route path='/chapter-2/' element={<FileChapterPage filePath="sorekami/chpt2" />} />
        <Route path='/chapter-3-04/' element={<FileChapterPage filePath="sorekami/chpt3a" />} />
        <Route path='/chapter-3/' element={<FileChapterPage filePath="sorekami/chpt3" />} />
        <Route path='/chapter-4-05/' element={<FileChapterPage filePath="sorekami/chpt4a" />} />
        <Route path='/chapter-4/' element={<FileChapterPage filePath="sorekami/chpt4" />} />
        <Route path='/chapter-5-01/' element={<FileChapterPage filePath="sorekami/chpt5a" />} />
        <Route path='/chapter-5/' element={<FileChapterPage filePath="sorekami/chpt5" />} />
        <Route path='/chapter-6/' element={<FileChapterPage filePath="sorekami/chpt6" />} />
        <Route path='/chapter-7/' element={<FileChapterPage filePath="sorekami/chpt7" />} />
    </Routes>
}