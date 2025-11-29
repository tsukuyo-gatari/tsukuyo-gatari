import { Typography } from "@mui/material"
import { type TypographyProps } from "@mui/material"
import { useRTypography } from "../../hooks/ui/useRTypography";

export interface RTypographyProps extends TypographyProps {
    ignoreParse?: boolean;
}

export const RTypography = (props: RTypographyProps) => {
    const { ref, getStyle, parsedChildren } = useRTypography({ variant: props.variant, text: props.children as string });

    return (
        <Typography {...props}
            ref={ref}
            sx={{
                ...getStyle(),
                ...props.sx
            }}
        >
            {props.ignoreParse ? props.children : parsedChildren}
        </Typography>
    )
}

export const LectureTypography = (props: RTypographyProps) => {
    return <RTypography
        {...props}
        sx={{ color: props.color ?? "white !important", textShadow: '1px 1px 2px black', ...props.sx }}>

    </RTypography>
}