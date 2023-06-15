import "./AnswerItem.css";

const AnswerItem = ({ answer }) => {

  return (
    <>
      <div className="answer-box ">
        <div className="answer-row">
          <p className="answer-row-detail">{answer.answer_detail}</p>
        </div>
        <div className="answer-row">
          <div className="answer-row-element">
            <p>User {answer.user_id}</p>
          </div>
          <div className="answer-row-element">
            <p>
              {answer.date.split("T")[0] +
                " " +
                answer.date.split("T")[1].split(".")[0]}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnswerItem;
