import React from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom';

const BooksAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        author: 1,
        category: "NOVEL",
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }


    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const author = formData.author;
        const category = formData.category;
        const availableCopies = formData.availableCopies;

        props.onAddBook(name, author, category, availableCopies);
        navigate('/')
    }

    return (
        // <div className="row mt-5">
        <div className={"container mm-4 mt-5"}>
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book Title</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter book title"
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Author</label>
                        <select name="author" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) =>
                                <option value={term.id}>{term.name + " " + term.surname}</option>
                            )}
                        </select>
                    </div>

                    {/*<div className="form-group">*/}
                    {/*    <label>Authors</label>*/}
                    {/*    /!*props.authors &&*!/*/}
                    {/*    <select name="author" className="form-control" onChange={handleChange}>*/}
                    {/*        {props.authors.map((term) =>*/}
                    {/*            <option key={term.id} value={term.id}>{term.name}{term.surname}</option>*/}
                    {/*        )}*/}
                    {/*    </select>*/}
                    {/*</div>*/}

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {/*props.categories &&*/}
                            {props.categories.map((term) =>
                                <option value={term}>{term}</option>
                            )}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder="Insert copies"
                               required
                               onChange={handleChange}
                        />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );

}

export default BooksAdd;
