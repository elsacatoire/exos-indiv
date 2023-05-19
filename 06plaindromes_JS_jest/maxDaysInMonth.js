function maxDaysInMonth(month, day) {
    if (month == 2) {
        return day <= 28
    }
    if (month == 4 || month == 6 || month == 9 || month == 11) {
        return day <= 30

    } else {
        if (month <= 0 && month > 12) {
            throw new Error("invalid month");
        }
        return day <= 31
    }
}

module.exports = maxDaysInMonth