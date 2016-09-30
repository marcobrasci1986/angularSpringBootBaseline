package be.fgov.caamihziv.baseline.angular.domain;

/**
 * @author mbrasci
 */
public class Book {


    private String title;
    
    public static Book instance(String title){
        return new Book(title);
    }

    public Book(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
