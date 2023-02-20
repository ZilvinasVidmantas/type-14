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

const items = [
  { title: 'ball', weight: 1000, categories: ['sports', 'hobbies', 'games', 'outdoors'] },
  { title: 'cards', weight: 200, categories: ['sports', 'hobbies', 'games', 'poker'] },
  { title: 'pen', weight: 100, categories: ['stationary', 'writing'] },
  { title: 'cup', weight: 400, categories: ['kitchen'] },
  { title: 'milk', weight: 2100, categories: ['food', 'lactose'] },
  { title: 'beef jerkies', weight: 1100, categories: ['food', 'meat', 'beef'] },
  { title: 'sunglasses', weight: 1100, categories: ['hobbies', 'sun protection', 'outdoors'] },
];

const friends = [{
  name: "Anna",
  books: ["Bible", "Harry Potter", "War and peace"],
  age: 21,
}, {
  name: "Bob",
  books: ["Pifo nuotykiai", "War and peace", "Romeo and Juliet"],
  age: 26,
}, {
  name: "Alice",
  books: ["The Lord of the Rings", "The Shining"],
  age: 18,
}];

console.group('Array.prototype.reduce');
{
  console.group('1. Surasti Vieno filmo, įvertinimų vidurkį');
  {
    const film = films[0];
    const filmRatings = film.ratings;
    const filmRatingsSum = filmRatings.reduce((prevSum, number) => prevSum + number);
    const filmRatingsAvg = filmRatingsSum / filmRatings.length;
    const filmRatingsAvgRounded = Number(filmRatingsAvg.toFixed(2));
    console.log(filmRatingsAvgRounded)
  }
  console.groupEnd();

  console.group('2. Atspausdinti kiekvieno filmo, įvertinimų vidurkį');
  {
    films.forEach((film) => {
      const filmRatingsAvg = film.ratings.reduce((prevSum, number) => prevSum + number) / film.ratings.length;
      const filmRatingsAvgRounded = Number(filmRatingsAvg.toFixed(2));
      console.log(filmRatingsAvgRounded);
    });
  }
  console.groupEnd();

  console.group('3. Suskaičiuoti visų filmų įvetinimų vidurkį');
  {
    const totalAvg = films.reduce((prevRatingSum, film) => {
      const filmRatingSum = film.ratings.reduce((prevSum, rating) => prevSum + rating);
      const filmRating = filmRatingSum / film.ratings.length;

      return prevRatingSum + filmRating;
    }, 0) / films.length;

    const totalAvgRounded = Number(totalAvg.toFixed(2));
    console.log(totalAvgRounded);
  }
  console.groupEnd();

  console.group('4. Sugrupuoti items pagal kategorijas');
  {
    const groupedItemsByCategories = items.reduce((prevGroups, item) => {
      item.categories.forEach((categoryName) => {
        const groupKey = categoryName.toLowerCase();
        if (prevGroups[groupKey] === undefined) {
          prevGroups[groupKey] = [];
        }
        prevGroups[groupKey].push(item);
      })

      return prevGroups;
    }, {});

    console.log(groupedItemsByCategories);
  }
  console.groupEnd();

  // '5. Suskaičiuokite kiekvienos <items> katgorijos daiktų kiekį
  console.group('5. Suskaičiuokite kiek yra kiekvienos <items> kategorijos daiktų');
  {
    const groupedItemsByCategories = items.reduce((prevGroups, item) => {
      item.categories.forEach((categoryName) => {
        const groupKey = categoryName.toLowerCase();
        if (prevGroups[groupKey] === undefined) {
          prevGroups[groupKey] = 0
        }
        prevGroups[groupKey] += 1;
      })

      return prevGroups;
    }, {});

    console.log(groupedItemsByCategories);
  }
  console.groupEnd();

  console.group('6. Į vieną masyvą sudėkite visas draugų <friends> skaitytas knygas');
  {
    const allReadBooks = [...new Set(friends.reduce((prevBooks, { books }) => [...prevBooks, ...books], []))];

    console.log(allReadBooks);
  }
  console.groupEnd();
}
console.groupEnd();
