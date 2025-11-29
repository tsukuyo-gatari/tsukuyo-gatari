import { Box } from "@mui/material";
import "../styles.css";
import { CatalogoNovelas } from "../components/content/CatalogoNovelas";
import { AboutTheTraduction, AboutThisPage, Principal } from "../components/home/Principal";
import { CommentsView } from "../components/comment/CommentsView";
import { useHomeData } from "../hooks/dataReader/homeData";

export const Home = () => {
    const { aboutThisPageMessage, aboutTraductionMessage, catalogoNovelasData, commentsSectionsData } = useHomeData();

    return (
        <Box width="100vw" className="column" component="main">
            <Principal />
            <AboutThisPage message={aboutThisPageMessage} />
            <AboutTheTraduction message={aboutTraductionMessage} />
            <CatalogoNovelas {...catalogoNovelasData} />
            <CommentsView {...commentsSectionsData} opacity={0.6} opacitySmall={0.5}/>
        </Box>
    );
}