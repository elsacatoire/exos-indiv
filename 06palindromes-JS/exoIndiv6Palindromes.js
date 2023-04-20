//EXO 6 - Plaindromes - Elsa

//Étape 1 : Vérifier que la date est au format valide
//une foncton pour être sûr que le nombre max de jour selon le mois est respectée
function maxDaysInMonth(monthNumber, dayNumber) {
    if (monthNumber === 2) {
        return dayNumber <= 28
    }
    if (monthNumber == 2 || monthNumber == 4 || monthNumber == 6 || monthNumber == 9 || monthNumber == 11) {
        return dayNumber <= 30
    } else {
        return dayNumber <= 31
    }
}

//Une fonction pour vérifier que la date est valable, appelle la fonction précèdente pour le nb de jour max/mois
function isValidDate(dateString) {
    const arrayDate = dateString.split("/")
    let dayInt = parseInt(arrayDate[0], 10);
    let monthInt = parseInt(arrayDate[1], 10);
    let yearInt = parseInt(arrayDate[2], 10);
    if ((dayInt > 0 && dayInt <= 31) &&
        (maxDaysInMonth(monthInt, dayInt)) &&
        (yearInt > 999 && yearInt < 9999)) {
        return true
    } else {
        return false
    }
}

//Étape 2
//méthode à la mano si une date au format string est un palindrome
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

//Autre façon de tester les plaindromes des formats dates, comme pour strings
function isPalindrome2(dateString) {
    dateStringNumbers = dateString.replaceAll("/", "")
    reverseDateStringNumbers = dateStringNumbers.split('').reverse().join('')
    return dateStringNumbers === reverseDateStringNumbers
}
//Etape 3 - récuperer x palindromes
function getNextPalindromes(x) {
    // Depuis la date du jour, Boucler pour tester si palindrome, si OUI : push dans une array qui stock les x palindromes
    //modifier la valeur du jour à +1 avant la fin de la boucle et boucler jusqu'à ce que array.length ===x
    let palindromes = []
    let tomorrow = new Date();
    let tomorrowString = tomorrow.toLocaleDateString('fr')
    while (palindromes.length != x) {
        if (isPalindrome(tomorrowString)) {
            palindromes.push(tomorrowString)
        }
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrowString = tomorrow.toLocaleDateString('fr')
    }
    return palindromes
}

//Etape 4
function isPalindromeString(string) {
    //créer une varibale qui stock le paramètre en miniscule et sans espace
    var lowString = string.toLowerCase().replaceAll(' ', '').replaceAll('.', '').replaceAll(',', '')
    //créer une variable qui stock l'inverse de la string
    var reverseString = lowString.split('').reverse().join('')
    //vérifier si les deux sont égales
    return lowString === reverseString
}

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

function testAll() {
    const dateStringValid = "29/11/2001"
    const dateStringInvalid = "30/02/2020"
    const isDatePalindromeTrue = "11/02/2011"
    const isDatePalindromeFalse = "03/04/2001"
    const isPalindromeStringTrue = "A man, a plan, a canal. Panama"
    const isPlaindromeStrinFalse = "Je ne suis pas un palindrome"
    //Test Etape 1 - date valide
    console.log("should return True :")
    console.log(isValidDate(dateStringValid))
    console.log("should return False :")
    console.log(isValidDate(dateStringInvalid));

    //Test Etape 2 méthode mano
    console.log("should return True :")
    console.log(isPalindrome(isDatePalindromeTrue));
    console.log("should return False :")
    console.log(isPalindrome(isDatePalindromeFalse));

    //Test Etape 2 méthode propre ?
    console.log("should return True :")
    console.log(isPalindrome2(isDatePalindromeTrue));
    console.log("should return False :")
    console.log(isPalindrome2(isDatePalindromeFalse));

    //Test Etape 3 récupérer x palindromes
    console.log("should return x dates that are plaindromes :")
    console.log(getNextPalindromes(10));

    //Test Etape 4-1 : String est un plaindrome ?
    console.log("should return True :")
    console.log(isPalindromeString(isPalindromeStringTrue));
    console.log("should return False :")
    console.log(isPalindromeString(isPlaindromeStrinFalse));

    //Test 4-2 : Date is palindrome, avec test validité
    console.log("should return True :")
    console.log(isDatePalindrome(isDatePalindromeTrue));
    console.log("should return False :")
    console.log(isDatePalindrome(isDatePalindromeFalse));
    console.log("should return unvalid date :")
    console.log(isDatePalindrome(dateStringInvalid));
}
testAll()