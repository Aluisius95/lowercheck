// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<hr></hr>`;
var books = [
  { autore: 'Manzoni', titolo: 'I Promessi Sposi', anno: '1827' },
  { autore: 'Tolkien', titolo: 'Il Signore degli Anelli', anno: '1954' },
];

var string = 'sig';

let check = (book) => {
  var concat = book.autore.toLowerCase() + ' ' + book.titolo.toLowerCase();
  appDiv.innerHTML +=
    '<p>' + concat + '<br>' + concat.includes(string) + '</p>';
}

for (var i = 0; i < books.length; i++) {
  check(books[i]);
}

