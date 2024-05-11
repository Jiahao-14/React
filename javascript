//Destructuring
const book = getBook(2);

const { title, author, genres } = book;
//console.log(author, title, genres);

const [primaryGenre, secondaryGenre] = genres;
console.log(primaryGenre, secondaryGenre);
