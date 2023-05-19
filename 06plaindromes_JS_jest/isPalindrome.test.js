const isPalindrome = require('./isPalindrome')

//let's see if there is a plindrome here
test('parlindrome yes', () => {
    const result = isPalindrome("11/02/2011")
    expect(result).toBeTruthy()
})
test('parlindrome yes', () => {
    const result = isPalindrome("03/04/2001")
    expect(result).toBeFalsy()
})
test('parlindrome invalid date', () => {
    const result = isPalindrome("03/14/2001")
    expect(result).toBeFalsy()
})