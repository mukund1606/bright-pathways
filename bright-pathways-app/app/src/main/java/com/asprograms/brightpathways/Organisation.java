package com.asprograms.brightpathways;

public class Organisation {
    public String name;
    public String description;
    public String address;
    public String password;
    public String email;

    public String getEmail() {
        return email;
    }

    public Organisation(String name, String description, String address, String password, String email) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.password = password;
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getAddress() {
        return address;
    }

    public String getPassword() {
        return password;
    }

    public Organisation(String name, String description, String address, String password) {
        this.name = name;
        this.description = description;
        this.address = address;
        this.password = password;
    }
}
