import {multiply, splitToWords} from "./01";

/*test("Testing multiply", () => {
    // input data
    const a = 2;
    const b = 8;
    const c = 8;

    // action
    const result1 = multiply(a, b)
    const result2 = multiply(c, b)

    // expect result
    expect(result1).toBe(16)
    expect(result2).toBe(64)
})*/

test("Testing splitToWords", () => {
    const sent1 = "Hello guys! How are you?"
    const sent2 = "Dont forget about   to rest"

    const result1 = splitToWords(sent1)
    const result2 = splitToWords(sent2)

    expect(result1.length).toBe(5)
    expect(result1[0]).toBe("Hello")
    expect(result1[1]).toBe("guys")
    expect(result1[2]).toBe("How")
    expect(result1[3]).toBe("are")
    expect(result1[4]).toBe("you")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("Dont")
    expect(result2[1]).toBe("forget")
    expect(result2[2]).toBe("about")
    expect(result2[3]).toBe("to")
    expect(result2[4]).toBe("rest")
})
