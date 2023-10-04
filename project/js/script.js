/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img"),
        genre = document.getElementsByClassName("promo__genre"),
        img = document.querySelector(".promo__bg"),
        films = document.getElementsByClassName("promo__interactive-item");

adv.forEach(element => {
    element.remove();
});

genre[0].textContent = "Драма";

img.style.backgroundImage = "url('img/bg.jpg')";

let sortedArray = movieDB.movies.sort();
for (let i = 0; i < films.length; i++) {
    films[i].innerHTML = `${i + 1} ${sortedArray[i]}<div class="delete">`;
}
