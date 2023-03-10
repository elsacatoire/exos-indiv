//exo individuel 5 

const arrayInt = [1, 3, 6]

//fonction qui additionne les élèment d'une array
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


function sum2R(array) {
    if (array.length === 0) {
        return 0;  // Cas de base : retourne 0 si le tableau est vide
    } else {
        return array[0] + sum2R(array.slice(1));  // Récursion : ajoute le premier élément du tableau à la somme du reste du tableau
    }
}

console.log(sum2R(arrayInt))


//fonction récursive qui sort les factoriels
function factorial(x) {
    if ((x === 0) || (x === 1)) {
        return 1;
    }
    else {
        return (x * factorial(x - 1));
    }
}
console.log(factorial(4))

//fibonacci en ???
function fibonacci(x) {


    if (x === 0) {
        return []
    }
    else if (x === 1) {
        return [0]
    }
    else if (x === 2) {
        return [0, 1]
    }
    else {
        const fib = [0, 1]
        for (let i = 2; i < x; i++) {
            fib[i] = fib[i - 1] + fib[i - 2]
        }
        return fib
    }

}
console.log(fibonacci(10))

//méthode 2 en récursive
/* let x = 10
function fibonacci2(x) {
    console.trace()
    if (x < 2) {
        return x
    }
    return fibonacci2(x - 1) + fibonacci2(x - 2)
}
for (let i = 0; i < 10; i++) {
    console.log(fibonacci2(i))
}
 */


