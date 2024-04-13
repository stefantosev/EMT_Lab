package mk.ukim.finki.repository;

import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {
    List<Author> findAll();
    List<Author> findAllByCountry(Country country);
    Optional<Author> findById(Long id);
    Optional<Author> findByNameAndAndSurname(String name, String surname);
    List<Author> findAllByIdIn(List<Long> authorIds);
    Author save(Author author);
}