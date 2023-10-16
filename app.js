const _ = require('lodash');
const $ = require('jquery');
let books = [
  {
    title: 'Individualism',
    author: 'George H. Smith',
    publicationYear: 2015,
  },
  {
    title: 'Probability and Statistics for Data Science: Math + R + Data',
    author: 'Harper Lee',
    publicationYear: 2017,
  },
  {
    title: '1984',
    author: 'George Orwell',
    publicationYear: 1949,
  },
 
];
function renderData() {
  const dataContainer = $('#data-container');
  dataContainer.empty();

  books.forEach((book, index) => {
    const listItem = $('<div class="book-item">');
    listItem.text(
      `Title: ${book.title}, Author: ${book.author}, Year: ${book.publicationYear}`
    );
    dataContainer.append(listItem);
  });
}

$('#shuffleButton').click(() => {
  books = _.shuffle(books);
  renderData();
});

$('#sortByTitleButton').click(() => {
  books = _.sortBy(books, 'title');
  renderData();
});

$('#groupByAuthorButton').click(() => {
  const groupedByAuthor = _.groupBy(books, 'author');
  books = groupedByAuthor;
  renderData();
});

$('#filterByYearButton').click(() => {
  const filteredBooks = _.filter(books, (book) => book.publicationYear >= 1960);
  books = filteredBooks;
  renderData();
});

$('#mapTitleUpperCaseButton').click(() => {
  const mappedBooks = _.map(books, (book) => {
    return { ...book, title: book.title.toUpperCase() };
  });
  books = mappedBooks;
  renderData();
});

$(document).ready(() => {
  renderData();
});
