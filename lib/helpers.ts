export const toBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = error => reject(error)
    })
}

// funcion generadora
export async function* streamReader(res: Response) {
    const reader = res.body?.getReader()
    const decoder = new TextDecoder()
    if (reader == null) return
    while (true) {
        const { done, value } = await reader.read()
        const chunk = decoder.decode(value)
        yield chunk
        if (done) break
    }
}
