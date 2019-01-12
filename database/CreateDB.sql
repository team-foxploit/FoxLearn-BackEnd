show databases;
use foxlearn;

-- Table creation
CREATE TABLE Student (
    Student_ID INTEGER NOT NULL AUTO_INCREMENT,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PRIMARY KEY(Student_ID)
);

ALTER TABLE Student AUTO_INCREMENT = 1;

CREATE TABLE Teacher (
    Teacher_ID INTEGER NOT NULL AUTO_INCREMENT,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    PRIMARY KEY(Teacher_ID)
);

ALTER TABLE Teacher AUTO_INCREMENT = 1;

-- Data population
INSERT INTO Student(First_Name, Last_Name, Email, Username, Password) VALUES("Saman", "Kumara", "1@dsjuvhn", "SK","abc123");
INSERT INTO Student(First_Name, Last_Name, Email, Username, Password) VALUES("Dasun", "Wickramasinghe", "1@ddsgsd", "hello","asdvfb");
INSERT INTO Student(First_Name, Last_Name, Email, Username, Password) VALUES("Sanuka", "Wickramasinghe", "1@dn", "new user","aaaa");
