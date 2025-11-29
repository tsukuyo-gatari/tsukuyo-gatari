import { Route, Routes } from "react-router-dom"
import { FileChapterPage} from '../pages/ChaptersPage'
import { ShinzouFileNovelSummary } from "../pages/NovelSummary"

export const ShinzouRoutes = () => {
    return <Routes>
        <Route path='/' element={<ShinzouFileNovelSummary />} />
        <Route path='/shinshouRoku/*' element={<ShinshouRokuRoutes />} />
        <Route path='/tsuisouRoku/*' element={<TsuisouRokuRoutes />} />
        <Route path='/kaisouRoku/*' element={<KaisouRokuRoutes />} />
        <Route path='/extra/*' element={<ExtraRoutes />} />
    </Routes>
}

const ShinshouRokuRoutes = () => {
    return <Routes>
        <Route path='/chapter-1/' element={<FileChapterPage filePath="shinzou/shinshou/chpt1" />} />
        <Route path='/chapter-2/' element={<FileChapterPage filePath="shinzou/shinshou/chpt2" />} />
        <Route path='/chapter-3/' element={<FileChapterPage filePath="shinzou/shinshou/chpt3" />} />
        <Route path='/chapter-4/' element={<FileChapterPage filePath="shinzou/shinshou/chpt4" />} />
        <Route path='/chapter-5/' element={<FileChapterPage filePath="shinzou/shinshou/chpt5" />} />
        <Route path='/chapter-6/' element={<FileChapterPage filePath="shinzou/shinshou/chpt6" />} />
        <Route path='/chapter-7/' element={<FileChapterPage filePath="shinzou/shinshou/chpt7" />} />
        <Route path='/chapter-8/' element={<FileChapterPage filePath="shinzou/shinshou/chpt8" />} />
        <Route path='/chapter-9/' element={<FileChapterPage filePath="shinzou/shinshou/chpt9" />} />
        <Route path='/chapter-10/' element={<FileChapterPage filePath="shinzou/shinshou/chpt10" />} />
        <Route path='/chapter-11/' element={<FileChapterPage filePath="shinzou/shinshou/chpt11" />} />
        <Route path='/chapter-12/' element={<FileChapterPage filePath="shinzou/shinshou/chpt12" />} />
        <Route path='/chapter-13/' element={<FileChapterPage filePath="shinzou/shinshou/chpt13" />} />
        <Route path='/chapter-14/' element={<FileChapterPage filePath="shinzou/shinshou/chpt14" />} />
        <Route path='/chapter-15/' element={<FileChapterPage filePath="shinzou/shinshou/chpt15" />} />
    </Routes>
}

const TsuisouRokuRoutes = () => {
    return <Routes>
        <Route path='/chapter-0/' element={<FileChapterPage filePath="shinzou/tsuisou/chpt0" />} />
        <Route path='/chapter-1/' element={<FileChapterPage filePath="shinzou/tsuisou/chpt1" />} />
        <Route path='/chapter-2/' element={<FileChapterPage filePath="shinzou/tsuisou/chpt2" />} />
        <Route path='/chapter-3/' element={<FileChapterPage filePath="shinzou/tsuisou/chpt3" />} />
        <Route path='/chapter-4/' element={<FileChapterPage filePath="shinzou/tsuisou/chpt4" />} />
        <Route path='/chapter-5/' element={<FileChapterPage filePath="shinzou/tsuisou/chpt5" />} />
    </Routes>
}

const KaisouRokuRoutes = () => {
    return <Routes>
        <Route path='/chapter-1/' element={<FileChapterPage filePath="shinzou/kaisou/chpt1" />} />
        <Route path='/chapter-2/' element={<FileChapterPage filePath="shinzou/kaisou/chpt2" />} />
        <Route path='/chapter-3/' element={<FileChapterPage filePath="shinzou/kaisou/chpt3" />} />
        <Route path='/chapter-4/' element={<FileChapterPage filePath="shinzou/kaisou/chpt4" />} />
        <Route path='/chapter-5/' element={<FileChapterPage filePath="shinzou/kaisou/chpt5" />} />
        <Route path='/chapter-6/' element={<FileChapterPage filePath="shinzou/kaisou/chpt6" />} />
        <Route path='/chapter-7/' element={<FileChapterPage filePath="shinzou/kaisou/chpt7" />} />
        <Route path='/chapter-8/' element={<FileChapterPage filePath="shinzou/kaisou/chpt8" />} />
        <Route path='/chapter-9/' element={<FileChapterPage filePath="shinzou/kaisou/chpt9" />} />
        <Route path='/chapter-10/' element={<FileChapterPage filePath="shinzou/kaisou/chpt10" />} />
        <Route path='/chapter-11/' element={<FileChapterPage filePath="shinzou/kaisou/chpt11" />} />
        <Route path='/chapter-12/' element={<FileChapterPage filePath="shinzou/kaisou/chpt12" />} />
    </Routes>
}

const ExtraRoutes = () => {
    return <Routes>
        <Route path='/veronica/' element={<FileChapterPage filePath="shinzou/extra/extra1" />} />
        <Route path='/tetra/' element={<FileChapterPage filePath="shinzou/extra/extra2" />} />
        <Route path='/ookami/' element={<FileChapterPage filePath="shinzou/extra/extra3" />} />
    </Routes>
}