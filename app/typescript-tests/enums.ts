// const AISLE = 0
// const MIDDLE =1
// const WINDOW = 2

// if (seat === AISLE) {

// }

// biome-ignore lint/style/useEnumInitializers: <explanation>
enum SeatChoice {
    AISLE = "AISLE",
    MIDDLE = 3,
    WINDOW = "WINDOW",
    FOURTH = 0
}

const rSeat = SeatChoice.MIDDLE

console.log(rSeat)