let score: number | string = 33

score = 44

score = "reslly"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let rohan: User | Admin = {
    name: "Rohan",
    id: 334
}

rohan = {username: "hc", id: 334}

console.log(score)
console.log(rohan.username)

// function getDbId(id: number | string) {

//     console.log(`db id is: ${id}`)
// }


getDbId(3)
getDbId('3')

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    } 

}

