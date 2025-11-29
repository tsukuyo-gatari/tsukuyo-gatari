import { Route, Routes } from "react-router-dom"
import { JigokuChapterPage } from "../pages/JigokuChapterPage"

export const JigokuRoutes = () => {
    return <Routes>
        <Route path='/' element={<JigokuChapterPage />} />
    </Routes>
}