import "./AnswerForm.css";
import React, { useState } from "react";

const AnswerForm = ({ onSave }) => {

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const answer = Object.fromEntries(formData.entries());

    onSave(answer);

    e.target.reset();
  };

  return (
    <>
      <div className="contact-header">
        <h3>Type your answer</h3>
      </div>
      <form id="questionForm" className="question-form" onSubmit={onSubmit}>
        <div className="inputDiv">
          <label htmlFor="answer_detail">Answer description:</label>
          <input type="text" id="answer_detail" name="answer_detail" required />
        </div>
        <div className="inputDiv-button">
          <input type="submit" id="submitQuestion" />
        </div>
      </form>
    </>
  );
};

export default AnswerForm;
