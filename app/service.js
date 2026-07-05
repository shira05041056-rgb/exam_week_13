import { readFromJson, readFromUrl } from "./raceService.js"

async function nameRace() {
    const data = await readFromJson()
    console.log(data.raceName)
}


async function lapRace() {
    const data = await readFromJson()
    console.log(`${data.currentLap} / ${data.totalLaps}`)
}

async function totalCars() {
    const data = await readFromJson()
    console.log(data.cars.length)
}


function isCompleted(car) {
    return car.status === "done"
}

async function pitStopCompleted() {
    let data = await readFromJson()
    data = data.cars.filter(isCompleted)
    console.log(data.length)
}

function isWaiting(car) {
    return car.status === "waiting"
}

async function carsWaiting() {
    let data = await readFromJson()
    data = data.cars.filter(isWaiting)
    data.forEach(car => {
        console.log(`- Car #${car.carNumber} | Driver: ${car.driverName}`)
    });

}


async function nextCar() {
    let data = await readFromJson()
    data = data.cars.filter(isWaiting)
    console.log(`>> Car #${data[0].carNumber} | Driver: ${data[0].driverName}`)

}

async function radioMessage() {
    let data = await readFromJson()
    data = data.cars.filter(isWaiting)
    console.log(`Radio message to car #${data[0].carNumber}: "Box box box, ${data[0].driverName}, pit this lap!"`)

}

async function searchByNumber(id) {
    let data = await readFromJson()
    data = data.cars.find((id) =>{
        return id === data.cars.carNumber
    })
    console.log(data)

}

searchByNumber()