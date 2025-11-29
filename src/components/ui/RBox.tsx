import { Box } from "@mui/material"
import { type BoxProps } from "@mui/material"
import { useLectureBox, useRBox } from "../../hooks/ui/useRBox";

export interface RBoxProps extends BoxProps {
    component?: "section" | "div" | "article" | "main" | "aside" | "nav";
    ignorePadding?: boolean;
    ignoreTopPadding?: boolean;
    ignoreBottomPadding?: boolean;
}

export const RBox = (props: RBoxProps) => {
    const { padding } = useRBox(props);

    return (
        <Box {...props}
            width={props.width ?? "100%"}
            component={props.component ?? "div"}
            sx={{
                ...props.sx,
                ...padding,
            }} />
    )
}

export const LectureBox = (props: RBoxProps) => {
    const { padding } = useLectureBox(props);

    return (
        <Box {...props}
            width={props.width ?? "100%"}
            component={props.component ?? "div"}
            sx={{
                ...props.sx,
                ...padding,
            }} />
    )
}