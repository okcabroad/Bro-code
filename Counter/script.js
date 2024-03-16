const decreaseButton = document.getElementById('decreaseButton');
const reset = document.getElementById('reset');
const increaseButton = document.getElementById('increaseButton');
const countLabel = document.getElementById('countLabel')
let count = 0;

increaseButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

reset.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}