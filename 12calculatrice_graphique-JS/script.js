function pressKey(key) {
    let calculScreen = document.getElementById("calcul")
    if (key == "AC") {
        return calculScreen.value = 0
    }
    if (key == "=") {
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
    writeResult.value = eval(toCalulate)
}

document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
        var valueKey = event.target.value;
        console.log("Bouton cliqué : " + valueKey);
        pressKey(valueKey)
    }
});