const {
    processData
} = require("./parseData")

const exoTwoOneLoop = (dataArray) => {
    const k = dataArray.shift()
    console.log(dataArray)

    result = []

    const oneLoop = (indexA = 0) => {
        if (indexA === dataArray.length - 1) return
        if (!dataArray.slice(indexA + 1, dataArray.length).some((building) => {return building > dataArray[indexA] })) {
            console.log(true)
            result.push(`${dataArray[indexA]}`)
        }
        oneLoop(indexA + 1)

    }

    oneLoop()

    console.log(result.join("\n") + "\n" + result.length + " buildings are exposed")
}

processData(exoTwoOneLoop)