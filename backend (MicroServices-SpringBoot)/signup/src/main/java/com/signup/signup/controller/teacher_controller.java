package com.signup.signup.controller;

import org.apache.el.stream.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.signup.signup.model.accounts;
import com.signup.signup.service.teacher_service;
import com.signup.signup.teacher.account;

@RestController
@RequestMapping("/teacher")
public class teacher_controller {
    @Autowired
    public teacher_service service ;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/saveData")
    public boolean save(@RequestBody account teacherAccount) {
        return this.service.SaveAccount(teacherAccount);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/checkAccount")
    public java.util.Optional<account> checkAccount(@RequestBody accounts model )
    {
        return this.service.checkAccount(model.getEmail(),model.getPassword()) ;
    }
}
