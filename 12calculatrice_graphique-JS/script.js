// TODO : Fix after equal, set back to new calcul
function pressKey(key) {
    let calculScreen = document.getElementById("calcul")
    let resultScreen = document.getElementById("equal")
    if (key == "AC") {
        return calculScreen.value = 0
    }
    if (key == "=") {
        calculScreen.value = calculScreen.value + key
        console.log(calculScreen.value.charAt(calculScreen.length - 1));
        return calculIt(calculScreen)
    }
    if (calculScreen.value == "0") {
        calculScreen.value = key
    } else {
        calculScreen.value = calculScreen.value + key
    }
    return calculScreen.value
}

function calculIt(calcul) {
    toCalulate = calcul.value
    let writeResult = document.getElementById("equal")
    writeResult.value = eval(toCalulate.slice(0, -1))
}

document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
        var valueKey = event.target.value;
        console.log("Bouton cliqué : " + valueKey);
        pressKey(valueKey)
    }
});