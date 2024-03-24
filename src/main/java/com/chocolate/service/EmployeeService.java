package com.chocolate.service;

import com.chocolate.dao.EmployeeRepo;
import com.chocolate.entity.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepo employeeRepo;

    @Autowired
    public EmployeeService(EmployeeRepo employeeRepo) {
        this.employeeRepo = employeeRepo;
    }

//    @Autowired
//    public EmployeeService(EmployeeRepo employeeRepo) {
//    }

    @Transactional
    public Employee addEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> findAllEmployees(){
        return employeeRepo.findAll();
    }

    public Employee findEmployeeById(Integer id){
        return employeeRepo.findEmployeeById(id);
    }

    @Transactional
    public Employee updateEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    @Transactional
    public void deleteEmployeeById(Integer id){
        employeeRepo.deleteEmployeeById(id);
    }

}
