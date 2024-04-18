package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Book;
import mk.ukim.finki.model.dto.BookDTO;
import mk.ukim.finki.model.exceptions.InvalidBookIDException;
import mk.ukim.finki.repository.BookRepository;
import mk.ukim.finki.service.AuthorService;
import mk.ukim.finki.service.BookService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class BookServiceImpl implements BookService {

    final BookRepository bookRepository;

    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> listBooks() {
        return bookRepository.findAll();
    }

    @Override
    public Optional<Book> findBookByName(String name) {
        return bookRepository.findByName(name);
    }

    @Override
    public Optional<Book> findBookById(Long id) {
        return bookRepository.findById(id);
    }

    @Override
    public Optional<Book> findBookByAuthor(Author author) {
        return bookRepository.findBookByAuthor(author);
    }

    @Override
    public void deleteById(Long id) {
        bookRepository.deleteById(id);
    }

    @Override
    public void deleteAllByAuthor(Author author) {
        bookRepository.deleteAllByAuthor(author);
    }

    @Override
    public ResponseEntity<Book> update(Book book) {
        bookRepository.save(book);
        return null;
    }

    @Override
    public ResponseEntity<Book> addNewBook(Book book) {
        bookRepository.save(book);
        return null;
    }

    @Override
    public void taken(Long id) {
        Book book = bookRepository.findById(id).orElseThrow(InvalidBookIDException::new);
        book.setAvailableCopies(book.getAvailableCopies() - 1);
        bookRepository.save(book);
    }

    @Override
    public List<Book> filterBookByName(String name) {
        return bookRepository.findAllByNameContaining(name);
    }
}
