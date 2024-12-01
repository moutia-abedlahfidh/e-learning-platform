package com.file.File.model;
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
@Table(name = "files")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class modelFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "IdFile")
    private String IdFile ;
    @Column(name = "code")
    private String code ;
    @Column(name = "id_teacher")
    private Integer id_teacher	 ;
    @Column(name = "name")
    private String name ;
    @Column(name = "url")
    private String url ;
}
