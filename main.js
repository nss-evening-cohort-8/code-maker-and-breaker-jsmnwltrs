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
    inputArray.forEach(function(element){
    let outputStringCode = element.charCodeAt(index) + ",";
    printToDom(outputStringCode, 'codeString')
    })}
)

convertWordButton.addEventListener('click', () => {
    document.getElementById('wordString').innerHTML = '';
    let inputTextCode = document.getElementById('codeText').value;
    let inputArrayCode = inputTextCode.split(',');
    inputArrayCode.forEach(function(element){
    let outputStringWord = String.fromCharCode(element);
    printToDom(outputStringWord, 'wordString')
})}
)