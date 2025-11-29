import { publicFileReader } from "../dataReader/publicFileReader"

export const useAvatar = () => {
    const { getFromIconAvatarFolder } = publicFileReader();
    const iconIndexes = [1, 2, 3, 4, 5, 6, 7, 8];
    const commenticons = iconIndexes.map((iconIndex) => getFromIconAvatarFolder(`${iconIndex}`));

    const getIconLink = (iconIndex: number) => {
        return commenticons[iconIndex % commenticons.length];
    }

    return { getIconLink, commenticons };
}