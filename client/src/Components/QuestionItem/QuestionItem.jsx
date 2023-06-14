import "./QuestionItem.css";

const QuestionItem = ({ question }) => {

  return (
    <>
      <div className="question-row">
        <div className="question-row-element">
          <p>{question.question_title}</p>
        </div>
      </div>
    </>
  );
};

export default QuestionItem;