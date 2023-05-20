const maxDaysInMonth = require('./maxDaysInMonth')

function isValidDate(dateToTest) {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!regex.test(dateToTest)) {
        return false;
    }
    const dateParts = dateToTest.split('/');
    const dayInt = parseInt(dateParts[0], 10);
    const monthInt = parseInt(dateParts[1], 10);
    const yearInt = parseInt(dateParts[2], 10);

    if (monthInt <= 0 || monthInt > 12) {
        return false;
    }
    if (dayInt <= 0 || dayInt > 31) {
        return false;
    }
    if (!maxDaysInMonth(monthInt, dayInt)) {
        return false;
    }
    if (yearInt <= 999 || yearInt >= 9999) {
        return false;
    }
    return true;
}


module.exports = isValidDate
