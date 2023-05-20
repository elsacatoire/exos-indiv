const isValidDate = require('./isValidDate')

function isPalindrome(dateToTry) {
    if (isValidDate(dateToTry)) {
        let joinDate = dateToTry.replaceAll('/', '');
        let reverseJoinedDate = joinDate.split('').reverse().join('');
        return joinDate === reverseJoinedDate;
    }
    return false;
}

module.exports = isPalindrome;