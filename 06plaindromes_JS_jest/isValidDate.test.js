const isValidDate = require('./isValidDate')

//check if etry is 'xx/xx/xx'
test('format ok', () => {
    const result = isValidDate('14/03/1989')
    expect(result).toBeTruthy()
})
test('format ok', () => {
    const result = isValidDate('90/03/1000')
    expect(result).toBeTruthy()
})
test('format not ok', () => {
    const result = isValidDate('03/1989')
    expect(result).toBeFalsy()
})
test('format not ok', () => {
    const result = isValidDate('14/13.1989')
    expect(result).toBeFalsy()
})
test('format not ok', () => {
    const result = isValidDate('14/131989')
    expect(result).toBeFalsy()
})

//check if date exists
test('date exists', () => {
    const result = isValidDate('14/03/1989')
    expect(result).toBeTruthy()
})
test('date do not exists', () => {
    const result = isValidDate('31/11/1989')
    expect(result).toBeFalsy()
})
test('date do not exists', () => {
    const result = isValidDate('13/14/1989')
    expect(result).toBeFalsy()
})