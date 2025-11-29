import { useStartTransition } from "../useStartTransition";

interface UseIconAvatarProps {
    selected?: boolean;
    onClick?: () => void;
    width?: number | string | any;
    height?: number | string | any;
}

export const useIconAvatar = (props: UseIconAvatarProps) => {
    const { ref, visible } = useStartTransition()

    return {
        ref,
        styles: {
            width: props.width || 56,
            height: props.height || 56,
            cursor: props.onClick ? 'pointer' : 'default',
            border: props.selected ? '3px solid red' : 'none',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) !important' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
        }
    }
}