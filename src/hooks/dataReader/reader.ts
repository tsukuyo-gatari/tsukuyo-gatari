
const normalizeLineEndings = (text: string): string => {
    return text.split('\r\n').join('\n').split('\r').join('\n');
}

export const readFile = async (file: string): Promise<string> => {
    let content: string = "";

    try {
        const res = await fetch(file);
        const rawContent = await res.text();
        content = normalizeLineEndings(rawContent);
    } catch (err) {
        console.error('Error al leer el archivo:', err);
    }

    return content;
}

export interface SumaryInfo {
    engTitle: string;
    jpTitle: string;
    esTitle: string;
    romajiTitle: string;
    bodyParagraphs: string[];
}

export const readSummaryFile = async (file: string): Promise<SumaryInfo> => {
    const data = await readFile(file);
    const content = data.split('\n');

    return {
        engTitle: content[0] || '',
        jpTitle: content[1] || '',
        romajiTitle: content[2] || '',
        esTitle: content[3] || '',
        bodyParagraphs: content.slice(4).filter(line => line.trim() !== '')
    }
}

export const readBodyParagraphs = (paragraph: string): string[] => {
    return paragraph.split('\n\n').map(p => p.trim()).filter(p => p !== '');
}