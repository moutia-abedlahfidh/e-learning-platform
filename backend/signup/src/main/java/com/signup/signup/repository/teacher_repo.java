package com.signup.signup.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.signup.signup.teacher.account;
import java.util.Optional ;

public interface teacher_repo extends JpaRepository<account,Integer>{
    Optional<account> findByEmailAndPassword(String email, String password);
}
