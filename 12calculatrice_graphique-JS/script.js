
// TODO : essayer avec  math.evaluate(expr [,scope]).

function pressKey(key) {
    let calculScreen = document.getElementById("calcul");
    let resultScreen = document.getElementById("equal");
    // if last action xas a result, reset the screens for new calculation
    if (resultScreen.value != "0") {
        resultScreen.value = "0"
        calculScreen.value = "0"
    }
    if (key == "AC") {
        return calculScreen.value = "";
    }
    else if (key == "=") {
        calculScreen.value = calculScreen.value + key;
        return calculIt(calculScreen.value);
    }
    else if (calculScreen.value == "0") {
        calculScreen.value = key
    } else { // any number or operator key
        calculScreen.value = calculScreen.value + key
    }
    return calculScreen.value
}

function calculIt(calcul) {
    toCalculate = calcul
    let writeResult = document.getElementById("equal")
    writeResult.value = eval(toCalculate.slice(0, -1))
}

// main
document.addEventListener("click", function (event) {
    if (event.target.type === "button") {
        var valueKey = event.target.value;
        pressKey(valueKey)
    }
});


console.log(eval((4 + 4) / (2 * 2)));