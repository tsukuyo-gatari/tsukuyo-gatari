import { Box } from "@mui/material"
import { LectureTypography } from "./RTypography"

export const LectureTitle = (props: { text: string }) => {
    return <Box display={"flex"} flexDirection="row" width={'100%'} justifyContent="center" alignItems="center">
        <LectureTypography variant="body1" sx={{ display: { xs: 'none', md: 'block' } }}>
            ────────────────────
        </LectureTypography>
        <LectureTypography variant="h3" >
            {props.text}
        </LectureTypography>
        <LectureTypography variant="body1" sx={{ display: { xs: 'none', md: 'block' } }}>
            ────────────────────
        </LectureTypography>
    </Box>
}