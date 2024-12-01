package com.file.File.server;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.file.File.model.modelFile;
import com.file.File.repository.fileRepository;

@Service
public class fileServer {
    @Autowired
    public fileRepository fileRepository ;

    public void saveFile(modelFile file) {
        try{
            this.fileRepository.save(file);
        }catch(Exception e)
        {
            System.out.println(e);
        }
    }
}
