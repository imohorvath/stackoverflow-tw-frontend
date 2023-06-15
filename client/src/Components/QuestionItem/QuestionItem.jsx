import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading";
import "./QuestionItem.css";

const QuestionItem = ({ question }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  /*useEffect(() => {
    setLoading(true);

    fetch(`/users/${question.user_id}`)
    .then((res) => res.json())
    .then((result) => {
      setUser(result);
      console.log(result);
      setLoading(false);
    });
  }, []);*/


  if (loading) {
    return <Loading />;
  }

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
