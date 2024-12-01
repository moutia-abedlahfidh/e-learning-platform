package com.code.Code.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.code.Code.model.modelCode;

public interface codeRepository extends JpaRepository<modelCode,Integer>{
    List<modelCode> findByidteacher(Integer idteacher);

}