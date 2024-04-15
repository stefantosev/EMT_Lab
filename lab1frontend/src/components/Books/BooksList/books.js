import React from "react";
import BooksDel from "../BooksTerm/booksTerm";
import {Link} from "react-router-dom";
import BooksEdit from "../BooksEdit/booksEdit";
import BooksTerm from "../BooksTerm/booksTerm";
import ReactPaginate from "react-paginate";

// const books = (props) =>{
class Books extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    render () {
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.books.length / this.state.size);
        const books = this.getBooksPage(offset, nextPageOffset);

        return (
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-stripped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Title</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available copies</th>
                            </tr>
                            </thead>

                            <tbody>
                            {/*{props.books.map((term) => {*/}
                            {/*    return (*/}
                            {/*        <BooksTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>*/}
                            {/*    )*/}
                            {/*})}*/}
                            {books}
                            </tbody>
                        </table>
                    </div>
                    <div className="col mb-3">
                        <div className="row">
                            <div className="col-sm-12 col-md-12">
                                <Link className={"btn btn-block btn-dark"} to={"/books/add"}>Add new book</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={<button className="btn btn-primary">Previous</button>}
                               nextLabel={<button className="btn btn-primary">Next</button>}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ml-1 p-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active"}/>


            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.books.map((term, index) => {
            return (
                <BooksTerm term={term}
                           onDelete={this.props.onDelete}
                           onEdit={this.props.onEdit}
                           onTake={this.props.onTake}/>
            );
        }).filter((books, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }
}
export default Books;