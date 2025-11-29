export const readJson = async (path: string): Promise<any> => {
    let data = {}

    try {
        const res = await fetch(path)
        data = await res.json()
    }
    catch (err) {
        console.error('Error al leer el archivo:', err);
    }

    return data
}