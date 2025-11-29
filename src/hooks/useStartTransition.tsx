import { useEffect, useRef, useState } from "react";

export const useStartTransition = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return {
        ref,
        visible,
    }
}