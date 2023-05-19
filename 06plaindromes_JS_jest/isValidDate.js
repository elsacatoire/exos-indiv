function isValidDate(dateToTest) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/
    if (isValid = regex.test(dateToTest)) {
        return true
    } else {
        return false
    }
}

module.exports = isValidDate
console.log(isValidDate('13/23/1989'));
