document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    button.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');

            li.textContent = input.value;
            deleteButton.textContent = '❌';
            li.append(deleteButton);
            list.append(li);

            deleteButton.addEventListener('click', function () {
                list.removeChild(li);
                input.focus();
            });

            input.value = ''; // Clear the input field
            input.focus(); // Move focus back to the input field
        } else {
            input.focus(); // Return focus to the input field if it's empty
        }
    });
});
