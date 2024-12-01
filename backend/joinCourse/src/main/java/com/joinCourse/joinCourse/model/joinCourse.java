package com.joinCourse.joinCourse.model;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "join_course")
public class joinCourse {
    @Column(name = "code")
    private String  code ;
    @Id
    @Column(name = "id_student")
    private Integer idStudent ;

    public String getCode() {
        return this.code ;
    }

    public Integer getIdStudent() {
        return this.idStudent ;
    }
}
