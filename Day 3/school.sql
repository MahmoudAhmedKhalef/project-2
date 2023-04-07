CREATE DATABASE IF NOT EXISTS school;

CREATE TABLE IF NOT EXISTS teacher (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    email VARCHAR(120),
    age INT,
    subject VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    email VARCHAR(120),
    age INT,
    grade VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS grades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    grade_name VARCHAR(60)
);

CREATE TABLE IF NOT EXISTS subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    full_mark INT,
    fail_mark INT
);

CREATE TABLE IF NOT EXISTS exam_result (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60),
    teacher_id INT,
    student_id INT
);