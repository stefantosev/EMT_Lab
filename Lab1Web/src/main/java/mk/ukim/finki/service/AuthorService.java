package mk.ukim.finki.service;

import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Country;
import mk.ukim.finki.model.dto.AuthorDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface AuthorService{
    List<Author> listAuthors();
    Optional<Author> findById(Long id);
    Optional<Author> findByNameAndSurname(String name, String surname);
    List<Author> findAllByIds(List<Long> authorIds);
    List<Author> findAllByCountry(Country country);
    void addNewAuthor(Author author);
    void update(Author author);
    void deleteById(Long id);
}
