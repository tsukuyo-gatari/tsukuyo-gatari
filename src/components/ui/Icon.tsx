import Avatar, { type AvatarProps } from "@mui/material/Avatar"
import { useIconAvatar } from "../../hooks/ui/useIcon";
import { Box, IconButton } from "@mui/material";
import { LectureTypography } from "./RTypography";
import { useStartTransition } from "../../hooks/useStartTransition";


export interface IconProps extends AvatarProps {
    href: string;
}

export const Icon = (props: IconProps) => {
    const { ref, visible } = useStartTransition()

    return <IconButton href={props.href} target="_blank" rel="noopener noreferrer" ref={ref}
        sx={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }}>
        <Avatar
            {...props}
            className="icon"
        />
    </IconButton>
}


interface IconAvatarProps {
    iconLink: string;
    selected?: boolean;
    onClick?: () => void;
    width?: number | string | any;
    height?: number | string | any;
}

export const IconAvatar = (props: IconAvatarProps) => {
    const { ref, styles } = useIconAvatar({
        selected: props.selected,
        onClick: props.onClick,
        width: props.width,
        height: props.height,
    });

    return <Avatar ref={ref} onClick={props.onClick} src={props.iconLink} sx={styles} />
}


export interface IconSelectProps {
    icons?: string[];
    iconIndex?: number;
    setIconIndex?: (icon: number) => void;
}

export const IconSelect = (props: IconSelectProps) => {
    return <Box display={'flex'} flexDirection={{ xs: "column", lg: "row" }} gap={2} alignItems={'center'}>
        <LectureTypography>
            Elije un ícono:
        </LectureTypography>
        <Box display={'flex'} flexDirection={'row'} gap={2} flexWrap={'wrap'} alignItems={'center'} justifyContent={'center'}>
            {props.icons?.map((iconLink, index) => (
                <IconAvatar key={iconLink} iconLink={iconLink} selected={index === props.iconIndex} onClick={() => props.setIconIndex?.(index)} />
            ))}
        </Box>
    </Box>
}