package com.code.Code.controller;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import org.apache.hc.core5.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.code.Code.model.modelCode;
import com.code.Code.service.codeService;

@RestController
@RequestMapping("/code")
public class codeController {
    @Autowired
    public codeService myservice ;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/savecourse")
    public boolean saveCode(@RequestBody modelCode code) {
        return this.myservice.saveCode(code);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/getCourses/{id-teacher}")
    public List<modelCode> getallcourses(@PathVariable("id-teacher") Integer TeacherID)
    {
        System.out.println("id-teacher = " + TeacherID);
        return this.myservice.getAllCoursesByTeacherId(TeacherID);
    }

    @PostMapping("/uploadfile")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        final String uploadDir = "C://Users//MSI//Desktop//e-learning platform//backend//files";
        try{
            
            if (file.isEmpty()){
                return ResponseEntity.status(HttpStatus.SC_BAD_REQUEST).body("No file uploaded");
            } 
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdir();
            }
            File destinationFile = new File(directory, file.getOriginalFilename());
            file.transferTo(destinationFile);
            return ResponseEntity.ok("File uploaded successfully: " + destinationFile.getName());
            
        }catch(Exception err)
        {
            System.out.println(err.getMessage());
            return ResponseEntity.status(HttpStatus.SC_INTERNAL_SERVER_ERROR).body("upload file Failed : " + err.getMessage());
        }
    }

    
}
