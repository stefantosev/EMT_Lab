package mk.ukim.finki.service.impl;

import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Country;
import mk.ukim.finki.model.dto.AuthorDTO;
import mk.ukim.finki.model.exceptions.InvalidAuthorIDException;
import mk.ukim.finki.repository.AuthorRepository;
import mk.ukim.finki.service.AuthorService;
import mk.ukim.finki.service.CountryService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AuthorServiceImpl implements AuthorService {

    final AuthorRepository authorRepository;

    public AuthorServiceImpl(AuthorRepository authorService) {
        this.authorRepository = authorService;
    }

    @Override
    public List<Author> listAuthors() {
        return authorRepository.findAll();
    }

    @Override
    public Optional<Author> findById(Long id) {
        return authorRepository.findById(id);
    }

    @Override
    public Optional<Author> findByNameAndSurname(String name, String surname) {
        return authorRepository.findByNameAndAndSurname(name, surname);
    }

    @Override
    public List<Author> findAllByIds(List<Long> authorIds) {
        return authorRepository.findAllByIdIn(authorIds);
    }

    @Override
    public List<Author> findAllByCountry(Country country) {
        return authorRepository.findAllByCountry(country);
    }

    @Override
    public void addNewAuthor(Author author) {
        authorRepository.save(author);
    }

    @Override
    public void update(Author author) {
        authorRepository.save(author);
    }

    @Override
    public void deleteById(Long id) {
        authorRepository.deleteById(id);
    }
}
