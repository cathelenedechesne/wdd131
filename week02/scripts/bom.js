const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('_______'); //Fill the blank space inside at later stage.

const li = document.createElement('li');
const deleteButton = document.createElement('button');

li.textContent = input.value;
deleteButton.textContent = '❌'
li.append(deleteButton);
list.append(li);