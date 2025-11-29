import { Moon } from "../ui/Moon"
import { RBox } from "../ui/RBox"
import { RTypography } from "../ui/RTypography"
import { YurryCanonSocialMedia, MySocialMedia } from "./SocialMedia"

export const Principal = () => {
    return (
        <RBox width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection={"column"}
            id="principal"
            component="section"
            sx={{
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(20,20,20,0.7) 100%)`
            }}>
            <RTypography variant="h4" className="title text-center mt-4"
                sx={{ color: "black !important", textShadow: '0.5px 0.5px 0px white' }}>
                月詠語り
            </RTypography>
            <RTypography variant="h4" className="title text-center mt-4"
                sx={{ color: "black !important", textShadow: '0.5px 0.5px 0px white' }}>
                TsukuyoGatari
            </RTypography>
            <Moon />
            <Credits />
        </RBox>
    )

}

export const AboutThisPage = (props: { message: string }) => {
    return (
        <RBox className="black-bg"
            id="about-this-page"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Sobre esta página
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                {props.message}
            </RTypography>
        </RBox>
    )
}

export const AboutTheTraduction = (props: { message: string }) => {
    return (
        <RBox className="black-bg"
            id="about-the-traduction"
            component="section">
            <RTypography variant="h3" className="title text-center mt-4">
                Sobre la traducción
            </RTypography>
            <RTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line">
                {props.message}
            </RTypography>
        </RBox>
    )
}

const Credits = () => {
    return <>
        <RTypography variant="h5" className="title text-center mt-4"
            sx={{ color: "white !important", textShadow: '1px 1px 2px black' }}>
            Escrito por: Yurry Canon
        </RTypography>
        <YurryCanonSocialMedia />
        <RTypography variant="h5" className="title text-center mt-4"
            sx={{ color: "white !important", textShadow: '1px 1px 2px black' }}>
            Traducido por: Gabriel López
        </RTypography>
        <MySocialMedia />
    </>
}