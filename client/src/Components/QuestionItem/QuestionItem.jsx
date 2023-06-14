import { useNavigate } from "react-router-dom";
import "./QuestionItem.css";

const QuestionItem = ({ question }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="question-box">
        <div className="question-row">
          <p className="question-row-title" onClick={() => navigate(`/question/${question.question_id}`)}>{question.question_title}</p>
        </div>
        <div className="question-row">
          <div className="question-row-element">
            <p>User {question.user_id}</p>
          </div>
          <div className="question-row-element">
            <p>
              {question.date.split("T")[0] +
                " " +
                question.date.split("T")[1].split(".")[0]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionItem;
