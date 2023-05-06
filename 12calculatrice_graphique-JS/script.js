function pressKey(key) {
    let writeCalcul = document.getElementById("calcul")
    if (key == "AC") {
        return writeCalcul.value = 0
    }
    if (key == "=") {
        return calculIt()
    }
    if (writeCalcul.value == "0") {
        writeCalcul.value = key
    } else {
        writeCalcul.value = writeCalcul.value + key
    }
    return writeCalcul.value
}

function calculIt() {
    console.log("we need the result now");
    let writeResult = document.getElementById("equal")
    writeResult.value = "result"
}

function sum(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function times(a, b) {
    return a * b
}
function division(a, b) {
    return a / b
}

function taping() {

}
document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
        var valueKey = event.target.value;
        console.log("Bouton cliqué : " + valueKey);
        pressKey(valueKey)
    }
});


const add = document.getElementById("+")
add.addEventListener("click", function () {
    pressKey(add)
});
const take = document.getElementById("-")
take.addEventListener("click", function () {
    pressKey(take)
});
const multiply = document.getElementById("*")
multiply.addEventListener("click", function () {
    pressKey(multiply)
});
const divide = document.getElementById("/")
divide.addEventListener("click", function () {
    pressKey(divide)
});


const decimal = document.getElementById(".")
decimal.addEventListener("click", function () {
    pressKey(decimal)
});
const zero = document.getElementById("0")
zero.addEventListener("click", function () {
    pressKey(zero)
});

/* const equal = document.getElementById("=")
equal.addEventListener("click", function () {
    pressKey(equal)
}); */

console.log(document.getElementById("calcul").value);