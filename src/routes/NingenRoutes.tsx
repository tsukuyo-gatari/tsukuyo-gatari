import { Route, Routes } from "react-router-dom"
import { FileChapterPage } from "../pages/ChaptersPage"
import { NingenFileNovelSummary } from "../pages/NovelSummary"

export const NingenRoutes = () => {
    return <Routes>
        <Route path='/' element={<NingenFileNovelSummary />} />
        <Route path='/chapter-1/' element={<FileChapterPage filePath="ningen/chpt1" />} />
        <Route path='/chapter-2/' element={<FileChapterPage filePath="ningen/chpt2" />} />
        <Route path='/chapter-3/' element={<FileChapterPage filePath="ningen/chpt3" />} />
        <Route path='/chapter-4/' element={<FileChapterPage filePath="ningen/chpt4" />} />
    </Routes>
}