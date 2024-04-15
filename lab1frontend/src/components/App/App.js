import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Routes, Route} from "react-router-dom";
import Books from "../Books/BooksList/books";
import BookService from "../../repository/bookRepository";
import BooksDel from "../Books/BooksTerm/booksTerm";
import Header from '../Header/header'
import data from "bootstrap/js/src/dom/data";
import categoryService from "../../repository/categoryRepository";
import Categories from "../Categories/categories";
import {formToJSON} from "axios";
import Authors from "../Authors/authors";
import authorService from "../../repository/authorRepository";
import BooksAdd from "../Books/BooksAdd/booksAdd";
import BooksEdit from "../Books/BooksEdit/booksEdit";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books : [],
            categories : [],
            authors: [],
            selectedBook: {}
        }
    }
    render() {
        return (
            <Router>
                <Header></Header>
                <Routes>
                    <Route path="/books" element={<Books books={this.state.books}
                                                         onDelete={this.deleteBook}
                                                         onEdit={this.getBook}
                                                         onTake={this.takeBook}/>}
                    />
                    <Route path={"/"} element={ <Books books={this.state.books}
                                                       onDelete={this.deleteBook}
                                                       onEdit={this.getBook}
                                                       onTake={this.takeBook}/>}
                    />
                    <Route path={"/categories"} element={ <Categories categories={this.state.categories}/>}/>
                    <Route path={"/authors"} element={ <Authors authors={this.state.authors}/>}/>
                    <Route path={"/books/add"} element={ <BooksAdd books={this.state.authors}
                                                                   authors={this.state.authors}
                                                                   categories={this.state.categories}
                                                                   onAddBook={this.addBook}/>

                    }/>
                    <Route path={"/books/edit/:id"} element={ <BooksEdit
                                                                   authors={this.state.authors}
                                                                   categories={this.state.categories}
                                                                   onEditBook={this.editBook}
                                                                   books={this.state.selectedBook}/>
                    }/>
                </Routes>
            </Router>
        )
    }


    loadBooks = () =>{
        BookService.fetchBooks()
            .then((data) =>{
                this.setState({
                    books: data.data
                })
            })
    }

    loadCategories = () =>{
        categoryService.fetchCategories()
            .then((data )  =>{
                this.setState({
                    categories: data.data
            })
        })
    }

    loadAuthors = () =>{
        authorService.fetchAuthors()
            .then((data) =>{
                this.setState(({
                    authors: data.data
                }))
            })
    }

    deleteBook = (id) => {
                BookService.deleteBook(id)
                    .then(() => {
                        this.loadBooks();
            })
    }

    addBook = (name, author, category,availableCopies) => {
        BookService.addBook(name, author, category,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }
    editBook = (id, name, author, category,availableCopies) => {
        BookService.editBook(id, name, author, category,availableCopies)
            .then(() =>{
                this.loadBooks();
            })
    }
    getBook = (id) => {
        BookService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }
    takeBook = (id) => {
        BookService.takeBook(id)
            .then(() => {
                this.loadBooks();
            });
    }


    componentDidMount() {
        this.loadBooks()
        this.loadCategories()
        this.loadAuthors()
    }
}

export default App;
