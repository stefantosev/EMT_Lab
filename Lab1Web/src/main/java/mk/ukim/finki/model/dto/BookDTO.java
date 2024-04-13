package mk.ukim.finki.model.dto;

import lombok.Data;
import mk.ukim.finki.model.BooksCategory;

@Data
public class BookDTO {

    public String name;

    public BooksCategory category;

    public Long author;

    private Integer AvailableCopies;


    public BookDTO(String name, BooksCategory category, Long author, Integer availableCopies) {
        this.name = name;
        this.category = category;
        this.author = author;
        AvailableCopies = availableCopies;
    }
}
