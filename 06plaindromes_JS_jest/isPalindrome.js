const isValidDate = require('./isValidDate')

function isPalindrome(dateToTry) {
    if (isValidDate(dateToTry)) {
        let joinDate = dateToTry.replaceAll('/', '')
        let reverseJoinedDate = joinDate.split('').reverse().join('')
        if (joinDate == reverseJoinedDate) {
            return true
        }
        return false
    }
    return false
}

module.exports = isPalindrome;