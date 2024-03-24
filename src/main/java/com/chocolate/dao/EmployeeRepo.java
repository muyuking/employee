package com.chocolate.dao;

import com.chocolate.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    Employee findEmployeeById(Integer id);

    void deleteEmployeeById(Integer id);
}
