'use strict';

document.addEventListener("DOMContentLoaded", ()=> {
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
            poster = document.querySelector('.promo__bg'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = document.querySelector("input[type='checkbox' i]");
    
    const deleteAdvertisment = () => {
        adv.forEach(element => {
            element.remove();
        });
    }
    
    const makeChanges = () => {
        genre[0].textContent = "Драма";

        poster.style.backgroundImage = 'url("img/bg.jpg")';
    }

    const sortArray = (arr) => {
        arr.sort();
    }
    
    addForm.addEventListener('submit', (e)=> {
        e.preventDefault();
        
        if (!addInput.value) return;
        if (addInput.value.length > 21) {
            movieDB.movies.push(`${addInput.value.slice(0, 21)}...`);
        } else {
            movieDB.movies.push(addInput.value);
        }
        if (checkbox.checked) {
            alert("Добавляем любимый фильм");
        }
        e.target.reset();
        createMovieList(movieDB.movies, movieList)
    });    
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArray(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdvertisment();
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});
