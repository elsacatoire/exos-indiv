const simpleStr = "ab"
const biggerStr = "aabbca"

function cutString(srtingToCut) {
    let stringResult = ''
    for (let i = 0; i < srtingToCut.length; i++) {
        stringResult += srtingToCut[i]
        if (i < (srtingToCut.length - 1)) {
            if (srtingToCut[i] != srtingToCut[i + 1]) {
                stringResult += ' '
            }
        }
    }
    return stringResult
}

function describeStr(stringToDescribe) {
    let finalStr = ''
    let counter = 1
    for (let i = 0; i < stringToDescribe.length; i++) {
        if (stringToDescribe[i] == stringToDescribe[i + 1]) {
            counter += 1
        } else {
            finalStr += counter + stringToDescribe[i]
            counter = 1
        }
    }
    return finalStr
}


// main application
let result1 = cutString(simpleStr)
let result2 = cutString(biggerStr)
let resultDescribe1 = describeStr(simpleStr)
let resultDescribe2 = describeStr(biggerStr)