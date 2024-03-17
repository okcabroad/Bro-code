const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + minNum));

console.log(answer);

let attempts = 0;
let guess;
let running = true;

while(running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    
    if(isNaN(guess)) {
        window.alert('Please enter a valid number');
        continue;
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert('Please enter a number within the range 1-100');
        continue;
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert('Too low, try again');
        }
        else if(guess > answer) {
            window.alert('Too high, try again');
        }
        else{
            window.alert(`Congratulations! You guessed the number in ${attempts} attempts!`);
            break;
        }
    }

}