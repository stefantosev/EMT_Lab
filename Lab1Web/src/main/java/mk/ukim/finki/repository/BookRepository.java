package mk.ukim.finki.repository;

import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findAll();
    Optional<Book> findById(Long id);
    Optional<Book> findByName(String name);
    Optional<Book> findBookByAuthor(Author author);
    void deleteBookById(Long id);
    void deleteAllByAuthor(Author author);
    Book save(Book book);
}