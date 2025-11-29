import { Box } from "@mui/material"
import { LectureTitle } from "../ui/LectureTitle"
import { RBox } from "../ui/RBox"
import { LectureTypography } from "../ui/RTypography"
import { ScrollLink } from "../layout/ScrollLink"

export const ShinzouInfoChapters = () => {
    return (
        <RBox className="black-bg">
            <Box display={"flex"} flexDirection="row" width={'100%'} justifyContent="center" alignItems="center">
                <LectureTitle text="Secciones" />
            </Box>
            <LectureTypography variant="body1" className="mt-4" align="left" whiteSpace="pre-line" ignoreParse>
                Esta novela se divide en 3 partes:
                <br /><br /> La parte 1 <ScrollLink to="shinshou">"Shinshou Roku"(Imágenes mentales)</ScrollLink> pertenece al primer álbum de Tsukuyomi "Kaketa shinzou, yono yosuga" (Mis rotas imágenes mentales, la razón de este mundo)
                <br /><br /> La parte 2 <ScrollLink to="tsuisou">"Tsuisou Roku"(Imágenes retrospectivas)</ScrollLink> pertenece al fan club de Tsukuyomi "Tsuki no ura"
                <br /><br /> La parte 3 <ScrollLink to="kaisou">"Kaisou Roku"(Reminiscencias)</ScrollLink> pertenece al segundo álbum de Tsukuyomi "Tsuki ga michiru" (Luna LLena)
                <br /><br /> No hay parte 4 pero agregué un <ScrollLink to="extra">Extra</ScrollLink> que son capítulos que no pertenecen a los álbumes, pero aparecen en las canciones de Yurry Canon.
                <br /><br /> Por si les interesa, también hay <ScrollLink to="novela">Novela visual</ScrollLink> subida en el canal de Tsukuyomi
                <br /><br /> También he agregado <ScrollLink to="interview">Comentarios del autor</ScrollLink> que agregan un poco más de detalle a la obra.
                <br /><br /> Y una <ScrollLink to="review">Reseña</ScrollLink> personal sobre la novela.
            </LectureTypography>
        </RBox>
    )
}