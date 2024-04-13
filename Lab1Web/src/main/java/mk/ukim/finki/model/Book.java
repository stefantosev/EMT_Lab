package mk.ukim.finki.model;

import jakarta.persistence.*;
import  mk.ukim.finki.model.BooksCategory;
import lombok.Data;

@Entity
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    public Book() {
    }

    public Book(String name, BooksCategory category, Integer availableCopies, Author author) {
        this.name = name;
        Category = category;
        AvailableCopies = availableCopies;
        this.author = author;
    }

    @Enumerated
    private BooksCategory Category;

    private Integer AvailableCopies;

    @ManyToOne
    private Author author;


}
