package mk.ukim.finki.web;

import mk.ukim.finki.model.BooksCategory;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000"})
@RequestMapping("/api/categories")
public class BookCategoryRestController {

    @GetMapping
    public List<BooksCategory> listAll(){
        return List.of(BooksCategory.values());
    }
}
