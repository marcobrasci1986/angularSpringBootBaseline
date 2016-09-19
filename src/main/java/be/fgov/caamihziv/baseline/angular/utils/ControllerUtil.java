package be.fgov.caamihziv.baseline.angular.utils;

import org.springframework.hateoas.Link;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;

/**
 * @author mbrasci
 */
public class ControllerUtil {

    public static Link createLink(String value, Class clazz) {
        String link = linkTo(clazz) + "/" + value;
        return new Link(link, value);
    }    
    
    public static Link createLink(Class clazz) {
        String link = linkTo(clazz) + "/";
        return new Link(link);
    }
}
