package com.file.File.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.file.File.model.modelFile;



public interface fileRepository extends JpaRepository<modelFile,Integer>{
    
}
