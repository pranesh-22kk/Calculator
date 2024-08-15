const displayElement = document.getElementById('display');

function appendToDisplay(value) {
    displayElement.innerText += value;
}

function calculate() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch {
        displayElement.innerText = 'Error';
    }
}

function clearDisplay() {
    displayElement.innerText = '';
}

function deleteLast() {
    displayElement.innerText = displayElement.innerText.slice(0, -1);
}
