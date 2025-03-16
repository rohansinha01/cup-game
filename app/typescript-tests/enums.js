// const AISLE = 0
// const MIDDLE =1
// const WINDOW = 2
// if (seat === AISLE) {
// }
// biome-ignore lint/style/useEnumInitializers: <explanation>
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice["WINDOW"] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 0] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var rSeat = SeatChoice.MIDDLE;
console.log(rSeat);
