
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

-- DELIMITER $$
--       CREATE PROCEDURE insert_ques_ans(IN Question_Id_p VARCHAR(255),IN Correct_Answer_Id_p INT,IN Question_p varchar(500),IN Subject_Id_p INT,IN Teacher_Id_p INT, IN Answer_1_p VARCHAR(45), IN Answer_2_p VARCHAR(45), IN Answer_3_p VARCHAR(45), IN Answer_4_p VARCHAR(45))
--       BEGIN
--       INSERT INTO Question (Ques_ID,Crct_Ans_Id,Question,Sub_ID,Tch_ID) VALUES (Question_Id_p,Correct_Answer_Id_p,Question_p,Subject_Id_p,Teacher_Id_p);
-- 	    INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 1, Answer_1_p, Question_Id_p);
-- 	    INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 2, Answer_2_p, Question_Id_p);
-- 	    INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 3, Answer_3_p, Question_Id_p);
--       INSERT INTO Answer ( Ans_ID, Answer,Ques_ID) VALUES ( 4, Answer_4_p, Question_Id_p);
-- 	    END$$
-- DELIMITER ;
//-----------------------------Get all Q_IDs from DB for a given subject_ID---------------------------------------------------
DELIMITER $$
  CREATE PROCEDURE get_qID(IN subID INT)
    BEGIN
    SELECT Ques_ID FROM Question WHERE Sub_ID = subID;
    END $$
DELIMITER ;





//---------------------Retrieve the Question , answers and the correct answer---------------------------------------------------

DELIMITER $$
      CREATE PROCEDURE get_Quiz(IN Question_Id_p INT, IN Subject_Name_p varchar(45), IN Difficulty_p VARCHAR(10))
        BEGIN
        SELECT Question.Question ,Question.Crct_Ans_Id, Question.Difficulty, Subject.Subject_Name, Answer.Ans_ID, Answer.Answer FROM Question,Answer,Subject WHERE Question_Id_p = Question.Ques_ID AND Question_Id_p = Answer.Ques_ID AND Subject.Subject_Name = Subject_Name_p AND Question.Difficulty = Difficulty_p;
        END$$
DELIMITER ;




//----------------------Insert Chemistry quiz marks-------------------------------------------------------------------------------
DELIMITER $$
      CREATE PROCEDURE insert_chemscore(IN Std_Id_p INT,IN Atmp_1_p DOUBLE,IN Atmp_2_p DOUBLE,IN Atmp_3_p DOUBLE,IN Atmp_4_p DOUBLE,IN Atmp_5_p DOUBLE)
        BEGIN
        INSERT INTO ChemistryScore (Std_Id,Atmp_1,Atmp_2,Atmp_3,Atmp_4,Atmp_5) VALUES (Std_Id_p, Atmp_1_p,Atmp_2_p,Atmp_3_p,Atmp_4_p,Atmp_5_p);
        END$$
DELIMITER ;


//----------------------Insert Physics quiz marks-------------------------------------------------------------------------------
DELIMITER $$
      CREATE PROCEDURE insert_physcore(IN Std_Id_p INT,IN Atmp_1_p DOUBLE,IN Atmp_2_p DOUBLE,IN Atmp_3_p DOUBLE,IN Atmp_4_p DOUBLE,IN Atmp_5_p DOUBLE)
        BEGIN
        INSERT INTO PhysicsScore (Std_Id,Atmp_1,Atmp_2,Atmp_3,Atmp_4,Atmp_5) VALUES (Std_Id_p, Atmp_1_p,Atmp_2_p,Atmp_3_p,Atmp_4_p,Atmp_5_p);
        END$$
DELIMITER ;


//----------------------Insert Geography quiz marks-------------------------------------------------------------------------------
DELIMITER $$
      CREATE PROCEDURE insert_geoscore(IN Std_Id_p INT,IN Atmp_1_p DOUBLE,IN Atmp_2_p DOUBLE,IN Atmp_3_p DOUBLE,IN Atmp_4_p DOUBLE,IN Atmp_5_p DOUBLE)
        BEGIN
        INSERT INTO GeographyScore (Std_Id,Atmp_1,Atmp_2,Atmp_3,Atmp_4,Atmp_5) VALUES (Std_Id_p, Atmp_1_p,Atmp_2_p,Atmp_3_p,Atmp_4_p,Atmp_5_p);
        END$$
DELIMITER ;



//---------------------Retrieve 5 Questions , answers and the correct answers---------------------------------------------------

DELIMITER $$
      CREATE PROCEDURE get_ques(IN Question_Id_1 INT,IN Question_Id_2 INT,IN Question_Id_3 INT,IN Question_Id_4 INT,IN Question_Id_5 INT)
        BEGIN
        SELECT Question.Question ,Question.Crct_Ans_Id,Answer.Ans_ID, Answer.Answer FROM Question,Answer WHERE Question_Id_1 = Question.Ques_ID AND Question_Id_1= Answer.Ques_ID;
	      SELECT Question.Question ,Question.Crct_Ans_Id,Answer.Ans_ID, Answer.Answer FROM Question,Answer WHERE Question_Id_2 = Question.Ques_ID AND Question_Id_2= Answer.Ques_ID;
	      SELECT Question.Question ,Question.Crct_Ans_Id,Answer.Ans_ID, Answer.Answer FROM Question,Answer WHERE Question_Id_3 = Question.Ques_ID AND Question_Id_3= Answer.Ques_ID;
	      SELECT Question.Question ,Question.Crct_Ans_Id,Answer.Ans_ID, Answer.Answer FROM Question,Answer WHERE Question_Id_4 = Question.Ques_ID AND Question_Id_4= Answer.Ques_ID;
	      SELECT Question.Question ,Question.Crct_Ans_Id,Answer.Ans_ID, Answer.Answer FROM Question,Answer WHERE Question_Id_5 = Question.Ques_ID AND Question_Id_5= Answer.Ques_ID;
        END$$
DELIMITER ;

//------------------------------Insert Question into Question table--------------------------------------------
DELIMITER //
CREATE PROCEDURE submitQuiz(
  IN correctAnsID INT,
  IN question VARCHAR(500),
  IN subID INT,
  IN teacherID INT,
  IN difficulty VARCHAR(10),
  IN ans1 VARCHAR(45),
  IN ans2 VARCHAR(45),
  IN ans3 VARCHAR(45),
  IN ans4 VARCHAR(45))

  BEGIN
    DECLARE x  INT;
    DECLARE str  VARCHAR(10);
    DECLARE y INT;

    SET x=1;
    DROP TABLE IF EXISTS ans_table;
    CREATE TEMPORARY TABLE ans_table (ans_id INT, ans VARCHAR(45));
    INSERT INTO ans_table (ans_id, ans) VALUES (1,ans1),(2,ans2),(3,ans3),(4,ans4);

    INSERT INTO Question(Crct_Ans_Id, Question, Sub_ID, Tch_ID, Difficulty)
    VALUES (correctAnsID, question, subID, teacherID, difficulty);

    SET y=LAST_INSERT_ID();

    WHILE x<=4 DO
      INSERT INTO Answer(Ans_ID,Answer,Ques_ID)
      VALUES (x,(SELECT ans FROM ans_table WHERE ans_id = x),y);
      SET  x = x + 1;
    END WHILE;

  END //

DELIMITER ;
