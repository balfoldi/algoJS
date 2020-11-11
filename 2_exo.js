const {
    processData
} = require("./parseData")

const exoTwoTwoLoop = (dataArray) => {
    const k = dataArray.shift()
    console.log(dataArray)
    dataArray = dataArray.reverse()

    var highestBuilding = 0

    result = []

    const secondLoop = ( indexA) => {
        if (indexA === dataArray.length - 1) return 
        if (dataArray[indexA] > highestBuilding){
            result.push(`${dataArray[indexA]} > ${highestBuilding}`)
            highestBuilding = dataArray[indexA] 
            return
        } 
        secondLoop( indexA + 1 )
    }

    const firstLoop = (indexA = 0) => {
        if (indexA >= dataArray.length) return 
        secondLoop(indexA)
        firstLoop(indexA + 1)
    }

    firstLoop()

    console.log(result.join("\n") + "\n" + result.length + " buildings are exposed")
}

processData(exoTwoTwoLoop)