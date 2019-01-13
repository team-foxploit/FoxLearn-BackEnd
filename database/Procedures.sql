
//--------------------------Insert procedure for students-----------------------------------------

DELIMITER $$
      CREATE PROCEDURE insert_student(IN First_Name_p varchar(45),IN Last_Name_p varchar(45),IN Password_p VARCHAR(10),IN Email_p VARCHAR(45), IN User_Name_p VARCHAR(45))
        BEGIN
        INSERT INTO Student (First_Name,Last_Name,Password,Email,Username) VALUES (First_Name_p,Last_Name_p,Password_p,Email_p,User_Name_p);
        END$$
DELIMITER ;





//--------------------------Insert procedure for teachers-----------------------------------------

DELIMITER $$
      CREATE PROCEDURE insert_teacher(IN First_Name_p varchar(45),IN Last_Name_p varchar(45),IN Password_p VARCHAR(45),IN Email_p VARCHAR(45), IN User_Name_p VARCHAR(45))
        BEGIN
        INSERT INTO Teacher (First_Name, Last_Name, Password, Email, Username) VALUES (First_Name_p, Last_Name_p, Password_p, Email_p, User_Name_p);
        END$$
DELIMITER ;





//--------------------------Insert procedure for questions -----------------------------------------

DELIMITER $$
      CREATE PROCEDURE insert_ques_ans(IN Question_Id_p VARCHAR(255),IN Correct_Answer_Id_p INT,IN Question_p varchar(500),IN Subject_Id_p INT,IN Teacher_Id_p INT, IN Answer_1_p VARCHAR(45), IN Answer_2_p VARCHAR(45), IN Answer_3_p VARCHAR(45), IN Answer_4_p VARCHAR(45))
        BEGIN
        INSERT INTO Question (Ques_ID,Crct_Ans_Id,Question,Sub_ID,Tch_ID) VALUES (Question_Id_p,Correct_Answer_Id_p,Question_p,Subject_Id_p,Teacher_Id_p);
	INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 1, Answer_1_p, Question_Id_p);
	INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 2, Answer_2_p, Question_Id_p);
	INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 3, Answer_3_p, Question_Id_p);
    INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 4, Answer_4_p, Question_Id_p);
	END$$
DELIMITER ;






//---------------------Retrieve the Question , answers and the correct answer---------------------------------------------------

DELIMITER $$
      CREATE PROCEDURE get_Quiz(IN Question_Id_p varchar(255),IN Subject_Name_p varchar(45),IN Difficulty_p VARCHAR(10))
        BEGIN
        SELECT Question.Question ,Question.Crct_Ans_Id, Question.Difficulty, Subject.Subject_Name, Answer.Ans_ID, Answer.Answer FROM Question,Answer,Subject WHERE Question_Id_p = Question.Ques_ID AND Question_Id_p = Answer.Ques_ID AND Subject.Subject_Name = Subject_Name_p AND Question.Difficulty = Difficulty_p;
        END$$
DELIMITER ;
