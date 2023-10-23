package edu.iCET.service;

import edu.iCET.dao.StudentEntity;
import edu.iCET.dto.Student;
import java.util.Optional;

public interface StudentService {
    public void createStudent(Student student);
    public Iterable<StudentEntity> getAllStudents();
    public Optional<StudentEntity> getStudentById(Long id);
    public Iterable<StudentEntity> getStudentByName(String name);
    public void deleteStudent(Long id);
    public void updateStudent(Student student,Long id);
}
