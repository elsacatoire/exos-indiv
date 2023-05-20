const maxDaysInMonth = require('./maxDaysInMonth')

function isValidDate(dateToTest) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/
    if (isValid = regex.test(dateToTest)) {
        dateParts = dateToTest.split('/')
        dayInt = parseInt(dateParts[0], 10)
        monthInt = parseInt(dateParts[1], 10)
        yearInt = parseInt(dateParts[2], 10)
        if (monthInt > 0 && monthInt <= 12) {
            if (dayInt > 0 && dayInt < 31) {
                if (maxDaysInMonth(monthInt, dayInt)) {
                    if (yearInt > 999 && yearInt < 9999) {
                        return true
                    }
                    return false
                }
                return false
            }
            return false
        }
        return false
    }
}

module.exports = isValidDate
