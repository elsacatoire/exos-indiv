function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    let wellPlaced = [];
    let notInWord = [];
    let missplaced = [];
    if (word === base) {
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