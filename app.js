let submitButton = document.getElementById('submit-button');
let mainText = document.getElementById('text');
let cancelButton = document.getElementById('cancel-button');
let clearConsole = document.getElementById('clear-console');
let taskItems = document.getElementById('task-items');
let tasks = [];

submitButton.addEventListener("click", function() {
    let node = document.createElement('LI');
    if (mainText.value) {
        let text = document.createTextNode(mainText.value);
        node.appendChild(text);
        document.getElementById("myList").appendChild(node); 
        mainText.value = '';
    } else {
        alert('Enter a task before clicking submit');
    }
});

cancelButton.addEventListener("click", function() {
    mainText.value = '';
});

clearConsole.addEventListener("click", function() {
    console.clear();
});

