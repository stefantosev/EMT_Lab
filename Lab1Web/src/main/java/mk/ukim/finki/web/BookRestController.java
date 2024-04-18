package mk.ukim.finki.web;


import mk.ukim.finki.model.Book;
import mk.ukim.finki.model.BooksCategory;
import mk.ukim.finki.model.dto.BookDTO;
import mk.ukim.finki.model.events.*;
import mk.ukim.finki.model.exceptions.InvalidBookIDException;
import mk.ukim.finki.service.AuthorService;
import mk.ukim.finki.service.BookService;
import org.springframework.context.ApplicationEventPublisher;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/books")
public class BookRestController {
    private final BookService bookService;
    private final AuthorService authorService;
    final ApplicationEventPublisher applicationEventPublisher;

    public BookRestController(BookService bookService, AuthorService authorService, ApplicationEventPublisher applicationEventPublisher) {
        this.bookService = bookService;
        this.authorService = authorService;
        this.applicationEventPublisher = applicationEventPublisher;
    }

    @GetMapping("")
    public List<Book> listAll(){
        return this.bookService.listBooks();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> findById(@PathVariable Long id) {
        return this.bookService.findBookById(id)
                .map(product -> ResponseEntity.ok().body(product))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    //dopolnitelno
    @GetMapping("/search/{name}")
    public List<Book> searchBookByName(@PathVariable String name){
       return bookService.filterBookByName(name);
    }


    //RABOTI: /add?name=LebronsLegacy&authorId=1&category=THRILLER&availableCopies=5
    @PostMapping("/add")
    public ResponseEntity<Book> save(@RequestParam String name,
                                     @RequestParam Long authorId,
                                     @RequestParam String category,
                                     @RequestParam int availableCopies) {
        if(authorService.findById(authorId).isPresent()){
            Book book = new Book(name, BooksCategory.valueOf(category), availableCopies, authorService.findById(authorId).get());
            this.applicationEventPublisher.publishEvent(new BookCreatedEvent(book));  //RABOTI EVENTOT
            return this.bookService.addNewBook(book);
        }
        return null;

    }

    //RABOTI: /delete/3
    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteById(@PathVariable Long id) {
        if(bookService.findBookById(id).isPresent()){
            Book book = bookService.findBookById(id).get();
            this.bookService.deleteById(id);
            this.applicationEventPublisher.publishEvent(new BookDeletedEvent(book));   //POVIKAN EVENT
            if (this.bookService.findBookById(id).isEmpty()) return ResponseEntity.ok().build();
            return ResponseEntity.badRequest().build();
        }
        return null;
    }


    //RABOTI: /edit/3?name=AUF&authorId=2&category=FANTASY&availableCopies=10
    @PutMapping ("/edit/{id}")
    public ResponseEntity<Book> save(@PathVariable Long id,
                                     @RequestParam String name,
                                     @RequestParam Long authorId,
                                     @RequestParam String category,
                                     @RequestParam int availableCopies) {

        if(bookService.findBookById(id).isPresent()){
            Book book = bookService.findBookById(id).get();
            book.setName(name);
            if(authorService.findById(authorId).isPresent()){
                book.setAuthor(authorService.findById(authorId).get());
            }
            book.setCategory(BooksCategory.valueOf(category));
            book.setAvailableCopies(availableCopies);
            bookService.update(book);
            this.applicationEventPublisher.publishEvent(new BookEditedEvent(book));
            return this.bookService.update(book);
        } else {
            return null;
        }

    }


    @PutMapping("/taken/{id}")
    public ResponseEntity<Book> taken(@PathVariable Long id){
        Book book = bookService.findBookById(id).orElseThrow(InvalidBookIDException::new);

        if(book == null)
            return ResponseEntity.notFound().build();
        else {
            if(book.getAvailableCopies() > 0){
                bookService.taken(id);
                this.applicationEventPublisher.publishEvent(new BookTakenEvent(book));
            } else{
                this.applicationEventPublisher.publishEvent(new BookNotTakenEvent(book));
            }
            return ResponseEntity.ok(book);
        }
    }



}
