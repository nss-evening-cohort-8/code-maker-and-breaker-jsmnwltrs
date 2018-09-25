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
    inputArray.forEach((element, i) => {
    let outputStringCode = (inputText.length === i + 1)
    ? `${element.charCodeAt(index)}`
    : `${element.charCodeAt(index)},`;
    printToDom(outputStringCode, 'codeString')
})}
);

// terniary operator
// (conditional statement) ? true condition : false condition


convertWordButton.addEventListener('click', () => {
    document.getElementById('wordString').innerHTML = '';
    let inputTextCode = document.getElementById('codeText').value;
    let inputArrayCode = inputTextCode.split(',');
    inputArrayCode.forEach((element) => {
    let outputStringWord = String.fromCharCode(element);
    printToDom(outputStringWord, 'wordString')
})}
);