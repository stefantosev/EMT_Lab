import React from "react";
import BooksDel from "../BooksTerm/booksTerm";
import {Link} from "react-router-dom";
import BooksEdit from "../BooksEdit/booksEdit";
import BooksTerm from "../BooksTerm/booksTerm";

const books = (props) =>{
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
                        {props.books.map((term) => {
                            return (
                                <BooksTerm term={term} onDelete={props.onDelete} onEdit={props.onEdit}/>
                            )
                        })}
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
      </div>
    );
}


export default books;