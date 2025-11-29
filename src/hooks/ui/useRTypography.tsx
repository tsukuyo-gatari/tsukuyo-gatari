import { useEffect, useState } from "react"
import { useStartTransition } from "../useStartTransition"
import "../../styles.css"

type ParsedSegment =
    | { type: "text"; value: string }
    | {
        type: "link" | "dialog";
        label: string;
        href: string;
        className?: string;
    };

export const useRTypography = (props: { variant?: string, text: string }) => {
    const { ref, getStyle } = useRTypographyStyles({ variant: props.variant })
    const [parsedChildren, setParsedChildren] = useState<React.ReactNode>();

    const init = () => setParsedChildren(parseTextWithLinks(props.text));

    const parseTextWithLinks = (text: string): React.ReactNode => {
        const segments = parseSegments(text);

        return segments.map((seg) => {
            if (seg.type === "text") {
                return <span key={seg.value}> {seg.value} </span>;
            }

            if (seg.type === "dialog") {
                return <span key={seg.label} className={"character " + (seg.className || "")}> {seg.label} </span>;
            }

            return (
                <a key={seg.label} href={seg.href} className={seg.className} target="_blank" rel="noopener noreferrer">
                    {seg.label}
                </a>
            );
        });

    }

    const parseSegments = (text: string): ParsedSegment[] => {
        const { isSegment, rawParts, segment } = validateSegment(text);
        if (!isSegment) { return segment!; }
        const segments = buildSegments(rawParts!);
        return segments;
    }

    const getSegmentData = (inner: string): { label: string; href: string; className?: string } => {
        const [labelRaw, hrefRaw, classNameRaw] = inner.split("|");
        const label = labelRaw.trim();
        const href = hrefRaw
            ? hrefRaw.trim()
            : "/" + label.toLowerCase().replace(/\s+/g, "-");

        const className = classNameRaw?.trim();
        return { label, href, className };
    }

    const buildSegments = (rawParts: string[]): ParsedSegment[] => {
        const segments: ParsedSegment[] = [];

        for (const part of rawParts ?? []) {
            if (!/^§[^§]+§$/.test(part)) {
                segments.push({ type: "text", value: part });
                continue;
            }
            const inner = part.slice(1, -1);
            const { label, href, className } = getSegmentData(inner);
            segments.push({ type: href.trim() === "" ? "dialog" : "link", label, href, className: className || undefined });
        }
        return segments;
    }

    const validateSegment = (text: string): { isSegment: boolean; segment?: ParsedSegment[], rawParts?: string[] } => {
        if (typeof text !== "string") {
            return { isSegment: false, segment: [{ type: "text", value: "" }] };
        }
        if (!text.includes("§")) {
            return { isSegment: false, segment: [{ type: "text", value: text }] };
        }
        const rawParts = text.split(/(§[^§]+§)/g);
        const hasPatterns = rawParts.some((p) => /^§[^§]+§$/.test(p));
        if (!hasPatterns) {
            return { isSegment: false, segment: [{ type: "text", value: text }] };
        }
        return { isSegment: true, rawParts };
    }

    useEffect(init, [props.text])

    return { ref, getStyle, parsedChildren }
}


const useRTypographyStyles = (props: { variant?: string }) => {
    const { ref, visible } = useStartTransition()

    const sizes: { [key: string]: number } = {
        'body1': 1,
        'h1': 5,
        'h2': 4,
        'h3': 3,
        'h5': 1.5,
        'h4': 2,
        'h6': 1,
    }

    const getSize = (size: string) => {
        const sizeValue = sizes[size]
        if (size === "body1") {
            return {
                xs: `${sizeValue * 0.8}rem`,
                sm: `${sizeValue * 0.875}rem`,
                md: `${sizeValue}rem`,
                lg: `${sizeValue}rem`,
            }
        }
        return {
            xs: `${sizeValue * 0.5}rem`,
            sm: `${sizeValue * 0.6}rem`,
            md: `${sizeValue * 0.75}rem`,
            lg: `${sizeValue}rem`,
        }
    }

    const getStyle = () => {
        return {
            fontSize: getSize(props.variant as string),
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            "& ::selection": {
                background: 'rgba(255, 255, 255, 0.5)',
                color: 'black',
            }
        }
    }

    return { ref, getStyle }
}