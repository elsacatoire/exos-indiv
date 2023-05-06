function pressKey(key) {
    let write = document.getElementById("calcul")
    if (write.value == "0") {
        write.value = key.value
    } else {
        write.value = write.value + key.value
        console.log(write.value);
    }
}



let one = document.getElementById("1")
one.addEventListener("click", function () {
    pressKey(one)
});

const two = document.getElementById("2")
two.addEventListener("click", function () {
    pressKey(two)
});

const three = document.getElementById("3")
three.addEventListener("click", function () {
    pressKey(three)
});
const four = document.getElementById("4")
four.addEventListener("click", function () {
    pressKey(four)
});
const five = document.getElementById("5")
five.addEventListener("click", function () {
    pressKey(five)
});
const six = document.getElementById("6")
six.addEventListener("click", function () {
    pressKey(six)
});
const seven = document.getElementById("7")
seven.addEventListener("click", function () {
    pressKey(seven)
});
const eight = document.getElementById("8")
eight.addEventListener("click", function () {
    pressKey(eight)
});
const nine = document.getElementById("9")
nine.addEventListener("click", function () {
    pressKey(nine)
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

const ac = document.getElementById("AC")
ac.addEventListener("click", function () {
    pressKey(ac)
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