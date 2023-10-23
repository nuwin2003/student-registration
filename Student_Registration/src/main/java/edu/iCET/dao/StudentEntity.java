package edu.iCET.dao;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Student")
public class StudentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String name;
    String emailAddress;
    int age;
    String address;
    String contactNumber;
    String dateOfBirth;
    String guardianName;
    String guardianAddress;
    String guardianContact;

    @Lob
    byte[] image;
}
