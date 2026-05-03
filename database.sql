CREATE DATABASE placement_management_system;

USE placement_management_system;

CREATE TABLE students (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(100)
);

CREATE TABLE jobs (
    id INT PRIMARY KEY AUTO_INCREMENT,
    company_name VARCHAR(100),
    job_role VARCHAR(100),
    location VARCHAR(100),
    salary VARCHAR(50)
);

CREATE TABLE applications (
    id INT PRIMARY KEY AUTO_INCREMENT,
    student_email VARCHAR(100),
    company_name VARCHAR(100),
    job_role VARCHAR(100),
    status VARCHAR(50)
);