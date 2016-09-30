package be.fgov.caamihziv.baseline.angular.controller;

import be.fgov.caamihziv.baseline.angular.domain.Book;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.MediaTypes;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;
import java.util.List;

//import org.springframework.hateoas.Link;

/**
 * http://localhost:8080/employees
 *
 * @author mbrasci
 */
@RestController
@RequestMapping(produces = MediaTypes.HAL_JSON_VALUE)
public class BookController {

    private final static Logger LOGGER = LoggerFactory.getLogger(BookController.class);

    public static final String ENDPOINT_LIST = "books";
    private List<Book> books = new ArrayList<>();


    /**
     * http://localhost:8080/employees
     *
     * @return
     */
    @RequestMapping(value = ENDPOINT_LIST, method = RequestMethod.GET)
    public List<Book> books() {
        LOGGER.info("BookController.books");
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        books.clear();
        books.add(Book.instance("Da Vinci"));
        books.add(Book.instance("Bernini"));
        books.add(Book.instance("Juvenalis"));

        return books;
    }

   

}
