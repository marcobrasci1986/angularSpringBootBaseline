package be.fgov.caamihziv.baseline.angular.controller;

import org.springframework.data.rest.webmvc.RepositoryLinksResource;
import org.springframework.hateoas.MediaTypes;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

/**
 * @author mbrasci
 */
@RestController
@RequestMapping(value = "/api", produces = MediaTypes.HAL_JSON_VALUE)
public class RootController {

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> resource() {
        RepositoryLinksResource resources = new RepositoryLinksResource();
        resources.add(linkTo(methodOn(EmployeeController.class).findById("{id}")).withRel("find"));
        resources.add(linkTo(methodOn(EmployeeController.class).employees()).withRel("list"));
        return new ResponseEntity<>(resources, HttpStatus.OK);
    }
}
