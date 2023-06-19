function sum (a, b) {
    return a + b
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
    } 

function countChars(str) {
    return str.length;
}

function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
    }

function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}


module.exports = {
    sum,
    validateEmail,
    countChars,
    sortNumbers,
    validatePassword
}
