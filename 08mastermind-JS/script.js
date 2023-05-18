const winningCombination = ['blue', 'red']
const possibleAttempts = 12

function isItAnAuthorizedColor() {
    let authorrizedColors = ['blue', 'red', 'yellow', 'green']
    let tryCombo = []
    while (tryCombo.length < winningCombination.length) {
        let askColor = prompt('give me a color')
        if (authorrizedColors.includes(askColor)) {
            tryCombo.push(askColor)
        } else {
            alert('it is not an authorized color. Authorized colors are : ' + authorrizedColors)
        }
    }
    didWin(tryCombo)
}

function didWin(testCombo) {
    if (testCombo == winningCombination) {
        alert('you won ! Congrats')
        return true
    } else {
        alert('sorry, too many attemps, you loose')
    }

}


//main application
isItAnAuthorizedColor()