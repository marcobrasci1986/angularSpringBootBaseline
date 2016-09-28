package be.fgov.caamihziv.baseline.angular.controller;

import be.fgov.caamihziv.baseline.angular.domain.Employee;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.hateoas.MediaTypes;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
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
public class EmployeeController {

    private final static Logger LOGGER = LoggerFactory.getLogger(EmployeeController.class);

    public static final String ENDPOINT_LIST = "employees";
    public static final String ENDPOINT_ONE = ENDPOINT_LIST + "/{id}";
    private List<Employee> employees = new ArrayList<>();


    /**
     * http://localhost:8080/employees
     *
     * @return
     */
    @RequestMapping(value = ENDPOINT_LIST, method = RequestMethod.GET)
    public List<Employee> employees() {
        LOGGER.info("EmployeeController.employees");
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        employees.clear();
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
        LOGGER.info("EmployeeController.findById: {}", id);
        return Employee.instance("John", 16, LocalDate.of(2016, 10, 9));
    }

}
