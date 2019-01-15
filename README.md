# FoxLearn-BackEnd
Backbone API for FoxLearn


# Stored Procedures
### Retrieve All Question IDs for a selected Subject

- get_qID(subject id)

### Retrieve 5 Question + Answers + Correct Answer

- get_ques(q_id1, q_id2, q_id3, q_id4, q_id5)

### Submit a Question

- submitQuiz(correct_ans_id, "question", sub_id, teacher_id, "difficulty level", "ans1", "ans2", "ans3", "ans4")
