"use strict";



const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
  },
  counter = 0;


function showMyDB() {
  if  (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}


function writeYourGenres() {
  let counter = 0;
  while (counter <= 2) {
    const genre = prompt(`Ваш любимый жанр под номером ${counter+1}`)
    if (genre == null || genre.length == 0) {
      continue
    }
    counter ++;
    personalMovieDB.genres.push(genre);
  }
}

while (counter < 2) {
  const movie = prompt("Один из последних просмотренных фильмов?", ""),
      rate = prompt("На сколько оцените его?", "");
  if (movie.length == 0 || rate.length == 0 || movie == null || rate == null || movie.length > 50) {
    continue;
  }
  counter++;
  personalMovieDB.movies[movie] = rate;
}

writeYourGenres();

if (numberOfFilms < 10){
  alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms < 31) {
  alert("Вы классический зритель");
} else if (numberOfFilms > 30){
  alert("Вы киноман");
} else {
  alert("Произошла ошибка")
}


showMyDB();