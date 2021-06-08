const text = document.querySelector('.text');
const textBefore = document.querySelector('.text-before');
const button = document.querySelector('.start-replace');

button.addEventListener('click', function() {
    let textReplace = text.innerHTML.replace(/'/g, '"');
    textReplace = textReplace.replace(/\b"\b/g, '\'');
    textBefore.innerHTML = textReplace;
});