import React from "react";
import ReactPaginate from "react-paginate";
import BooksTerm from "../Books/BooksTerm/booksTerm";

class Authors extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            size: 5
        }
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        console.log(selected)
        this.setState({
            page: selected
        })
    }

    render (){
        const offset = this.state.size * this.state.page;
        const nextPageOffset = offset + this.state.size;
        const pageCount = Math.ceil(this.props.authors.length / this.state.size);
        const authors = this.getAuthorsPage(offset, nextPageOffset);

        return(
            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <div className={"row"}>
                        <table className={"table table-stripped"}>
                            <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Surname</th>
                            </tr>
                            </thead>

                            <tbody>
                            {/*{props.authors.map((term) => {*/}
                            {/*    return (*/}
                            {/*        <tr>*/}
                            {/*            <td>{term.name}</td>*/}
                            {/*            <td>{term.surname}</td>*/}
                            {/*        </tr>*/}
                            {/*    )*/}
                            {/*})}*/}
                            {authors}
                            </tbody>
                        </table>
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
        )
    }

    getAuthorsPage = (offset, nextPageOffset) => {
        console.log(offset, nextPageOffset)
        return this.props.authors.map((term, index) => {
            return (
                <tr>
                      <td>{term.name}</td>
                      <td>{term.surname}</td>
                </tr>
            );
        }).filter((authors, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}

export default Authors;



// const authors = (props) =>{
//     return (
//         <div className={"container mm-4 mt-5"}>
//             <div className={"row"}>
//                 <div className={"row"}>
//                     <table className={"table table-stripped"}>
//                         <thead>
//                         <tr>
//                             <th scope={"col"}>Name</th>
//                             <th scope={"col"}>Surname</th>
//                         </tr>
//                         </thead>
//
//                         <tbody>
//                         {props.authors.map((term) => {
//                             return (
//                                 <tr>
//                                     <td>{term.name}</td>
//                                     <td>{term.surname}</td>
//                                 </tr>
//                             )
//                         })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// }
//
//
// export default authors;