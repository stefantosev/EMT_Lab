// //TODO

import React from "react";
import {useNavigate} from 'react-router-dom';

const BookEdit = (props) => {
    const history = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: "NOVEL",
        author: 1,
        availableCopies: 0,
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })

    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.books.name;
        const category = formData.category !== "NOVEL" ? formData.category : props.books.category;
        const author = formData.author !== 1 ? formData.author : props.books.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.books.availableCopies;

        console.log(name, category, author, availableCopies)
        props.onEditBook(props.books.id, name, author, category,availableCopies);
        history("/");
    }

    return (
        <div className={"container mm-4 mt-5"}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Title</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder={props.books.name}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                {
                                    if(props.books.author !== undefined && props.books.author.id === term.id) {
                                        return <option selected={props.books.author} value={term.id}>{term.name + " " + term.surname}</option>
                                    } else {
                                        return <option value={term.id}>{term.name + " " + term.surname}</option>
                                    }
                                }

                            )}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) =>{
                                    if(props.books.category !== undefined && props.books.category === term) {
                                        return <option selected={props.books.category} value={term}>{term}</option>
                                    } else {
                                        return <option value={term}>{term}</option>
                                    }
                                }
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="number"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.books.availableCopies}
                               required
                               onChange={handleChange}
                        />
                    </div>


                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default BookEdit;


// import React from 'react';
// import {useNavigate} from 'react-router-dom'
// import {Link} from 'react-router-dom';
//
// const BooksEdit = (props) => {
//
//     const navigate = useNavigate();
//     const [formData, updateFormData] = React.useState({
//         name: "",
//         author: 1,
//         category: "NOVEL",
//         availableCopies: 0
//     })
//
//     const handleChange = (e) => {
//         updateFormData({
//             ...formData,
//             [e.target.name]: e.target.value.trim()
//         })
//     }
//
//
//     const onFormSubmit = (e) => {
//         e.preventDefault();
//         const name = formData.name !== "" ? formData.name : props.books.name;
//         const author = formData.author !== 0 ? formData.author : props.books.author.id;
//         const category = formData.category !== "" ? formData.category : props.books.categories;
//         const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.books.availableCopies;
//
//         props.onEditBook(props.books.id, name, author, category, availableCopies);
//         navigate('/')
//     }
//
//     return(
//         // <div className="row mt-5">
//         <div className={"container mm-4 mt-5"}>
//             <div className="col-md-5">
//                 <form onSubmit={onFormSubmit}>
//                     <div className="form-group">
//                         <label htmlFor="name">Book Title</label>
//                         <input type="text"
//                                className="form-control"
//                                id="name"
//                                name="name"
//                                required
//                                placeholder={props.books.name}
//                                onChange={handleChange}
//                         />
//                     </div>
//
//                     <div className="form-group">
//                         <label>Author</label>
//                         <select name="author" className="form-control" onChange={handleChange}>
//                             {props.authors.map((term) => {
//                                 if(props.books.author !== undefined &&
//                                     props.books.author.id === term.id)
//                                     return <option selected={props.books.author.id} value={term.id}>{term.name + " " + term.surname}</option>
//                                     else return <option value={term.id}>{term.books.name + " " + term.surname}</option>
//                             })}
//                         </select>
//                     </div>
//
//                     {/*<div className="form-group">*/}
//                     {/*    <label>Authors</label>*/}
//                     {/*    /!*props.authors &&*!/*/}
//                     {/*    <select name="author" className="form-control" onChange={handleChange}>*/}
//                     {/*        {props.authors.map((term) =>*/}
//                     {/*            <option key={term.id} value={term.id}>{term.name}{term.surname}</option>*/}
//                     {/*        )}*/}
//                     {/*    </select>*/}
//                     {/*</div>*/}
//
//                     <div className="form-group">
//                         <label>Category</label>
//                         <select name="category" className="form-control" onChange={handleChange}>
//                             {/*props.categories &&*/}
//                             {props.categories.map((term) => {
//                                 if(props.books.categories !== undefined &&
//                                     props.books.categories === term)
//                                     return <option selected={props.books.categories} value={term}>{term}</option>
//                                else return <option value={term}>{term}</option>
//                             })}
//                         </select>
//                     </div>
//
//                     <div className="form-group">
//                         <label htmlFor="availableCopies">Available copies</label>
//                         <input type="text"
//                                className="form-control"
//                                id="availableCopies"
//                                name="availableCopies"
//                                placeholder="Insert copies"
//                                required
//                                onChange={handleChange}
//                         />
//                     </div>
//
//                     <button id="submit" type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
//
// }
//
// export default BooksEdit;