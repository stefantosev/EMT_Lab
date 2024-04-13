//package mk.ukim.finki.web;
//
//
//import mk.ukim.finki.model.Author;
//import mk.ukim.finki.service.AuthorService;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//
//
//import java.util.List;
//
//@Controller
//public class AuthorController {
//
//    private final AuthorService authorService;
//
//    public AuthorController(AuthorService authorService) {
//        this.authorService = authorService;
//    }
//
//    @GetMapping("/list")
//    String listAuthors(Model model){
//            model.addAttribute("authors", authorService.listAll());
//            return "authors";
//    }
//
//
//
//}
