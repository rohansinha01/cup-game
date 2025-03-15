/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable prefer-const */
// interface User {name: string, age: number}

// const profile: User = {name: "Rohan", age: 40}

// console.log(profile)

// biome-ignore lint/style/useConst: <explanation>
// eslint-disable-next-line prefer-const
// biome-ignore lint/style/useConst: <explanation>
let greetings = "Hello Rohan"

greetings.toLocaleUpperCase

console.log(greetings)

let hero: string;

function getHero() {
    return "thor"
}

hero = getHero()

console.log(hero)