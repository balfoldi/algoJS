const {
    processData
} = require("./parseData")

const exoOneTwoLoop = (dataArray) => {
    const k = dataArray.shift()
    console.log("k = " + k)
    console.log(dataArray)

    const secondLoop = ( indexA, indexB = 0 ) => {
        if (indexB === dataArray.length - 1) return false
        if (indexA !== indexB && dataArray[indexA] + dataArray[indexB] === k){
            console.log(dataArray[indexA] + "+" + dataArray[indexB] + "=" + k + "?" + (indexA !== indexB && dataArray[indexA] + dataArray[indexB] === k) + "=" + (dataArray[indexA] + dataArray[indexB]))
            return (`true ${dataArray[indexA]} + ${dataArray[indexB]} = ${k}`)
        } 
        return secondLoop( indexA, indexB + 1 )
    }

    const firstLoop = (indexA = 0) => {
        if (indexA >= dataArray.length) return false
        const result = secondLoop(indexA)
        return result ? result : firstLoop(indexA + 1)
    }

    console.log(firstLoop())
}

processData(exoOneTwoLoop)