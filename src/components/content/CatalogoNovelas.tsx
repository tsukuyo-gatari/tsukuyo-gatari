import { Box, Divider } from "@mui/material"
import { RBox } from "../ui/RBox"
import { LectureTypography } from "../ui/RTypography"
import { NovelResume, type NovelResumeProps } from "./NovelResume"

export interface CatalogoNovelasProps {
    novelResumes?: NovelResumeProps[];
}

export const CatalogoNovelas = (props: CatalogoNovelasProps) => {
    return (
        <RBox>
            <LectureTypography variant="h3">
                Catálogo de Novelas
            </LectureTypography>
            {props.novelResumes?.map(novelResume => (
                <Box key={novelResume.to}>
                    <Divider sx={{ borderColor: 'black', borderBottomWidth: 2, my: 2, margin: { xs: 2, md: 10 } }} />
                    <NovelResume {...novelResume} />
                </Box>
            ))}
        </RBox>
    )
}