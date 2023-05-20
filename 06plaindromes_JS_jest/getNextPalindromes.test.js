const getNextPalindromes = require('./getNextPalindromes')

test('3 next', () => {
    expect(getNextPalindromes(3)).toStrictEqual(['03/02/2030', '13/02/2031', '23/02/2032'])
})

