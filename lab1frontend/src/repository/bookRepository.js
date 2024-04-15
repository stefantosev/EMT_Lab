import axios from "../custom-axios/axios"

const BookService = {
    fetchBooks : ()  => {
        return axios.get("/books")
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`)
    },
    //WITHOUT DTO
    addBook:  (name, author, category,availableCopies) => {
        const url = `/books/add?name=${name}&authorId=${author}&category=${category}&availableCopies=${availableCopies}`;
        return axios.post(url);
    },
    editBook: (id, name, author, category,availableCopies) => {
        const url = `/books/edit/${id}?name=${name}&authorId=${author}&category=${category}&availableCopies=${availableCopies}`;
        return axios.put(url);
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },

    //DTO PROBLEM
    // addBook : (name, author, category, availabeCopies) =>{
    //     return axios.post("/books/add", {
    //         "name" : name,
    //         "author": author,
    //         "category": category,
    //         "availableCopies": availabeCopies
    //     });
    // }
}


export default BookService;