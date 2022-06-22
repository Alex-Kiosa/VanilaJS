type UsersType = {
    [key: string]: {id: number, name: string}
}

export const users : UsersType = {
    1: {id: 1, name: "Alex"},
    2: {id: 2, name: "Jack"},
    3: {id: 3, name: "Sam"},
    4: {id: 4, name: "Fill"},
}

let user = {id: 1, name: "Sara"}
users[user.id] = user
delete users[user.id]
users[2] = {id: 1000000, name: "Jhon Kononr"}

export const usersArray = [
    {id: 1, name: "Alex"},
    {id: 2, name: "Jack"},
    {id: 3, name: "Sam"},
    {id: 4, name: "Fill"},
]