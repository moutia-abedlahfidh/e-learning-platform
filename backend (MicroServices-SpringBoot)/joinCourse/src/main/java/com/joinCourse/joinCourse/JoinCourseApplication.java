package com.joinCourse.joinCourse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class JoinCourseApplication {

	public static void main(String[] args) {
		SpringApplication.run(JoinCourseApplication.class, args);
	}

}
