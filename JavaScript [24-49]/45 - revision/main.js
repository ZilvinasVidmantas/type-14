const films = [{
  title: 'The Matrix',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
  year: 1999,
}, {
  title: 'The Matrix Reloaded',
  roles: [
    { title: 'Neo', actor: { name: 'Keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 7, 8, 9, 10, 10],
  year: 2003,
}, {
  title: 'The Matrix Revolutions',
  roles: [
    { title: 'Neo', actor: { name: 'keanu', surname: 'Reeves' } },
    { title: 'Morpheus', actor: { name: 'Laurence', surname: 'Fishburne' } },
    { title: 'Trinity', actor: { name: 'Carrie-Anne', surname: 'Moss' } },
  ],
  ratings: [7, 8, 9, 10, 10, 10, 7, 8],
  year: 2003,
}, {
  title: 'The Shawshank Redemption',
  roles: [
    { title: 'Andy Dufresne', actor: { name: 'Tim', surname: 'Robbins' } },
    { title: "Ellis Boyd 'Red' Redding", actor: { name: 'Morgan', surname: 'Freeman' } },
  ],
  ratings: [10, 10, 10, 10, 10, 8, 10, 10],
  year: 1994,
}, {
  title: 'The Godfather',
  roles: [
    { title: 'Don Vito Corleone', actor: { name: 'Marlon', surname: 'Brando' } },
    { title: 'Michael Corleone', actor: { name: 'Al', surname: 'Pacino' } },
    { title: 'Tom Hagen', actor: { name: 'Robert', surname: 'Duvall' } },
  ],
  ratings: [10, 10, 9, 10, 8, 10, 10],
  year: 1972,
}, {
  title: 'The Dark Knight',
  roles: [
    { title: 'Joker', actor: { name: 'Heath', surname: 'Ledger' } },
    { title: 'Bruce Wayne', actor: { name: 'Christian', surname: 'Bale' } },
  ],
  ratings: [10, 9, 9, 9, 10, 8, 10, 10],
  year: 2008,
}];

console.groupCollapsed('Array.prototype.forEach');
// Atlieka veiksmus su kiekvienu masyvo elementu
{
  films.forEach((film) => {
    film.roles.forEach((filmRole) => {
      console.log(filmRole.actor.name, filmRole.actor.surname);
    });
  });
}
console.groupEnd();

console.groupCollapsed('Array.prototype.filter');
// Atrenka elementus į naują masyvą, pagal (funkcijos grąžintą) salygą
{
  const newFilms = films.filter((film) => film.year > 2000);
  console.log(newFilms);

  const filmsWithManyRatings = films.filter((film) => film.ratings.includes(7));
  console.log(filmsWithManyRatings);
}
console.groupEnd();

console.groupCollapsed('Array.prototype.some');
// Patikrina ar nors vienas masyvo elementas tenkina (funkcijos grąžintą) salygą
{
  const existsNewFilms = films.some((film) => film.year > 2000);
  console.log(existsNewFilms);

  const filmsWithKeanu = films.filter((film) => film.roles
    .some(({ actor: { name, surname } }) => `${name} ${surname}`.toLowerCase() === 'keanu reeves')
  );
  console.log(filmsWithKeanu);
}
console.groupEnd();

console.groupCollapsed('Array.prototype.every');
// Patikrina ar visi masyvo elementai tenkina (funkcijos grąžintą) salygą
{
  const allFilmsHasTitle = films.every((film) => film.title !== undefined);
  console.log(allFilmsHasTitle);

  const allFilmsHasAtLeastTwoRoles = films.every((film) => film.roles.length >= 2);
  console.log(allFilmsHasAtLeastTwoRoles);
}
console.groupEnd();

console.group('Array.prototype.map');
// Sukuria naują masyvą, performuojant kiekvieną masyvo elementą 
{
  const filmsTitles = films.map((film) => film.title);
  console.log(filmsTitles);

  const filmsCardViewModels = films.map((film) => ({
    title: `${film.title}(${film.year})`,
    rating: Number((film.ratings.reduce((sum, num) => sum + num) / film.ratings.length / 2).toFixed(1)),
  }));
  console.table(filmsCardViewModels);

  const filmsTitlesLong = films.map((film) => {
    const avgRounded = Math.round(film.ratings.reduce((sum, num) => sum + num) / film.ratings.length / 2);
    const stars = '★'.repeat(avgRounded) + '☆'.repeat(5 - avgRounded);

    return `${film.title}(${film.year}) ${stars}`;
  });
  console.table(filmsTitlesLong);
}
console.groupEnd();
