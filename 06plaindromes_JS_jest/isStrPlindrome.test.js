// Keep on  testing to mkae sure everthing is still good !

// import fonction to test
const isStrPlindrome = require('./isStrPlindrome')

test('a word', () => {
    const result = isStrPlindrome('kayak')
    expect(result).toBeTruthy()
})

test('a word that is not a plaindrome', () => {
    const result = isStrPlindrome('elsa')
    expect(result).toBeFalsy()
})

test('a word with upper case', () => {
    const result = isStrPlindrome('Serres')
    expect(result).toBeTruthy()
})

test('a pharse', () => {
    const result = isStrPlindrome('Engage le jeu que je le gagne')
    expect(result).toBeTruthy()
})
test('a pharse avec accent', () => {
    const result = isStrPlindrome('Élu par cette crapule')
    expect(result).toBeTruthy()
})
test('a with ponctuation', () => {
    const result = isStrPlindrome("Oh ! cela te perd, répéta l'écho")
    expect(result).toBeTruthy()
})