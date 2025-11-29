import { Box } from "@mui/material";
import { navigateTo } from "../../hooks/redirect";
import { LeftArrowButton, ListButton, RightArrowButton } from "./AnimatedButton";

export interface ChaptersLinkProps {
    nextChapterLink?: string;
    previousChapterLink?: string;
    listChaptersLink?: string;
}

export const ChaptersLink = (props: ChaptersLinkProps) => {
    const navigate = navigateTo();

    const redirectTo = (link: string) => {
        navigate(link);

    }
    const width = { xs: '50%', lg: '10%' };

    return <Box width={"100%"} display={'flex'} flexDirection={'row'} justifyContent={'space-around'} bgcolor={'black'}
        paddingBottom={2} paddingTop={2}>
        {props.previousChapterLink ?
            <LeftArrowButton width={width} text="anterior" onClick={() => redirectTo(props.previousChapterLink ?? '/')} /> :
            <Box sx={{ width: "10%" }} />}
        <ListButton width={width} text="Capítulos" onClick={() => redirectTo(props.listChaptersLink ?? '/shinzou/')} />
        {props.nextChapterLink ?
            <RightArrowButton width={width} text="siguiente" onClick={() => redirectTo(props.nextChapterLink ?? '/')} /> :
            <Box sx={{ width: width }} />}
    </Box>
}