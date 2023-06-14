import { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import Loading from "../../Components/Loading";
import QuestionItem from "../../Components/QuestionItem";
import QuestionForm from "../../Components/QuestionForm";

import "./Questions.css";

const Questions = () => {
  const [questionList, setQuestionList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [showNewQuestionForm, setShowNewQuestionForm] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/questions/all")
      .then((res) => res.json())
      .then((result) => {
        setQuestionList(result);
        setOriginalList(result);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!sortColumn) {
      return;
    }

    if (sortColumn === "title") {
      setLoading(true);

      fetch(`/questions/sort/title?sort=${sortOrder}`)
        .then((res) => res.json())
        .then((result) => {
          setQuestionList(result);
          setLoading(false);
        });

    } else if (sortColumn === "date") {
      setLoading(true);

      fetch(`/questions/sort/date?sort=${sortOrder}`)
        .then((res) => res.json())
        .then((result) => {
          setQuestionList(result);
          setLoading(false);
        });

    } else if (sortColumn === "answer") {
      setLoading(true);

      fetch(`/questions/sort/answerCount?sort=${sortOrder}`)
        .then((res) => res.json())
        .then((result) => {
          setQuestionList(result);
          setLoading(false);
        });
    }
  }, [sortColumn, sortOrder]);

  if (loading) {
    return <Loading />;
  }

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const getArrowIcon = (column) => {
    if (sortColumn === column) {
      if (sortOrder === "asc") {
        return "▲";
      } else {
        return "▼";
      }
    } else {
      return "◎";
    }
  };

  const postNewQuestion = (question) => {
    console.log(question);

    setShowNewQuestionForm(false);

    fetch("/questions/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question),
    })
    .then((res) => res.json())
    .then((question) => {
      setOriginalList([...originalList, question]);
      setQuestionList([...questionList, question]);
    })
  };

  return (
    <>
      <div className="question-container">
        <div className="question-list">
          <div className="question-header">
            <div
              className="questionlist-header-item"
              onClick={() => handleSort("title")}
            >
              <h3>Title {getArrowIcon("title")}</h3>
            </div>
            <div
              className="questionlist-header-item"
              onClick={() => handleSort("date")}
            >
              <h3>Date {getArrowIcon("date")}</h3>
            </div>
            <div
              className="questionlist-header-item"
              onClick={() => handleSort("answer")}
            >
              <h3>Answers count {getArrowIcon("answer")}</h3>
            </div>
          </div>
          <div className="questionlist-add-new">
              <button onClick={() => setShowNewQuestionForm(!showNewQuestionForm)}>Add new question</button>
              {showNewQuestionForm && 
                <QuestionForm onSave={postNewQuestion}/>
              }
          </div>
          {questionList.map((question) => (
            <QuestionItem question={question} key={question.question_id} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Questions;
