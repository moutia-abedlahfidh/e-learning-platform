package com.joinCourse.joinCourse.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.joinCourse.joinCourse.model.joinCourse;
import com.joinCourse.joinCourse.repository.join_repository_repo;



public class join_courses_service {
    @Autowired
    private joinCourse model_profile ;
    @Autowired
    private join_repository_repo repository ;

    public Optional<joinCourse> getCodes(Integer StudentID) {
        try{
            return this.repository.findByidStudent(StudentID) ;
        }
        catch(Exception e)
        {
            System.out.println(e);
            return Optional.empty();
        }
    }

}
