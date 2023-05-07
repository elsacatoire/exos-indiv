// TODO : Fix after equal, set back to new calcul
function pressKey(key) {
    let calculScreen = document.getElementById("calcul");
    let resultScreen = document.getElementById("equal");
    if (resultScreen.value != "0") {
        console.log("move");
        resultScreen.value = "0"
        calculScreen.value = "0"
    }
    if (key == "AC") {
        return calculScreen.value = "";
    } if (key == "=") {
        calculScreen.value = calculScreen.value + key;
        console.log(calculScreen.value.charAt(calculScreen.value.length - 1));
        return calculIt(calculScreen.value);
    }
    if (calculScreen.value == "0") {
        calculScreen.value = key
    } else {
        calculScreen.value = calculScreen.value + key
    }
    return calculScreen.value
}

function calculIt(calcul) {
    toCalculate = calcul
    let writeResult = document.getElementById("equal")
    writeResult.value = eval(toCalculate.slice(0, -1))
}

document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
        var valueKey = event.target.value;
        console.log("Bouton cliqué : " + valueKey);
        pressKey(valueKey)
    }
});
