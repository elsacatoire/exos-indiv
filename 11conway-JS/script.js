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

function conwaySuit(char, n) {
    let transitionStr = char
    let resultConway = [char]
    for (let i = 0; i < n - 1; i++) {
        transitionStr = describeStr(transitionStr)
        resultConway.push(transitionStr)
    }
    return resultConway
}

function conwaySuitLog(char, n) {
    let transitionStr = char
    for (let i = 0; i < n; i++) {
        console.log(transitionStr)
        transitionStr = describeStr(transitionStr)
    }
    return
}



// main application
let result1 = cutString(simpleStr)
let result2 = cutString(biggerStr)
let resultDescribe1 = describeStr(simpleStr)
let resultDescribe2 = describeStr(biggerStr)
let testConway1 = conwaySuit('a', 3)
let testConway2 = conwaySuit('1', 3)
console.log(testConway1);
console.log(testConway2);
conwaySuitLog('a', 3)