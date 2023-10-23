package edu.iCET.repository;

import edu.iCET.dao.StudentEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface StudentRepository extends CrudRepository<StudentEntity,Long> {

    public Iterable<StudentEntity> findAll();
    public Optional<StudentEntity> findById(Long id);
    Iterable<StudentEntity> findByName(String name);
    public void deleteById(Long id);
}
