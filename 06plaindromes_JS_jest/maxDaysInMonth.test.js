const maxDaysInMonth = require('./maxDaysInMonth')

//should give the right number of days
test('mois de mars', () => {
    const result = maxDaysInMonth(3, 14)
    expect(result).toBeTruthy()
})
test('mois de novembre', () => {
    const result = maxDaysInMonth(11, 31);
    expect(result).toBeFalsy();
})
test('mois de fevrier', () => {
    const result = maxDaysInMonth(2, 29);
    expect(result).toBeFalsy();
})