function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    console.log(base);
    base.toLowerCase()
    console.log(base);
    if (word == base) {
        return true
    } else {
        let arrayBase = base.toLowerCase().split('');
        let arrayWord = word.toLowerCase().split('');

        for (let i = 0; i < arrayBase.length; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);
            } else if (arrayBase.includes(arrayWord[i])) {
                missplaced.push(arrayWord[i])
            }
        }
        for (const char of arrayWord) {
            if (arrayBase.includes(char) === false) {
                notInWord.push(char)
            }
        }
        return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
}


function guess() {
    let base = 'dictionnaire'
    let word = document.getElementById("word").value
    /*     if (word.length != base.length) {
            word = document.getElementById("word").value
        } */
    let result = tryWord(word, base)
    if (result === true) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    } else {
        document.getElementById("word").value = ''
        document.getElementById("try").innerText = word
        document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
        document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
        document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
    }

    //result.wellPlaced.length === base.length
}
var mot = "bonjour"
console.log(mot.bold());


function mot_syntax(motTest, motOk) {
    finalString = []
    for (let i = 0; i < motOk.length; i++) {
        if (motOk[i] == motTest[i]) {
            finalString.push(motTest[i].bold())
        } else if (motOk.includes(motTest[i])) {
            finalString.push(motTest[i])
        } else {
            finalString.push(motTest[i].strike())
        }
        document.getElementById("joli").innerHTML = finalString.join("")
    }
}

//var test = document.getElementById("joli").innerHTML = "<b> bonjour </b>"
function mot_color(motTest, motOk, x) {
    finalString = []
    var codeMot = `<div><span id='joli${x}'></span></div>`
    for (let i = 0; i < motOk.length; i++) {
        if (motOk[i] == motTest[i]) {
            document.getElementById("joli").innerHTML += "<span class='good'>" + motTest[i] + "</span>"
        } else if (motOk.includes(motTest[i])) {
            document.getElementById("joli").innerHTML += "<span class='almost'>" + motTest[i] + "</span>"
        } else {
            document.getElementById("joli").innerHTML += "<span class='bad'>" + motTest[i] + "</span>"
        }
    }
}

function gamePlay(motTest, motOk) {
    var counter = 0
    while (!didWin())
        mot_color(motTest, motOk)


}

function didWin() {
    console.log("win");
}


mot_color("holla", "hello")
//mot_syntax("hello", "hello")