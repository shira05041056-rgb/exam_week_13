import { readFromJson, readFromUrl } from "./raceService.js"

export async function nameRace() {
    const data = await readFromJson()
    console.log(data.raceName)
}


export async function lapRace() {
    const data = await readFromJson()
    console.log(`${data.currentLap} / ${data.totalLaps}`)
}

export async function totalCars() {
    const data = await readFromJson()
    console.log(data.cars.length)
}


 function isCompleted(car) {
    return car.status === "done"
}

export async function pitStopCompleted() {
    let data = await readFromJson()
    data = data.cars.filter(isCompleted)
    console.log(data.length)
}

 function isWaiting(car) {
    return car.status === "waiting"
}

export async function carsWaiting() {
    let data = await readFromJson()
    data = data.cars.filter(isWaiting)
    data.forEach(car => {
        console.log(`- Car #${car.carNumber} | Driver: ${car.driverName}`)
    });

}


export async function nextCar() {
    let data = await readFromJson()
    data = data.cars.filter(isWaiting)
    console.log(`>> Car #${data[0].carNumber} | Driver: ${data[0].driverName}`)

}

export async function radioMessage() {
    let data = await readFromJson()
    data = data.cars.filter(isWaiting)
    console.log(`Radio message to car #${data[0].carNumber}: "Box box box, ${data[0].driverName}, pit this lap!"`)

}

export async function searchByNumber(id) {
    let data = await readFromJson()
    data.cars.forEach(car => {
        if (car.carNumber === id) {
            console.log(`Found car #${car.carNumber} | Driver: ${car.driverName} | Status: ${car.status}`)
        } else {
            console.log(`Error: No car found with number #${id} in the current race.`);

        }
    });
}


