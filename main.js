const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

const charactersLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const charactersNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersSigns = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let generateEl = document.getElementById("generate-btn");
let passw1El = document.getElementById("passw1-btn");
let passw2El = document.getElementById("passw2-btn");
let passwLengthEl = document.getElementById("passw-length");
let passwSymbolsEl = document.getElementById("passw-symbols");

console.log(passwLengthEl);
console.log(passwSymbolsEl);

// Define the function to generate passwords based on the selected option
function generatePasswords(selectedOption) {
    const passwordLength = passwLengthEl.value;
    let randomPassw1 = [];
    let randomPassw2 = [];

    if (selectedOption === "Letters") {
        for (let i = 0; i < passwordLength; i++) {
            randomPassw1.push(charactersLetters[Math.floor(Math.random() * charactersLetters.length)]);
            randomPassw2.push(charactersLetters[Math.floor(Math.random() * charactersLetters.length)]);
        }
    } else if (selectedOption === "Numbers") {
        for (let i = 0; i < passwordLength; i++) {
            randomPassw1.push(charactersNumbers[Math.floor(Math.random() * charactersNumbers.length)]);
            randomPassw2.push(charactersNumbers[Math.floor(Math.random() * charactersNumbers.length)]);
        }
    } else if (selectedOption === "Symbols") {
        for (let i = 0; i < passwordLength; i++) {
            randomPassw1.push(charactersSigns[Math.floor(Math.random() * charactersSigns.length)]);
            randomPassw2.push(charactersSigns[Math.floor(Math.random() * charactersSigns.length)]);
        }
    } else {
        for (let i = 0; i < passwordLength; i++) {
            randomPassw1.push(characters[Math.floor(Math.random() * characters.length)]);
            randomPassw2.push(characters[Math.floor(Math.random() * characters.length)]);
        }
    }

    passw1El.textContent = randomPassw1.join("");
    passw2El.textContent = randomPassw2.join("");
}

const selectElement = document.getElementById("passw-symbols");

selectElement.addEventListener("change", function () {
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex].text;

    generatePasswords(selectedOption); // Call the function with the selected option
});

generateEl.addEventListener("click", function () {
    // Get the selected option directly from the select element
    const selectedIndex = selectElement.selectedIndex;
    const selectedOption = selectElement.options[selectedIndex].text;

    generatePasswords(selectedOption); // Call the function with the selected option
});

function copyPassw(password) {
    navigator.clipboard.writeText(password.textContent);
    alert ("Password " + password.textContent + " was copied to the clipboard");
}


function reset() {
    passw1El.textContent = [];
    passw2El.textContent = [];
}
