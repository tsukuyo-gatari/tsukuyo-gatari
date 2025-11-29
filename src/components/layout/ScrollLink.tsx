import { Link } from "react-scroll";

export interface ScrollLinkProps {
    to: string;
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
    duration?: number;
}

export const ScrollLink = (props: ScrollLinkProps) => {

    return <Link to={props.to} className={props.className ?? "link-text"}
        smooth={true} duration={props.duration ?? 1000} spy={true} onClick={props.onClick}>
        {props.children}
    </Link>

}