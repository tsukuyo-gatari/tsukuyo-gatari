import { useNavigate } from "react-router-dom";

export const redirectTo = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
}

export const navigateTo = () => {
    const navigate = useNavigate();

    return (url: string) => {
        navigate(url);
        window.scrollTo(0, 0);
    }
}