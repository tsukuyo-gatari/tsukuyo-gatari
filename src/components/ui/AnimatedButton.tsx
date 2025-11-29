import { Box, Button, Typography } from "@mui/material";
import "../../button.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ListIcon from '@mui/icons-material/List';
import { useStartTransition } from "../../hooks/useStartTransition";

export interface AnimatedButtonProps {
    text?: string;
    marginTop?: string;
    width?: string | any;
    disabled?: boolean;
    onClick?: () => void;
}

export default function AnimatedButton(props: Readonly<AnimatedButtonProps>) {
    return <AnimatedButtonBox {...props}>
        <Typography className="text">{props.text}</Typography>
    </AnimatedButtonBox>
}

export interface AnimatedButtonBoxProps {
    onClick?: () => void;
    marginTop?: string;
    width?: string;
    children?: React.ReactNode;
}

export const AnimatedButtonBox = (props: Readonly<AnimatedButtonBoxProps>) => {
    const { ref, visible } = useStartTransition()

    return (
        <Button ref={ref} className="animated-button" variant="contained"
            onClick={props.onClick}
            sx={{
                marginTop: props.marginTop,
                width: props.width || { xs: '50%', lg: '25%' },
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                "&.Mui-disabled": {
                    backgroundColor: "rgba(176, 190, 197, 0.1) !important",
                },
            }}
            {...props}
            >
            {props.children}
            <span className="overlay" ></span>
        </Button>
    );
}


export const RightArrowButton = (props: Readonly<AnimatedButtonProps>) => {
    return <AnimatedButtonBox {...props}>
        <Typography className="text" sx={{ marginRight: '8px', fontSize: { xs: 8, lg: 16 } }}>{props.text}</Typography>
        <ArrowForwardIcon className="text" sx={{ fontSize: { xs: 16, lg: 25 } }} />
    </AnimatedButtonBox>
}

export const LeftArrowButton = (props: Readonly<AnimatedButtonProps>) => {
    return <AnimatedButtonBox {...props}>
        <ArrowForwardIcon className="text" sx={{ transform: 'rotate(180deg)', marginRight: '8px', fontSize: { xs: 16, lg: 25 } }} />
        <Typography className="text" sx={{ fontSize: { xs: 8, lg: 16 } }}>{props.text}</Typography>
    </AnimatedButtonBox>
}

export const ListButton = (props: Readonly<AnimatedButtonProps>) => {
    return <AnimatedButtonBox {...props}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <ListIcon className="text" sx={{ marginRight: '8px', fontSize: { xs: 16, lg: 25 } }} />
            <Typography className="text" sx={{ marginTop: '8px', fontSize: { xs: 8, lg: 16 } }}>{props.text}</Typography>
        </Box>
    </AnimatedButtonBox>
}