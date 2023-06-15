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
      </div>
      <form id="questionForm" className="question-form" onSubmit={onSubmit}>
        <div className="inputDiv">
          <label htmlFor="question_title">Title:</label>
          <input type="text" id="question_title" name="question_title" required placeholder="Type here your question's title..." />
        </div>
        <div className="inputDiv">
          <label htmlFor="question_detail">Description:</label>
          <input type="text" id="question_detail" name="question_detail" required placeholder="Type here your question's description..."/>
        </div>
        <div className="inputDiv-button">
          <input type="submit" id="submitQuestion" />
        </div>
      </form>
    </>
  );
};

export default QuestionForm;
