package mk.ukim.finki.service;


import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Book;
import mk.ukim.finki.model.dto.BookDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface BookService {
    List<Book> listBooks();
    Optional<Book> findBookByName(String name);
    Optional<Book> findBookById(Long id);
    Optional<Book> findBookByAuthor(Author author);
    void deleteById(Long id);
    void deleteAllByAuthor(Author author);
    ResponseEntity<Book> update(Book book);
    ResponseEntity<Book> addNewBook(Book book);
    void taken(Long id);
}
