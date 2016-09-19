package be.fgov.caamihziv.baseline.angular.controller;

import be.fgov.caamihziv.baseline.angular.domain.Employee;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * @author mbrasci
 */
@RestController
public class EmployeeController {
    


    /**
     * http://localhost:8080/employees
     * @return
     */
    @RequestMapping(value = "/employees", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Employee> index() {
        List<Employee> employees = new ArrayList<>();

        employees.add(Employee.instance("Mark", 15, LocalDate.of(2001, 1, 22)));
        employees.add(Employee.instance("Eva", 30, LocalDate.of(1986, 4, 19)));
        employees.add(Employee.instance("John", 16, LocalDate.of(2016, 10, 9)));

        return employees;
    }

}
