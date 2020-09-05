const form = document.querySelector('form');
const formInput = document.querySelector('form input');
const taskNumber = document.querySelector('h2 span');
const search = document.querySelector('.search');
const ul = document.querySelector('ul');
const arrLi = [];

const renderTask = () => {
    ul.textContent = "";
    arrLi.forEach((element, key) => {
        element.dataset.key = key;
        ul.appendChild(element);
    })
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    arrLi.splice(index, 1);
    renderTask();
    taskNumber.textContent = arrLi.length;
    search.value = "";
}

const addTask = (e) => {
    e.preventDefault();
    const value = formInput.value;
    if (value === "") return alert('YOU HAVE TO ADD TASK!');
    formInput.value = "";
    const liElement = document.createElement('li');
    liElement.innerHTML = value + ' <button>Delete</button>'
    arrLi.push(liElement);
    renderTask();
    taskNumber.textContent = arrLi.length;
    liElement.addEventListener('click', removeTask);
}

const searchTask = () => {
    ul.textContent = "";
    const searchValue = search.value.toLowerCase();
    let arrElements = arrLi;
    arrElements = arrLi.filter(element => element.textContent.toLowerCase().includes(searchValue));
    arrElements.forEach(li => ul.appendChild(li));
}


form.addEventListener('submit', addTask);
search.addEventListener('input', searchTask);