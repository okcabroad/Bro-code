// Random Password generator 
const passwordBox = document.getElementById('passwordBox');
const passwordLength = 12;

function generatePassword() {
    let includelowercase = document.getElementById('lowercase').checked;
    let includeuppercase = document.getElementById('uppercase').checked;
    let includeNumbers = document.getElementById('numbers').checked;
    let includeSymbols = document.getElementById('symbols').checked;

    const lowerchars = 'abcdefghijklmnopqrstuvwxyz';
    const upperchars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let charSet = '';
    let password = '';

    charSet += (includelowercase) ? lowerchars : '';
    charSet += (includeuppercase) ? upperchars : '';
    charSet += (includeNumbers) ? numbers : '';
    charSet += (includeSymbols) ? symbols : '';

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * charSet.length);
        password += charSet[randomNum];
    }
    return password;
}

document.getElementById('generateButton').addEventListener('click', function() {
    const password = generatePassword();
    passwordBox.innerHTML = `Your new password is: ${password}`
});
