
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    fonctions principales /    \   \   \
//    ||  || || ||                              ||  ||  ||

// importer les fonctions dont on a besoin
const isPalindrome = require('./isPalindrome')

// fonction
function getNextPalindromes(x, date = new Date()) {
    let palindromeList = []
    while (palindromeList.length < x) {
        const dateStr = date.toLocaleDateString('fr')
        if (isPalindrome(dateStr)) {
            palindromeList.push(dateStr);
        }
        date.setDate(date.getDate() + 1);
    }
    return palindromeList
}


//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
let nextPalindromes = getNextPalindromes(3)
console.log(nextPalindromes);
module.exports = getNextPalindromes
