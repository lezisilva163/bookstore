const App = require('./App');

const app = new App();

app.createAuthor('Mauricio de Souza', 'Brasileiro', 'Lorem Ipsum');
app.createAuthor('Monteiro Lobato', 'Brasileiro', 'Lorem Ipsum');

const authors = app.getAuthors();

app.createBook('Sítio do Picapau Amarelo', 'Lorem Ipsum', 'fantasia', 250, authors[1], '....', 45.99, 100);
app.createBook('O Hobbit', 'Lorem Ipsum', 'fantasy', 300, authors[0], '....', 19.99, 100);

const books = app.getBooks();

app.createUser('leonardo', 'leonardo@email.com', '1234');

const users = app.getUsers();

const items = [
    {
        product: books[0],
        quantity: 2
    },
    {
        product: books[1],
        quantity: 1
    }
]

app.createOrder(items, users[0]);

app.showDatabase();