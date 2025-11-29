import { readJson } from "./jsonReader"

export const publicFileReader = () => {
    const pathName = globalThis.location.pathname
    const traductionsFolder = "traducciones/"
    const novelImgFolder = "novel_img/"
    const iconAvatarFolder = "icon_avatar/"
    const imageFormat = ".png"

    const getFromNovelImageFolder = (imageName: string) => {
        return pathName + novelImgFolder + imageName + imageFormat
    }

    const getFromPublicImageFolder = (imageName: string) => {
        return pathName + imageName + imageFormat
    }

    const getFromTraductionsFolder = (fileName: string) => {
        return pathName + traductionsFolder + fileName
    }

    const readJsonFolder = async (filePath: string): Promise<any> => {
        const data = await readJson(pathName + "data/" + filePath + ".json")
        return data
    }

    const getFromIconAvatarFolder = (iconName: string) => {
        return pathName + iconAvatarFolder + iconName + imageFormat
    }

    return {
        getFromNovelImageFolder,
        getFromPublicImageFolder,
        getFromTraductionsFolder,
        readJsonFolder,
        getFromIconAvatarFolder
    }
}