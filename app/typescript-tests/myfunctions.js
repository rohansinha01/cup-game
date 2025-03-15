function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toLocaleUpperCase();
}
console.log(addTwo(5));
getUpper("hello");
var heros = ["thor", "spiderman", "ironman"];
console.log(heros.map(function (hero) {
    return "hero is ".concat(hero);
}));
