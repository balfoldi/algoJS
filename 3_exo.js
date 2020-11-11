const {
    processData
} = require("./parseData")

const exoOneOneLoop = (dataArray) => {
    const k = dataArray.shift()
    console.log("k = " + k)
    console.log(dataArray)
 
    const oneLoop = (indexA = 0, indexB = 0) => {
        if (indexA >= dataArray.length) return false
        console.log(dataArray[indexA] + "+" + dataArray[indexB] + "=" + k + "?" + (indexA !== indexB && dataArray[indexA] + dataArray[indexB] === k) + "=" + (dataArray[indexA] + dataArray[indexB]))

        if (indexA !== indexB && dataArray[indexA] + dataArray[indexB] === k){
        return `true ${dataArray[indexA]} + ${dataArray[indexB]} = ${k}`
        }
        return (indexB <= dataArray.length - 2) ? oneLoop(indexA, indexB + 1) : oneLoop(indexA + 1)
    }
    console.log(oneLoop())
}
processData(exoOneOneLoop)