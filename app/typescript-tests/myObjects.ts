/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
// const User = {
//     name: "Rohan",
//     email: "r@r.com",
//     isActive: true
// }

// function createUser({name: string, isPaid: boolean}) {

// }

// // biome-ignore lint/style/useConst: <explanation>
// let newUser = {name: "rohan", isPaid: false, email: "r@r.com"}

// createUser(newUser)

// function createCourse(): {name: string, price: number}{
//     return {name: "reactjs", price: 399}
// }


type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createUser(user:User){}

createUser({name: "rohan", email: "", isActive: true})

console.log(createUser)

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

const CreditCard: cardDetails = {
    cardnumber: "la;skdjfl;askdjf;l",
    cardDate: "alksdjf;lskdjfl;s",
    cvv: 234
}

console.log(CreditCard)

export {}