package com.file.File.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.file.File.model.modelFile;
import com.file.File.server.fileServer;

@RestController
@RequestMapping("file/")
public class fileController {
    @Autowired
    public fileServer fileServer ;

    @PostMapping("/saveFile")
    public void saveFile(@RequestBody modelFile file) {
        this.fileServer.saveFile(file);
    }
}
