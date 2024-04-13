import logo from '../../logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Redirect, Routes, Route} from "react-router-dom";
import Books from "../Books/BooksList/books";
import BookService from "../../repository/bookRepository";
import BooksDel from "../Books/BooksDel/booksDel";
import Header from '../Header/header'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books : []
        }
    }
    render() {
        return (
            <Router>
                <Header></Header>
                <Routes>
                    <Route path={"/books"} element={ <Books books={this.state.books}/>}/>
                    <Route path={"/"} element={ <Books books={this.state.books}/>}/>
                    <Route path={"/delete/:id"} element={ <BooksDel booksDel={this.state.books}/>}/>
                </Routes>
                {/*<Books books ={this.state.books}/>*/}
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

    //TODO:
    deleteBook = (id) => {
                BookService.deleteBook(id)
                    .then(() => {
                        this.loadBooks();
            })
    }
    componentDidMount() {
        this.loadBooks()
    }
}

// function App() {
//   return (
//       <div>
//         <h1>BOOK APPLICATION</h1>
//       </div>
//   );
// }

export default App;
