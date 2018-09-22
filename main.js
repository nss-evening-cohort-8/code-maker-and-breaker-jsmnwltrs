const convertCodeButton = document.getElementById('convertCode');
const convertWordButton = document.getElementById('convertWord');

const printToDom = (domString, divId) => {
    document.getElementById(divId).innerHTML += domString;
};

let index = 0;

convertCodeButton.addEventListener('click', () => {
    document.getElementById('codeString').innerHTML = '';
    let inputText = document.getElementById('wordText').value;
    let inputArray = inputText.split('');
    for (i = 0; i < inputArray.length; i++) {
    let outputStringCode = inputArray[i].charCodeAt(index) + ",";
    printToDom(outputStringCode, 'codeString')
    }}
)

convertWordButton.addEventListener('click', () => {
    document.getElementById('wordString').innerHTML = '';
    let inputTextCode = document.getElementById('codeText').value;
    let inputArrayCode = inputTextCode.split(',');
    for (i = 0; i < inputArrayCode.length; i++) {
    let outputStringWord = String.fromCharCode(inputArrayCode[i]);
    printToDom(outputStringWord, 'wordString')
    }}
)