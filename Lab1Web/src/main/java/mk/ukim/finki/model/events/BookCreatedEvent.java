package mk.ukim.finki.model.events;


import lombok.Getter;
import mk.ukim.finki.model.Book;
import org.springframework.context.ApplicationEvent;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.Clock;
import java.time.LocalDate;
import java.time.LocalDateTime;


@Getter
public class BookCreatedEvent extends ApplicationEvent {
    private LocalDateTime when;

    public BookCreatedEvent(Book book){
        super(book);
        this.when = LocalDateTime.now();
    }
    public BookCreatedEvent(Book book, LocalDateTime when) {
        super(book);
        this.when = when;
    }
}
