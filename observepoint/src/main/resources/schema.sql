DROP TABLE IF EXISTS departments;
CREATE TABLE departments(
    deptId int AUTO_INCREMENT  PRIMARY KEY,
    dept_name varchar(1000) NOT NULL
);

DROP TABLE IF EXISTS employees;
CREATE TABLE employees(
    empId int AUTO_INCREMENT  PRIMARY KEY,
    first_name varchar(1000) NOT NULL,
    last_name varchar(1000) NOT NULL,
    email_id varchar(1000) NOT NULL,
    dept_name varchar(1000) NOT NULL
);