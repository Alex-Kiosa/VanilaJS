type UsersType = {
    [key: string]: { id: number, name: string }
}

let users: UsersType

beforeEach(() => {
    users = {
        1: {id: 1, name: "Alex"},
        2: {id: 2, name: "Jack"},
        3: {id: 3, name: "Sam"},
        4: {id: 4, name: "Fill"},
    }
})

test("Should update corresponding user", () => {
    users[1]["name"] = "Aleksei"

    expect(users["1"].name).toBe("Aleksei")
})

test("Should delete coressponding user", () => {
    delete users[4]

    expect(users[4]).toBeUndefined()
})