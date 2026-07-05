import fs from "fs"

async function readFromUrl() {
    try {
        const response = await fetch("https://server-for-test-week-13.onrender.com/api/race")

        if (!response.ok) {
            return console.log(`error ${response.status}`)
        }
        const data = await response.json()
        await fs.writeFileSync("data/raceData.json", JSON.stringify(data, null, 2), 'utf-8')

    } catch (error) {
        console.log(error)
    }
}

// readFromUrl()


async function readFromJson() {
    try {
        const data = await fs.readFileSync("data/raceData.json", "utf-8")
        const newData = JSON.parse(data)
        return newData
    } catch (error) {
        console.log(error)
    }
}


export{
    readFromUrl,
    readFromJson
}

