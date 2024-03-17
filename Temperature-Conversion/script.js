const textbox = document.getElementById('textbox');
const tofahrenheit = document.getElementById('tofahrenheit');
const tocelsius = document.getElementById('tocelsius'); // Corrected the ID here
const result = document.getElementById('result');
let temp = 0;

function convert(){
    if(tofahrenheit.checked){
        temp = (textbox.value * 9/5) + 32;
        result.innerHTML = `${temp.toFixed(1)}°F`;
    } 
    else if(tocelsius.checked){
        temp = (textbox.value - 32) * 5/9;
        result.innerHTML = `${temp.toFixed(1)}°C`;
    }
    else{
        result.innerHTML = "Please select a unit";
    }
}

function reset(){
    textbox.value = '';
    result.innerHTML = 'Select a Unit'; // Changed to provide user hint
    tofahrenheit.checked = false;
    tocelsius.checked = false;
    temp = 0;
}