/* eslint-disable @typescript-eslint/no-unused-vars */
interface IUser {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

const roro: IUser = {
    dbId: 12,
    email: "r@r.com",
    userId: 2211,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "roro", off:3) => {
        return 10
    },
    githubtoken: "github"
}

interface IUser {
    githubtoken?: string
}

interface IAdmin extends IUser {
    role: "admin" | "ta" | "leaner"
}

const roro2: IAdmin = {
    dbId: 12,
    role: "admin",
    email: "r@r.com",
    userId: 2211,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "roro", off:3) => {
        return 10
    },
    githubtoken: "github"
}

console.log(roro)
console.log(roro2)