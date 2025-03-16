/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// const user: (string | number)[] = ['hc', 1]

// biome-ignore lint/style/useConst: <explanation>
let user: [string, number, boolean]

// eslint-disable-next-line prefer-const
user = ['hc', 131, true]
// user = [123, 'sdf', false] can't work becaue tuple

// biome-ignore lint/style/useConst: <explanation>
// eslint-disable-next-line prefer-const
// biome-ignore lint/style/useConst: <explanation>
let rgb: [number, number, number] = [255,123,112]
console.log(rgb)

type LUser = [number, string, boolean?]
const newLUser: LUser = [112, "r@r.com"]

newLUser[1] = "hc.com"
newLUser.push(true)

console.log(newLUser)