
//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \ elsa_des_bois              /  \/  \/  \
//  /   /    \/    \    fonctions principales /    \   \   \
//    ||  || || ||                              ||  ||  ||

const isPalindrome = require('./isPalindrome')

function addDay(daysToAdd, date) {

}

function getNextPalindromes(x, date = new Date()) {
    let palindromeList = []
    do {
        let dateStr = date.toLocaleDateString('fr')
        if (isPalindrome(dateStr)) {
            palindromeList.push(dateStr)
        }
        date.setDate(date.getDate() + 1)
    } while (palindromeList.length < x);
    return palindromeList
}


//    /\  /\ /\ /\                              /\  /\  /\
//   /  \/  \  /  \      Le code s'exécute     /  \/  \/  \
//  /   /    \/    \            ICI  :        /    \   \   \
//    ||  || || ||                              ||  ||  ||
let nextPalindromes = getNextPalindromes(3)
console.log(nextPalindromes);
module.exports = getNextPalindromes
