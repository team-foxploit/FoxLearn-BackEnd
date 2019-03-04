use heroku_959b285b69c3527;
-- drop database heroku_959b285b69c3527;
-- create database heroku_959b285b69c3527;
-- Table creation
CREATE TABLE Student (
    Std_ID INTEGER NOT NULL AUTO_INCREMENT,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    PRIMARY KEY(Std_ID)
);

ALTER TABLE Student AUTO_INCREMENT = 1000;

CREATE TABLE Teacher (
    Tch_ID INT NOT NULL AUTO_INCREMENT,
    First_Name VARCHAR(50) NOT NULL,
    Last_Name VARCHAR(50) NOT NULL,
    Password VARCHAR(50) NOT NULL,
    Email VARCHAR(50) NOT NULL,
    Username VARCHAR(50) NOT NULL,
    PRIMARY KEY (Tch_ID)
);

ALTER TABLE Teacher AUTO_INCREMENT = 2000;

CREATE TABLE Subject(
    Sub_ID INT NOT NULL AUTO_INCREMENT,
    Subject_Name VARCHAR(50) NOT NULL,
    PRIMARY KEY (Sub_ID)
);

CREATE TABLE Answer (
	AID INT NOT NULL AUTO_INCREMENT,
    Ans_ID INT NOT NULL,
    Answer VARCHAR(45) NOT NULL,
    Ques_ID INT NOT NULL,
    PRIMARY KEY (AID)
);

ALTER TABLE Answer AUTO_INCREMENT = 100;

CREATE TABLE Question(
    Ques_ID INTEGER NOT NULL AUTO_INCREMENT,
    Crct_Ans_Id INT NOT NULL,
    Question VARCHAR(500) NOT NULL,
    Sub_ID INT NOT NULL,
    Tch_ID INT NOT NULL,
    Difficulty VARCHAR(10) NOT NULL,
    PRIMARY KEY (Ques_ID)
);

ALTER TABLE Question AUTO_INCREMENT = 4000;

CREATE TABLE ChemistryScore (
    Std_ID INT NOT NULL,
    Atmp_1 DOUBLE NULL,
    Atmp_2 DOUBLE NULL,
    Atmp_3 DOUBLE NULL,
    Atmp_4 DOUBLE NULL,
    Atmp_5 DOUBLE NULL,
    PRIMARY KEY (Std_ID)
);


CREATE TABLE GeographyScore (
    Std_ID INT NOT NULL,
    Atmp_1 DOUBLE NULL,
    Atmp_2 DOUBLE NULL,
    Atmp_3 DOUBLE NULL,
    Atmp_4 DOUBLE NULL,
    Atmp_5 DOUBLE NULL,
    PRIMARY KEY (Std_ID)
);


CREATE TABLE PhysicsScore (
    Std_ID INT NOT NULL,
    Atmp_1 DOUBLE NULL,
    Atmp_2 DOUBLE NULL,
    Atmp_3 DOUBLE NULL,
    Atmp_4 DOUBLE NULL,
    Atmp_5 DOUBLE NULL,
    PRIMARY KEY (Std_ID)
);


ALTER TABLE PhysicsScore ADD FOREIGN KEY (Std_ID) REFERENCES Student(Std_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ChemistryScore ADD FOREIGN KEY (Std_ID) REFERENCES Student(Std_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE GeographyScore ADD FOREIGN KEY (Std_ID) REFERENCES Student(Std_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Question ADD FOREIGN KEY (Sub_ID) REFERENCES Subject(Sub_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Question ADD FOREIGN KEY (Tch_ID) REFERENCES Teacher(Tch_ID) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE Question ADD FOREIGN KEY (Crct_Ans_Id) REFERENCES Answer(Ans_ID) ON UPDATE CASCADE ON DELETE CASCADE;


INSERT INTO Student (Std_ID,First_Name, Last_Name, Password,Email,Username) VALUES (1001, 'Amila', 'Perera', '2456lun', 'amilap7@gmail.com','amiiila');
INSERT INTO Student (Std_ID, First_Name, Last_Name,Password,Email,Username) VALUES (1002, 'Sandaruwan', 'Jayawardana', '67hyyj', 'sanda35@gmail.com','sanda');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1003, 'Nimanthi', 'Dilshika', 'jut56', 'niman89@gmail.com','niman');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1004, 'Sithara', 'Maduwanthi', '89ukmn', 'sitha05@gmail.com','Sitharayu');
INSERT INTO Student (Std_ID,First_Name,Last_Name,Password, Email,Username) VALUES (1005, 'Dilum', 'Fernando', '45rgth', 'dilum78@gmail.com','diluu');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1006, 'Pawani', 'Kalhari', '67hyhn', 'pawa845@gmail.com','pawaniii56');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1007, 'Kasun', 'Silva', 'uywe34', 'kasuua45@gmail.com','kasuu89');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1008, 'Shehan', 'Perera', 'ty564', 'seha768@gmail.com','sheen67');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1009, 'Amali', 'Perera', 'fg67v', 'samali675@gmail.com','amaa');
INSERT INTO Student (Std_ID, First_Name, Last_Name, Password, Email,Username) VALUES (1010, 'Sumeda', 'Dilhara', '67bgb', 'sumeeda45@gmail.com','sumeda67');

COMMIT;



INSERT INTO Teacher (Tch_ID,First_Name,Last_Name,Password,Email,Username) VALUES (2001, 'Nimal', 'Perera', 'yut657', 'nimalpe@gmail.com','nimao64');
INSERT INTO Teacher (Tch_ID, First_Name, Last_Name, Password, Email,Username) VALUES (2002, 'Sahan', 'Rathnayaka', '89hgygy', 'sahanrath@gmail.com','sahnrath');
INSERT INTO Teacher(Tch_ID, First_Name, Last_Name, Password, Email,Username) VALUES (2003, 'Sumith', 'Silva', '68hgdf', 'sumi@gmail.com','sumii5');






INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Oxygen', 4000);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Nitrogen', 4000);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Argon', 4000);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Carbon Dioxide', 4000);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Airflow', 4001);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Moisture', 4001);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Storm', 4001);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Thunder', 4001);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Energy pathways', 4002);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Hydroelectricity', 4002);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID)VALUES (3, 'Biomass', 4002);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Energy conservation', 4002);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Acid precipitation', 4003);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Acid rain', 4003);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Clear rain', 4003);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Freezing rain', 4003);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Renewable energy', 4004);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Thermal adaption', 4004);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Hydroelectric power', 4004);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Biofuels', 4004);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Diesel', 4005);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID)VALUES (2, 'Petrol', 4005);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Paraffin', 4005);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'All of the above', 4005);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Strong acids', 4006);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Strong alkalis', 4006);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Weak acids', 4006);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Weak bases', 4006);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Corrosive', 4007);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Turn litmus from blue to red', 4007);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Turn litmus from red to blue', 4007);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Non-metal oxides', 4007);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Salt and water', 4008);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Salt and hydrogen gas', 4008);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Salt and hydrogen oxides', 4008);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Salt and alkali', 4008);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Litmus indicator', 4009);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Universal indicator', 4009);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Methyl orange indicator', 4009);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'All of these', 4009);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Thermal energy', 4010);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Mechanical energy', 4010);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Magnetic energy', 4010);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Electric energy', 4010);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Viscous', 4011);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Non-Viscous', 4011);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Incompressible', 4011);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Both a and b', 4011);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Ohms', 4012);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Watts', 4012);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Pascal', 4012);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Joules', 4012);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Rays', 4013);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Waves', 4013);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Energy', 4013);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Light', 4013);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (1, 'Span', 4014);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (2, 'Period', 4014);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (3, 'Life', 4014);
INSERT INTO Answer (Ans_ID, Answer, Ques_ID) VALUES (4, 'Duration', 4014);



INSERT INTO Subject (Sub_ID, Subject_Name) VALUES (3001, 'Geography');
INSERT INTO Subject (Sub_ID, Subject_Name) VALUES (3002, 'Chemistry');
INSERT INTO Subject (Sub_ID, Subject_Name) VALUES (3003, 'Physics');

INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (2, 'The most abundant gas in the atmosphere is,', 3001, 2001, 'Easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (4, 'Sudden expansion of air in path of electrical discharge and as a result flash of lightning cause know as', 3001, 2002, 'Medium');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (3, 'Energy that we get from organic matter and burning wood is known as', 3001, 2001, 'Easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (2, 'Form of precipitation or rain that is unusually acidic is known as', 3001, 2002, 'Easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (4, 'Fuel produced by biological process is known as', 3001, 2001, 'Hard');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (4, 'Crude oil can be fractionally distilled to produce', 3002, 2003, 'Hard');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (1, 'In Universal indicators, red color shows', 3002, 2001, 'Medium');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (3, 'Bases (OH-) are', 3002, 2003, 'Medium');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (1, 'Acids (H+) reacts with metal hydroxides (-OH-) to from', 3002, 2003, 'Easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (4, 'Acid shows red color with', 3002, 2001, 'easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (1, 'Ohmic devices are devices that consequently', 3003, 2002, 'Hard');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (2, 'Cross product of two same vectors is equal to', 3003, 2001, 'Medium');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (1, 'As wave travels, intensity', 3003, 2003, 'Easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (2, 'Sound passes from one place to another in form of', 3003, 2002, 'Easy');
INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty) VALUES (4, 'Decomposing vectors into mutually perpendicular components is called', 3003, 2001, 'Medium');
