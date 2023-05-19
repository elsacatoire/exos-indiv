const isValidDate = require('./isValidDate')

test('test a valid one', () => {
    const result = isValidDate('14/03/1989')
    expect(result).toBeTruthy()
})

test('test a not valid one, unexistant month', () => {
    const result = isValidDate('14/13/1989')
    expect(result).toBeFalsy()
})