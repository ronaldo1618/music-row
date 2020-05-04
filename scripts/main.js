const createBluegrassArtist = (name, age) => {
    return {
        name: name,
        genre: "Bluegrass",
        age: age
    }
}

const createCountryArtist = (name, age) => {
    return {
        name: name,
        genre: "Country",
        age: age
    }
}

const createFunkArtist = (name, age) => {
    return {
        name: name,
        genre: "Funk",
        age: age
    }
}

const createRapArtist = (name, age) => {
    return {
        name: name,
        genre: "Rap",
        age: age
    }
}

const createPopArtist = (name, age) => {
    return {
        name: name,
        genre: "Pop",
        age: age
    }
}

let JumpStopRecords = [createFunkArtist("Dre Funkz", 25), createRapArtist("Dusta Grimes", 21), createRapArtist("Loyonce Branis", 27)]
let ChattenRecords = [createCountryArtist("Bruce Atikins", 23), createCountryArtist("Avilee Dallas", 19), createBluegrassArtist("Bartholomew Danielson", 23)]
let PolarRecords = [createPopArtist("Jensen Brown", 20), createPopArtist("Austin Kinkaid", 22)]

console.log("JumpStop Records", JumpStopRecords)
console.log("Chatten Records", ChattenRecords)
console.log("Polar Records", PolarRecords)