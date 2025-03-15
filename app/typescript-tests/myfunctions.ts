function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toLocaleUpperCase()
}

console.log(addTwo(5))
getUpper("hello")

const heros = ["thor", "spiderman", "ironman"]

console.log(heros.map((hero): string => {
    return `hero is ${hero}`
})
)
