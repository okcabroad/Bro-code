// Random Password generator 
const passwordBox = document.getElementById('passwordBox');
const passwordLength = 12;
const includelowercase = false ;
const includeuppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(passwordLength, includelowercase, includeuppercase, includeNumbers, includeSymbols) {

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

const password = generatePassword(passwordLength, includelowercase, includeuppercase, includeNumbers, includeSymbols);
console.log(`Your new password is: ${password}`);
console.log('Hello');

 passwordBox.innerHTML = `Your new password is: ${password}`
