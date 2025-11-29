import { Avatar, Box } from "@mui/material"
import MoonIcon from "../../assets/moon.png";
import Logo from "../../assets/logo.svg";
import "../../styles.css";

export const Moon = ({ small } : { small?: boolean }) => {
    const getSmallConfig = () => {
        if (small) {
            return { size: {
                width: { xs: '100px', md: '150px' }, 
                height: { xs: '100px', md: '150px' }
            }, 
            scale: { xs: 0.5, md: 0.8 }, 
            top: { xs: '0%', md: '30%' }, 
            left: { xs: '43%', md: '47%' } };
        }
        return { size: {}, scale: 1.5, top: '50%', left: '50%' };
    }

    const smallConfig = getSmallConfig();

    return (
        <Box sx={{
            position: "relative",
            margin: 10
        }}>
            <Box className="moon" sx={smallConfig.size}>
                <Avatar alt="moon" src={MoonIcon} sx={{ width: '145%', height: '145%' }} />
            </Box>
            <Box component={'img'} src={Logo} sx={{
                position: 'absolute',
                scale: smallConfig.scale,
                zIndex: 2,
                top: smallConfig.top,
                left: smallConfig.left,
                filter: 'invert(1) sepia(1) saturate(10000%) hue-rotate(180deg)',
                animation: 'fadeIn 1s ease-out forwards',
            }} />
            <style>
                {`
                    @keyframes fadeIn {
                    0% {
                        opacity: 0;
                        transform: translate(-40%, -30%) scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: translate(-40%, -30%) scale(1);
                    }
                    }
                `}
            </style>
        </Box>

    )
}