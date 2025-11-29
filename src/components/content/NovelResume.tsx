import { Box } from "@mui/material";
import { useNovelResume } from "../../hooks/content/useNovelResume";
import type { SumaryInfo } from "../../hooks/dataReader/reader";
import { NovelBody } from "./NovelBody";
import AnimatedButton from "../ui/AnimatedButton";
import { LectureTitle } from "../ui/LectureTitle";
import { RBox } from "../ui/RBox";
import { Image, ImageNoLink } from "../ui/Image"
import { LectureTypography } from "../ui/RTypography";
import { publicFileReader } from "../../hooks/dataReader/publicFileReader";

export interface NovelResumeProps {
    sumaryFile?: string;
    image?: string;
    to?: string;
    videoLink?: string;
}

export const NovelResume = (props: NovelResumeProps) => {
    const { sumaryInfo, navigate } = useNovelResume({ sumaryFile: props.sumaryFile });

    return (
        <RBox display={"flex"} flexDirection="column" gap={6} width={'100%'} ignorePadding>
            <NovelTitles {...sumaryInfo} />
            <Box display={"flex"} flexDirection={{ xs: 'column', md: 'row' }} gap={{ xs: 2, md: 6 }} width={'100%'}>
                <Image src={props.image} sx={{ width: { xs: '100%', md: '100%' }, height: '100%' }} to={props.videoLink} />
                <NovelResumeContent to={props.to} sumaryInfo={sumaryInfo} navigate={navigate} />
            </Box>
        </RBox>
    )
}

const NovelTitles = (props: SumaryInfo) => {
    return <Box display={"flex"} flexDirection="column" width={'100%'} justifyContent="center" alignItems="center" gap={2}>
        <LectureTitle text={props.engTitle} />
        <LectureTypography variant="h5" sx={{ color: '#dddddd !important' }}>
            {props.jpTitle}
        </LectureTypography>
        <LectureTypography variant="h5" sx={{ color: '#aaaaaa !important' }}>
            {props.romajiTitle}
        </LectureTypography>
        <LectureTypography variant="h5" sx={{ color: '#aaaaaa !important' }}>
            {props.esTitle}
        </LectureTypography>
    </Box>
}

const NovelResumeContent = (props: { to?: string, sumaryInfo: SumaryInfo, navigate: (to: string) => void }) => {
    const { getFromPublicImageFolder } = publicFileReader();
    return <Box display={"flex"} flexDirection="column" width={'100%'}>
        {props.sumaryInfo.bodyParagraphs.length > 0 ?
        <NovelBody bodyParagraphs={props.sumaryInfo.bodyParagraphs} /> :
        <NoContent imageSrc={getFromPublicImageFolder("assets/yomu")} />}
        <Box component={'a'} href={`#/${props.to}`}>
            <AnimatedButton text="Leer más" marginTop="30px" onClick={() => props.to && props.navigate(props.to)} />
        </Box>
    </Box>
}

const NoContent = (props: { imageSrc: string }) => {
    return <Box display={"flex"} flexDirection="column" width={'100%'} justifyContent="center" alignItems="center" gap={2}>
        <ImageNoLink width={'70%'} height={'100%'} src={props.imageSrc} sx={{ opacity: 0.3}}/>
    </Box>
}