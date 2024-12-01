package com.code.Code.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "courses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class modelCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_code")
    private Integer id_code ;
    @Column(name = "idteacher")
    private Integer idteacher ;
    @Column(name = "code")
    private String code ;
    @Column(name = "name_course")
    private String name_course ;
    @Column(name = "logo_course")
    private String logo_course ;

    public String namecourse() 
    {
        return this.name_course ;
    }
}
