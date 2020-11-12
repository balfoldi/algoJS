const {
    processData
} = require("./parseData")

const exoOneOneLoop = (dataArray) => {
    const k = dataArray.shift()
    console.log("k = " + k)
    console.log(dataArray)
 
    const oneLoop = (indexA = 0) => {
        if (indexA >= dataArray.length) return false

        if (dataArray.includes( k - dataArray[indexA])){
        return `true ${k} - ${dataArray[indexA]} = ${k - dataArray[indexA]}`
        }
        return oneLoop(indexA + 1)
    }
    console.log(oneLoop())
}
processData(exoOneOneLoop)