export const multiply = (a: number, b: number) => {
    return a * b
}

multiply(2, 8)

export const splitToWords = (str: string) => {
    const regex = /\W/
    const words = str.split(" ")

    return words
        .filter(w => w !== "")
        .map(w => w.replace(regex, ""))
}

splitToWords("Hello guys! How are you?")