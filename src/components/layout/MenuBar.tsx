import { ScrollLink } from "./ScrollLink";
import "../../styles.css";
import menuImg from "../../assets/menu.png";
import closeImg from "../../assets/close.png";
import arrowImg from "../../assets/arrow.png";
import { Box, Fade, Modal } from "@mui/material";
import { useState } from "react";
import { LectureTypography } from "../ui/RTypography";
import { Moon } from "../ui/Moon";
import { navigateTo } from "../../hooks/redirect";

export const MenuBar = ({ options }: { options?: MenuOptionData[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
            {!isOpen && <MenuButtons isOpen={isOpen} setIsOpen={setIsOpen} />}
            <MenuModal isOpen={isOpen} setIsOpen={setIsOpen} options={options??[]}/>
        </Box>
    );
}

const MenuButtons = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <Box>
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
            <ArrowButton />
        </Box>
    );
}

const MenuModal = ({ isOpen, setIsOpen, options }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void, options: MenuOptionData[] }) => {
    return <Modal open={isOpen} onClose={() => setIsOpen(false)} sx={{
        "& .MuiBackdrop-root": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
        },
    }}
        closeAfterTransition
    >
        <Fade in={isOpen} timeout={1000} >
            <Box>
                <MoonButton />
                <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
                <MenuOptions close={() => setIsOpen(false)} options={options} />
            </Box>
        </Fade>

    </Modal>
};

export interface MenuOptionData {
    to: string;
    text: string;
}

const MenuOptions = ({ close, options }: { close: () => void, options: MenuOptionData[] }) => {
    const navigate = navigateTo();
    return (
        <Box component={'header'} sx={{ position: 'absolute' }} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} width={'100%'} height={'100%'} >
            <Box component={'nav'} display={'flex'} flexDirection={'column'} alignItems={'center'}  gap={5} maxWidth={"70%"} sx={{overflowY: "auto"}}>
                <MenuOption to="home" text="Home" close={() => { close(); navigate("/") }} />
                {options.map((option) => (
                    <MenuOption key={option.to} to={option.to} text={option.text} close={close} />
                ))}
            </Box>
        </Box>
    );
}

const MenuButton = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: (isOpen: boolean) => void }) => {
    return (
        <Box className="menu-button-box" onClick={() => setIsOpen(!isOpen)} right={0}
            sx={{ width: { xs: '60px', md: '80px' }, height: { xs: '60px', md: '80px' } }}>
            <Box component={'img'} src={isOpen ? closeImg : menuImg} className="menu-button-icon" />
            <Box component={'canvas'} className="menu-button-light" />
        </Box>
    );
}

const ArrowButton = () => {
    return (
        <ScrollLink to="principal">
            <Box className="menu-button-box" right={0} bottom={0}
                sx={{ width: { xs: '60px', md: '80px' }, height: { xs: '60px', md: '80px' } }}>
                <Box component={'img'} src={arrowImg} className="menu-button-icon" />
                <Box component={'canvas'} className="menu-button-light" />
            </Box>
        </ScrollLink>
    )
}

const MoonButton = () => {
    const navigate = navigateTo();
    return <Box className="menu-button-box" left={0} margin={{ xs: 4, md: 8 }} onClick={() => navigate("/")}>
        <Moon small />
    </Box>
}

const MenuOption = ({ to, text, close }: { to: string, text: string, close: () => void }) => {
    return <ScrollLink to={to} onClick={close}>
        <LectureTypography variant="h4"
            sx={{
                transition: "text-shadow 0.3s ease-in-out",
                ":hover": {
                    textShadow: "0 0 7px white, 0 0 14px white"
                }
            }}
        >{text}</LectureTypography>
    </ScrollLink>
}