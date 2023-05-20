//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    fonctions principales /    \   \   \
//    ||  || || ||                              ||  ||  ||
//          Is this string a palindrome ?

// importer les fonctions dont on a besoin

// functions useds
function isStrPlindrome(stringToTest) {
    let celanStr = removeSpecialCharacters(stringToTest)
    let joinStr = celanStr.toLowerCase();
    let reverseStr = joinStr.split('').reverse().join('');
    return joinStr === reverseStr;
}

function removeSpecialCharacters(str) {
    // Utilisation d'une expression régulière pour correspondre à tous les caractères non alphanumériques
    const regex = /[^a-zA-Z0-9]/g;
    // Utilisation de la méthode replace pour remplacer les caractères spéciaux par une chaîne vide
    const cleanedStr = str.replace(regex, '');
    return cleanedStr;
}

//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||

module.exports = isStrPlindrome