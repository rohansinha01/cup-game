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
    }
}

console.log(roro)