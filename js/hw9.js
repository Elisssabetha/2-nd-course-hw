// Задание 1. Скрытие и показ текста
// Задача: cоздайте кнопку, которая будет скрывать и показывать текст в заголовке 
// <h1>.
const titleEl = document.querySelector('.title');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click', function (e) {
    if (titleEl.style.display === 'none') {
        titleEl.style.display = 'block';
        btnEl.textContent = 'Скрыть заголовок'
    } else {
        titleEl.style.display = 'none';
        btnEl.textContent = 'Показать заголовок' 
    }
});

// Задание 2. Изменение стиля элемента
// Задача: создайте кнопку, которая изменяет цвет текста в элементе <p>

const textEl = document.querySelector('.text');
const colorBtnEl = document.querySelector('.colorBtn');

colorBtnEl.addEventListener('click', function (e) {
    textEl.style.color = 'blue';
});

// Задание 3. Динамическое изменение текста
// Задача: создайте кнопку, которая меняет текст в заголовке <h1>

const changeTitleBtnEl = document.querySelector('.changeTitleBtn');

changeTitleBtnEl.addEventListener('click', function (e) {
    titleEl.textContent = 'Привет, мир!'
});

// Задание 4. Поиск и изменение элементов по классу
// Задача: найдите все элементы с классом description и измените их текст на «Измененный текст».

const descriptionEls = document.querySelectorAll('.description')
descriptionEls.forEach(el => {
    el.textContent = 'Измененный текст'
});

// Задание 5. Работа с querySelectorAll
// Задача: создайте несколько элементов <p> с разными классами. Используйте querySelectorAll, чтобы найти все элементы с классом description и изменить их текст.
const descriptionPEls = document.querySelectorAll('p.description')
descriptionPEls.forEach(el => {
    el.textContent = 'Новый текст'
});

// Задание 6. Добавление нового элемента в DOM
// Задача: создайте кнопку, которая добавляет новый элемент <p> с текстом в конец документа.

const newPBtnEl = document.querySelector('.newP-btn');

newPBtnEl.addEventListener('click', function (e) {
    const newP = document.createElement('p');
    newP.textContent = 'Новый абзац';
    newP.classList.add('description')
    document.body.appendChild(newP);
});


// Задание 7. Удаление элемента
// Задача: создайте кнопку, которая удаляет первый элемент <p> с классом description.

const descPEl = document.querySelector('p.description');
const removeBtnEl = document.querySelector('.removeBtn');

removeBtnEl.addEventListener('click', function (e) {
    descPEl.remove();
});