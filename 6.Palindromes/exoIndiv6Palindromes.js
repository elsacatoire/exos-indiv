//EXO 6 - Plaindromes - Elsa

//Étape 1
const dateStringValid = "29/11/2001"
const dateStringPalindrome = "10/02/2001"
const dateStringInvalid = "30/02/2020"
const isPalindromeTrue = "11/02/2011"
const isPalindromeFalse = "03/04/2001"

function maxDaysInMonth(monthNumber, dayNumber) {
    if (monthNumber == 1 || monthNumber == 3 || monthNumber == 5 || monthNumber == 7 || monthNumber == 8 || monthNumber == 10 || monthNumber == 12) {
        return dayNumber <= 31
    }
    if (monthNumber === 2) {
        return dayNumber <= 28
    } else {
        return dayNumber <= 30
    }
}

function isValidDate(dateString) {
    //if (typeof dateString === "string") {
    const arrayDate = dateString.split("/")
    let day = parseInt(arrayDate[0], 10);
    let month = parseInt(arrayDate[1], 10);
    let year = parseInt(arrayDate[2], 10);
    /*     console.log(day)
        console.log(month)
        console.log(year)
        console.log(maxDaysInMonth(month, day)) */
    if ((day > 0 && day <= 31) && (maxDaysInMonth(month, day)) && (year > 999 && year < 9999)) {
        return true
    } else {
        return false
    }
}

/* console.log(isValidDate(dateStringValid))
console.log(isValidDate(dateStringPalindrome))
console.log(isValidDate(dateStringInvalid))
console.log(isValidDate("31/11/2072")) */

//Étape 2
function isPalindrome(dateString) {
    if ((dateString[0] == dateString[9]) &&
        (dateString[1] == dateString[8]) &&
        (dateString[3] == dateString[7]) &&
        (dateString[4] == dateString[6])) {
        return true
    } else {
        return false
    }
}
console.log(isPalindrome(isPalindromeTrue))
console.log(isPalindrome(isPalindromeFalse))

//Etape 3
function getNextPalindromes() {
    // Pour todays date, lire les dates suivantes, push dans une array à chaque fois que c'est un palindrome et s'arrete qd array.length ===x
    date1 = Date()
    console.log(date1)
}
getNextPalindromes()
