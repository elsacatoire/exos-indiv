function isPalindrome(dateToTry) {
    let joinDate = dateToTry.replaceAll('/', '')
    let reverseJoinedDate = joinDate.split('').reverse().join('')
    if (joinDate == reverseJoinedDate) {
        return true
    }
    return false
}

module.exports = isPalindrome;