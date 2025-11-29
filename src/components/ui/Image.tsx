import { Avatar, Box, type BoxProps } from "@mui/material";
import { useStartTransition } from "../../hooks/useStartTransition";
import playIcon from "../../assets/play.png";
import { redirectTo } from "../../hooks/redirect";

export interface ImageProps extends BoxProps {
    src?: string;
    to?: string;
}

export const Image = (props: ImageProps) => {
    const { ref, visible } = useStartTransition()

    return <Box className="swiper main-swiper py-4" data-aos="fade-up" data-aos-delay="600" {...props} height={'100%'}
        ref={ref} sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            ...props.sx
        }}>
        <Box className="swiper-slide" height={'100%'} >
            <Box className="banner-item image-zoom-effect" height={'100%'} >
                <Box className="image-holder image-box" height={'100%'} onClick={() => props.to && redirectTo(props.to)}>
                    <Img src={props.src} />
                    <Box className="image-box-item-hidden" width={'100%'} height={'100%'} display="flex" justifyContent="center" alignItems="center">
                        <Avatar src={playIcon} sx={{width: { xs: 150, md: 200 }, height: { xs: 150, md: 200 }, color: 'transparent'}}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
}

const Img = (props: ImageProps) => {
    return <Box
        component="img"
        className="img-fluid"
        {...props}
    />
}

export const ImageNoLink = (props: ImageProps) => {
    const { ref, visible } = useStartTransition()

    return <Box
        component="img"
        className="img-fluid"
        {...props}
        ref={ref} sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            ...props.sx
        }}
    />
}