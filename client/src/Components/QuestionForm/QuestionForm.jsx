import "./QuestionForm.css";
import React, { useState } from "react";

const QuestionForm = ({ onSave }) => {

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const question = Object.fromEntries(formData.entries());
    console.log(question);

    onSave(question);

    e.target.reset();
  };

  return (
    <>
      <div className="contact-header">
        <h2>Type your question</h2>
      </div>
      <form id="questionForm" className="question-form" onSubmit={onSubmit}>
        <div className="inputDiv">
          <label htmlFor="question_title">Question title:</label>
          <input type="text" id="question_title" name="question_title" required />
        </div>
        <div className="inputDiv">
          <label htmlFor="question_detail">Question description:</label>
          <input type="text" id="question_detail" name="question_detail" required />
        </div>
        <div className="inputDiv-button">
          <input type="submit" id="submitQuestion" />
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
