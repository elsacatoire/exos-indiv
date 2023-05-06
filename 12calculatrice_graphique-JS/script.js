function pressKey(key) {
    let write = document.getElementById("calcul")
    if (write.value == "0") {
        write.value = key.value
    } else {
        write.value = write.value + key.value
        console.log(write.value);
    }
}

const one = document.getElementById("1")
one.addEventListener("click", function () {
    pressKey(one)
});
const two = document.getElementById("2")
two.addEventListener("click", function () {
    pressKey(two)
});
const three = document.getElementById("3")
three.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const four = document.getElementById("4")
four.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const five = document.getElementById("5")
five.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const six = document.getElementById("6")
six.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const seven = document.getElementById("7")
seven.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const eight = document.getElementById("8")
eight.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const nine = document.getElementById("9")
nine.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const add = document.getElementById("+")
add.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const take = document.getElementById("-")
take.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const multiply = document.getElementById("*")
multiply.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const divide = document.getElementById("/")
divide.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const equal = document.getElementById("=")
equal.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const ac = document.getElementById("AC")
ac.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const decimal = document.getElementById(".")
decimal.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});
const zero = document.getElementById("0")
zero.addEventListener("click", function () {
    console.log("Le bouton a été cliqué !");
});