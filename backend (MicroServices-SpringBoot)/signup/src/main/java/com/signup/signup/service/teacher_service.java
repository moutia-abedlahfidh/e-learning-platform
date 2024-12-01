package com.signup.signup.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.signup.signup.repository.teacher_repo;
import com.signup.signup.teacher.account;

import java.util.Optional ;

@Service
public class teacher_service {
    @Autowired
    public teacher_repo repository ;

    public boolean SaveAccount(@RequestBody account info_account) {
        try{
            this.repository.save(info_account);
            return true ;
        }catch(Exception e) {
            System.out.println(e);
        }
        return false ;
    }

    public Optional<account> checkAccount(String email,String password) {
        try{
            Optional<account> account = this.repository.findByEmailAndPassword(email,password) ;
            if (account.isPresent()) {
                return account ;
            }else{
                return Optional.of((new account())) ;
            }
        }catch(Exception e) 
        {
            System.out.println(e);
        }
        return null;
    }
}
