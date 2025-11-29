import { Route, Routes } from "react-router-dom"
import { ParadeFileNovelSummary } from "../pages/NovelSummary"
import { FileChapterPage } from "../pages/ChaptersPage"

export const ParadeRoutes = () => {
    return <Routes>
        <Route path='/' element={<ParadeFileNovelSummary />} />
        <Route path='parade/*' element={<ParadeChapterRoutes />} />
        <Route path='kesera/*' element={<KeseraChapterRoutes />} />
        <Route path='todestrieb/*' element={<TodestriebChapterRoutes />} />
    </Routes>
}

const ParadeChapterRoutes = () => {
    return (
        <Routes>
            <Route path="chapter-1/" element={<FileChapterPage filePath="parade/parade/chpt1"/>} />
            <Route path="chapter-2/" element={<FileChapterPage filePath="parade/parade/chpt2"/>} />
            <Route path="chapter-3/" element={<FileChapterPage filePath="parade/parade/chpt3"/>} />
            <Route path="chapter-4/" element={<FileChapterPage filePath="parade/parade/chpt4"/>} />
            <Route path="chapter-5/" element={<FileChapterPage filePath="parade/parade/chpt5"/>} />
            <Route path="chapter-6/" element={<FileChapterPage filePath="parade/parade/chpt6"/>} />
            <Route path="chapter-7/" element={<FileChapterPage filePath="parade/parade/chpt7"/>} />
            <Route path="chapter-8/" element={<FileChapterPage filePath="parade/parade/chpt8"/>} />
            <Route path="chapter-9/" element={<FileChapterPage filePath="parade/parade/chpt9"/>} />
        </Routes>
    )
}

const KeseraChapterRoutes = () => {
    return (
        <Routes>
            <Route path="chapter-1/" element={<FileChapterPage filePath="parade/kesera/chpt1"/>} />
            <Route path="chapter-2/" element={<FileChapterPage filePath="parade/kesera/chpt2"/>} />
            <Route path="chapter-3/" element={<FileChapterPage filePath="parade/kesera/chpt3"/>} />
            <Route path="chapter-4/" element={<FileChapterPage filePath="parade/kesera/chpt4"/>} />
            <Route path="chapter-5/" element={<FileChapterPage filePath="parade/kesera/chpt5"/>} />
            <Route path="chapter-6/" element={<FileChapterPage filePath="parade/kesera/chpt6"/>} />
        </Routes>
    )
}

const TodestriebChapterRoutes = () => {
    return (
        <Routes>
            <Route path="chapter-1/" element={<FileChapterPage filePath="parade/todestrieb/chpt1"/>} />
            <Route path="chapter-2/" element={<FileChapterPage filePath="parade/todestrieb/chpt2"/>} />
            <Route path="chapter-3/" element={<FileChapterPage filePath="parade/todestrieb/chpt3"/>} />
            <Route path="chapter-4/" element={<FileChapterPage filePath="parade/todestrieb/chpt4"/>} />
        </Routes>
    )
}