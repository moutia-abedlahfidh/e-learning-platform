package com.signup.signup.model;

import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Data
@Table(name = "accounts")
public class accounts {
    private String email ;
    private String password;

    public String getEmail() {
        return email ;
    }
    
    public String getPassword() {
        return password ;
    }

}
