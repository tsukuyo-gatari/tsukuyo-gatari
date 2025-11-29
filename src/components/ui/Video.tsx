import { Box } from "@mui/material"
import { useStartTransition } from "../../hooks/useStartTransition"

export interface VideoProps {
    videoLink?: string;
}

export const Video = (props: VideoProps) => {
    const { ref, visible } = useStartTransition()

    return <Box className="video-container" ref={ref}
        sx={{
            marginTop: 5, width: { xs: '90%', md: '60%' }, height: { xs: '200px', md: '440px' },
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
        <iframe
            width="100%"
            height="100%"
            src={props.videoLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
    </Box>
}