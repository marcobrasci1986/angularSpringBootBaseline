package be.fgov.caamihziv.baseline.angular.controller;

import be.fgov.caamihziv.baseline.angular.domain.Employee;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resources;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * http://localhost:8080/employees
 *
 * @author mbrasci
 */
@RestController
@RequestMapping(value = "/employees", produces = "application/hal+json")
public class EmployeeController {

    public static final String ENDPOINT_LIST = "list";
    public static final String ENDPOINT_ONE = "one";
    private List<Employee> employees = new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> resource() {
        Resources<Object> resources = new Resources<>(Collections.emptySet());

        resources.add(createLink(ENDPOINT_LIST));
        resources.add(createLink(ENDPOINT_ONE));
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }

    private Link createLink(String value) {
        String link = linkTo(EmployeeController.class) + "/" + value;
        return new Link(link, value);
    }


    /**
     * http://localhost:8080/employees/list
     *
     * @return
     */
    @RequestMapping(value = ENDPOINT_LIST, method = RequestMethod.GET)
    public List<Employee> list() {
        employees.add(Employee.instance("Mark", 15, LocalDate.of(2001, 1, 22)));
        employees.add(Employee.instance("Eva", 30, LocalDate.of(1986, 4, 19)));
        employees.add(Employee.instance("John", 16, LocalDate.of(2016, 10, 9)));
        return employees;
    }

    /**
     * http://localhost:8080/employees/one
     * @return
     */
    @RequestMapping(value = ENDPOINT_ONE, method = RequestMethod.GET)
    public Employee one() {

        return Employee.instance("John", 16, LocalDate.of(2016, 10, 9));
    }

}
