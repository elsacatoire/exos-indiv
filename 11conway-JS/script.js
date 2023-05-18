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


// main application
let result1 = cutString(simpleStr)
let result2 = cutString(biggerStr)
