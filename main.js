const convertCodeButton = document.getElementById('convertCode');
const convertWordButton = document.getElementById('convertWord');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

let index = 100;

// let inputText = document.getElementById('wordText').value;
// let inputArray = inputText.split('');

// let inputTextCode = document.getElementById('codeText').value;
// let inputArrayCode = inputTextCode.split(',');

// inputArray.forEach(function(element){
//     console.log(element);
// })

convertCodeButton.addEventListener('click', () => {
    let inputText = document.getElementById('wordText').value;
    let inputArray = inputText.split('');
    for (i = 0; i < inputArray.length; i++) {
    let stringBuilder = inputArray[i].charCodeAt(index);
    printToDom(stringBuilder, 'codeString')
    }}
)

convertWordButton.addEventListener('click', () => {
    let inputTextCode = document.getElementById('codeText').value;
    let inputArrayCode = inputTextCode.split(',');
    for (i = 0; i < inputArrayCode.length; i++) {
    let stringBuilder = inputArray[i].fromCharCode(index);
    printToDom(stringBuilder, 'wordString')
    }}
)