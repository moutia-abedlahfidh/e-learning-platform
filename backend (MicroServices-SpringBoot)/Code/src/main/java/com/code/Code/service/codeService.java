package com.code.Code.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.code.Code.model.modelCode;
import com.code.Code.repository.codeRepository;

@Service
public class codeService {
    @Autowired
    public codeRepository codeRepository ;
    

    public boolean saveCode(modelCode code) {
        try{
            this.codeRepository.save(code);
            return true ;
        }catch(Exception e)
        {
            System.out.println(e);
        }
        return false ;
    }

    public List<modelCode> getAllCoursesByTeacherId(Integer idteacher)
    {
        try{
            return this.codeRepository.findByidteacher(idteacher) ;
        }catch(Exception e)
        {
            System.out.println(e);
        }
        return new ArrayList<modelCode>() ;
    }

    

}
