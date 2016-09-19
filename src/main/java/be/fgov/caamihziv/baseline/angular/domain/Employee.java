package be.fgov.caamihziv.baseline.angular.domain;

import java.time.LocalDate;

/**
 * @author mbrasci
 */
public class Employee {


    private String name;
    private int age;
    private LocalDate birthDay;

    public static Employee instance(String name, int age, LocalDate birthDay) {
        return new Employee(name, age, birthDay);
    }

    public Employee(String name, int age, LocalDate birthDay) {
        this.name = name;
        this.age = age;
        this.birthDay = birthDay;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public LocalDate getBirthDay() {
        return birthDay;
    }

    public void setBirthDay(LocalDate birthDay) {
        this.birthDay = birthDay;
    }
}
