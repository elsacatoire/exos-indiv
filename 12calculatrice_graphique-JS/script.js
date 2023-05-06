function pressKey(key) {
    let write = document.getElementById("calcul")
    if (key == "AC") {
        return write.value = 0
    }
    if (write.value == "0") {
        write.value = key
    } else {
        write.value = write.value + key
    }
    return write.value
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

const equal = document.getElementById("=")
equal.addEventListener("click", function () {
    pressKey(equal)
});

console.log(document.getElementById("calcul").value);