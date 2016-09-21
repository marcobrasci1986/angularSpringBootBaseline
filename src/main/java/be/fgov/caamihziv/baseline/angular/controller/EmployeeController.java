package be.fgov.caamihziv.baseline.angular.controller;

import be.fgov.caamihziv.baseline.angular.domain.Employee;
import org.springframework.data.rest.webmvc.RepositoryLinksResource;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

//import org.springframework.hateoas.Link;

/**
 * http://localhost:8080/employees
 *
 * @author mbrasci
 */
@RestController
@RequestMapping(value = "/employees", produces = MediaTypes.HAL_JSON_VALUE)
public class EmployeeController {

    public static final String ENDPOINT_LIST = "/";
    public static final String ENDPOINT_ONE = "/{id}";
    private List<Employee> employees = new ArrayList<>();

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> resource() {
        RepositoryLinksResource resources = new RepositoryLinksResource();
        resources.add(linkTo(methodOn(EmployeeController.class).findById("{id}")).withRel(ENDPOINT_ONE));
        resources.add(linkTo(methodOn(EmployeeController.class).employees()).withRel(ENDPOINT_LIST));
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }


    /**
     * http://localhost:8080/employees/list
     *
     * @return
     */
    @RequestMapping(value = ENDPOINT_LIST, method = RequestMethod.GET)
    public List<Employee> employees() {
        employees.add(Employee.instance("Mark", 15, LocalDate.of(2001, 1, 22)));
        employees.add(Employee.instance("Eva", 30, LocalDate.of(1986, 4, 19)));
        employees.add(Employee.instance("John", 16, LocalDate.of(2016, 10, 9)));
        return employees;
    }

    /**
     * http://localhost:8080/employees/1
     *
     * @return
     */
    @RequestMapping(value = ENDPOINT_ONE, method = RequestMethod.GET)
    public Employee findById(@PathVariable String id) {
        System.out.println(id);
        return Employee.instance("John", 16, LocalDate.of(2016, 10, 9));
    }

}
