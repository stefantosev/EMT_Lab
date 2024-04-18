package mk.ukim.finki.model.init;


import mk.ukim.finki.model.Author;
import mk.ukim.finki.model.Book;
import mk.ukim.finki.model.BooksCategory;
import mk.ukim.finki.model.Country;
import mk.ukim.finki.repository.AuthorRepository;
import mk.ukim.finki.repository.BookRepository;
import mk.ukim.finki.repository.CountryRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataInitializer implements CommandLineRunner {
    private final CountryRepository countryRepository;
    private final AuthorRepository authorRepository;
    private final BookRepository bookRepository;

    public DataInitializer(CountryRepository countryRepository, AuthorRepository authorRepository, BookRepository bookRepository) {
        this.countryRepository = countryRepository;
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Initialize country data
        countryRepository.save(new Country("default", "default"));
        countryRepository.save(new Country("United States", "North America"));
        countryRepository.save(new Country("United Kingdom", "Europe"));

        // Initialize author data
        authorRepository.save(new Author("Stephen", "King", countryRepository.findCountryByName("United States").get()));
        authorRepository.save(new Author("J.K.", "Rowling", countryRepository.findCountryByName("United Kingdom").get()));
        authorRepository.save(new Author("Sinan", "Sakich", countryRepository.findCountryByName("United Kingdom").get()));
        authorRepository.save(new Author("Eckart", "Dole", countryRepository.findCountryByName("United States").get()));
        authorRepository.save(new Author("Grant", "Cardone", countryRepository.findCountryByName("United Kingdom").get()));
        authorRepository.save(new Author("Andrew", "Tate", countryRepository.findCountryByName("United Kingdom").get()));
        authorRepository.save(new Author("Viktor", "Frankl", countryRepository.findCountryByName("United Kingdom").get()));

        // Initialize book data
        bookRepository.save(new Book("The Shining", BooksCategory.THRILLER, 10, authorRepository.findByNameAndAndSurname("Stephen", "King").get()));
        bookRepository.save(new Book("Harry Potter 1", BooksCategory.FANTASY, 15, authorRepository.findByNameAndAndSurname("J.K.", "Rowling").get()));
        bookRepository.save(new Book("Fahrenheit", BooksCategory.FANTASY, 10, authorRepository.findByNameAndAndSurname("Sinan", "Sakich").get()));
        bookRepository.save(new Book("Dune Messiah", BooksCategory.FANTASY, 63, authorRepository.findByNameAndAndSurname("J.K.", "Rowling").get()));
        bookRepository.save(new Book("Mein Kampf", BooksCategory.FANTASY, 88, authorRepository.findByNameAndAndSurname("Sinan", "Sakich").get()));
        bookRepository.save(new Book("Invincible", BooksCategory.FANTASY, 9, authorRepository.findByNameAndAndSurname("J.K.", "Rowling").get()));
    }
}
