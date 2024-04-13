import axios from "../custom-axios/axios"

const BookService = {
    fetchBooks : ()  => {
        return axios.get("/books")
    },
    deleteBook: (id) => {
        return axios.delete("/delete/${id}")
    }
}


export default BookService;