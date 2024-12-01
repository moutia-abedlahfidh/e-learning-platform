package com.joinCourse.joinCourse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import com.joinCourse.joinCourse.model.joinCourse;


@RequestMapping("/join")
public class controller_join_courses {
    @Autowired
    private joinCourse model_profile ;

}
