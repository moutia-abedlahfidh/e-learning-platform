package com.joinCourse.joinCourse.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joinCourse.joinCourse.model.joinCourse;


public interface join_repository_repo extends JpaRepository<joinCourse,Integer>{

    Optional<joinCourse> findByidStudent(Integer idStudent) ; 
    
}
