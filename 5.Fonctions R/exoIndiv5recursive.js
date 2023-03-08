const arrayInt = [1, 3, 6]

function sum1(array) {
    let sum11 = 0;
    for (let i = 0; i < array.length; i++) {
        sum11 += array[i]
    }
    return sum11
}
console.log(sum1(arrayInt))

//fonction récursive qui aditionne les élèments d'une liste
const listeTest = [1, 9, 2, 8]
function sum2(arr) {
    let sum22 = 0
    let out = 0
    for (let i = 0; i < arr.length; i++) {
        out = arr.pop()
        sum22 += (out + sum2(arr))
    }
    return sum22
}
console.log(sum2(listeTest))

//factoriel

function factorial(x) {
    if ((x === 0) || (x === 1)) {
        return 1;
    }
    else {
        return (x * factorial(x - 1));
    }
}
console.log(factorial(4))
