const {
    processData
} = require("./parseData")

const exoTwoOneLoop = (dataArray) => {
    const k = dataArray.shift()
    console.log(dataArray)
    dataArray = dataArray.reverse()

    var highestBuilding = 0

    result = []

    const oneLoop = (indexA = 0) => {
        if (indexA === dataArray.length - 1) return
        if (dataArray[indexA] > highestBuilding) {
            result.push(`${dataArray[indexA]} > ${highestBuilding}`)
            highestBuilding = dataArray[indexA]
        }
        oneLoop(indexA + 1)

    }

    oneLoop()

    console.log(result.join("\n") + "\n" + result.length + " buildings are exposed")
}

processData(exoTwoOneLoop)