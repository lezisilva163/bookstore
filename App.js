const Database = require("./Database");
const User = require("./entities/User");
const Author = require("./entities/Author");
const Poster = require("./entities/Poster");
const Book = require("./entities/Book");
const Order = require("./entities/Order");

class App {
    static #database = new Database()

    createUser(name, email, password) {
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers() {
        return App.#database.find('users')
    }

    createAuthor(name, nationality, bio) {
        const author = new Author(name, nationality, bio)
        App.#database.saveAuthor(author)
    }

    getAuthors() {
        return App.#database.find('authors')
    }

    createBook(title, synopsis, genre, pages, author, description, price, inStock) {
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    getBooks() {
        return App.#database.find('books')
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStock(bookName, quantity)
    }

    createPoster(name, description, width, height, price, inStock) {
        const poster = new Poster(name, description, width, height, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(posterName, quantity) {
        App.#database.addPostersToStock(posterName, quantity)
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({ product, quantity }) => {
            if(product instanceof Book) {
                App.#database.removeBooksFromStock(product.name, quantity)
            }else if (product instanceof Poster) {
                App.#database.removePosterFromStock(product.name, quantity)
            }
        })
    }

    getOrder() {
        return App.#database.find('orders')
    }

    showDatabase() {
        App.#database.showStorage()
    }
}

module.exports = App;