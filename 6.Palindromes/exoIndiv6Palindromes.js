//EXO 6 - Plaindromes - Elsa

//variables des test
const dateStringValid = "29/11/2001"
const dateStringPalindrome = "10/02/2001"
const dateStringInvalid = "30/02/2020"
const isPalindromeTrue = "11/02/2011"
const isPalindromeFalse = "03/04/2001"
const isPalindromeStringTrue = "A man, a plan, a canal. Panama"

//Étape 1 : Vérifier que la date est au format valide
//une foncton pour être sûr que c'est bien le bon nombre de jour en fonction du mois
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

//Une fonction pour vérifier que la date est valable (appelle la fonction prévèdente pour le mois)
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

//Étape 2
//tester si une date au format string est un palindrome
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

//test pour l'instant ressort toujours true
function isPalindrome2(dateString) {
    dateStringNumbers = dateString.replaceAll("/", "")
    reverseDateStringNumbers = dateStringNumbers.split('').reverse().join('')
    console.log(reverseDateStringNumbers)
    return dateStringNumbers === reverseDateStringNumbers
}
//console.log(isPalindrome2(isPalindromeFalse))

//Etape 3
function getNextPalindromes(x) {
    // Depuis la date du jour, Boucler pour tester si palindrome, si OUI : push dans une array qui stock les x palindromes
    //modifier la valeur du jour à +1 avant la fin de la boucle et boucler jusqu'à ce que array.length ===x
    let palindromes = []
    let tomorrow = new Date();
    let tomorrowString = tomorrow.toLocaleDateString('fr')
    console.log(tomorrowString)
    while (palindromes.length != x) {
        if (isPalindrome(tomorrowString)) {
            palindromes.push(tomorrowString)
        }
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrowString = tomorrow.toLocaleDateString('fr')
    }
    return palindromes
}
console.log(getNextPalindromes(10))


//Etape 4
function isPalindromeString(string) {
    //créer une varibale qui stock le paramètre en miniscule et sans espace
    var lowString = string.toLowerCase().replaceAll(' ', '').replaceAll('.', '').replaceAll(',', '')
    //créer une variable qui stock l'inverse de la string
    var reverseString = lowString.split('').reverse().join('')
    //vérifier si les deux
    return lowString === reverseString
}
console.log(isPalindromeString(isPalindromeStringTrue))

function isDatePalindrome(date) {
    //on sort faux si pas valide
    if (!isValidDate(date)) {
        console.log("unvalid date")
        return false
    }
    if (!isPalindrome(date)) {
        return false
    }
    return true
}
//console.log(isDatePalindrome(isPalindromeTrue))