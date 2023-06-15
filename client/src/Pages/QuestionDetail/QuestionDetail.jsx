import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnswerForm from "../../Components/AnswerForm";
import AnswerItem from "../../Components/AnswerItem";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";

import "./QuestionDetail.css";

const QuestionDetail = () => {
  const { questionid } = useParams();

  const [loading, setLoading] = useState(true);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showAnswerForm, setShowAnswerForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/questions/${questionid}`)
      .then((res) => res.json())
      .then((result) => {
        setQuestion(result);
        setLoading(false);
      });
    
    fetch(`/answers/all/${questionid}`)
      .then((res) => res.json())
      .then((result) => {
        setLoading(true);
        setAnswers(result);
        setLoading(false);
      });
  }, [questionid]);

  if (loading) {
    return <Loading />;
  }

  const postNewAnswer = (answer) => {
    setShowAnswerForm(false);

    answer = {...answer, question_id : questionid, user_id: 1}

    fetch("/answers/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
    })
      .then((res) => res.json())
      .then((answer) => {
        setAnswers([...answers, answer]);
      });
  };

  return (
    <>
      <div className="question-description-container">
        <div className="question-description">
          <div className="question-description-title">
            <p>{question && question.question_title}</p>
          </div>
          <div className="question-description-detail">
            <p>{question && question.question_detail}</p>
          </div>
          <div className="question-description-user">
            <p>Asked by: User {question && question.user_id}</p>
          </div>
          <div className="question-description-add-new">
            <button
              className="question-description-add-new-button"
              onClick={() => setShowAnswerForm(!showAnswerForm)}
            >
              New Answer
            </button>
            {showAnswerForm && <AnswerForm onSave={postNewAnswer} />}
          </div>
          <div className="question-description-answerlist">
            {answers.map((answer) => (
              <AnswerItem answer={answer} key={answer.answer_id} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QuestionDetail;
