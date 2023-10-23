package edu.iCET.controller;

import edu.iCET.dao.StudentEntity;
import edu.iCET.dto.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import edu.iCET.service.StudentService;

import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/studentRegistration")
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/getAllStudents")
    public Iterable<StudentEntity> getStudents(){
        return studentService.getAllStudents();
    }
    @GetMapping("/{Id}")
    public Optional<StudentEntity> getStudentById(@PathVariable("Id")Long id){
        return studentService.getStudentById(id);
    }
    @GetMapping("/student/{name}")
    public Iterable<StudentEntity> getStudentByFirstName(@PathVariable("name")String name){
        return studentService.getStudentByName(name);
    }
    @DeleteMapping("/{Id}")
    public void deleteStudent(@PathVariable("Id") Long id){
        studentService.deleteStudent(id);
    }
    @PostMapping
    public void createStudent(@RequestBody Student student){
        studentService.createStudent(student);
    }
    @PutMapping("/student/{Id}")
    public void updateStudent(@RequestBody Student student,@PathVariable("Id") Long id) {
        studentService.updateStudent(student, id);
    }

}
