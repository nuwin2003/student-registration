package edu.iCET.service;

import edu.iCET.dao.StudentEntity;
import edu.iCET.dto.Student;
import edu.iCET.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Primary
public class StudentServiceImpl1 implements StudentService{
    @Autowired
    StudentRepository studentRepository;

    public Optional<StudentEntity> getStudentById(Long id){
        return studentRepository.findById(id);
    }
    public Iterable<StudentEntity> getStudentByName(String name){
        return studentRepository.findByName(name);
    }
    public void createStudent(Student student){
        StudentEntity studentModel = new StudentEntity();
        studentModel.setName(student.getName());
        studentModel.setEmailAddress(student.getEmailAddress());
        studentModel.setAge(student.getAge());
        studentModel.setAddress(student.getAddress());
        studentModel.setContactNumber(student.getContactNumber());
        studentModel.setDateOfBirth(student.getDateOfBirth());
        studentModel.setGuardianName(student.getGuardianName());
        studentModel.setGuardianAddress(student.getGuardianAddress());
        studentModel.setGuardianContact(student.getGuardianContact());
        studentModel.setImage(student.getImage());

        studentRepository.save(studentModel);
    }
    public Iterable<StudentEntity> getAllStudents(){
        return studentRepository.findAll();
    }
    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }
    public void updateStudent(Student student,Long id){
        StudentEntity studentModel = studentRepository.findById(id).get();
        studentModel.setName(student.getName());
        studentModel.setEmailAddress(student.getEmailAddress());
        studentModel.setAge(student.getAge());
        studentModel.setAddress(student.getAddress());
        studentModel.setContactNumber(student.getContactNumber());
        studentModel.setDateOfBirth(student.getDateOfBirth());
        studentModel.setGuardianName(student.getGuardianName());
        studentModel.setGuardianAddress(student.getGuardianAddress());
        studentModel.setGuardianContact(student.getGuardianContact());

        studentRepository.save(studentModel);
    }
}
