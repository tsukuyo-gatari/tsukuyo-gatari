import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
        }, 0);
        return () => clearTimeout(timer);
    }, [pathname]);

    return null;
};