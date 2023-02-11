const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const favChapt = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    listItem.textContent = favChapt;
    deleteButton.textContent = 'X' ; 
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    deleteButton.addEventListener('click', () => {
        listItem.remove();
    })

    input.focus();
})