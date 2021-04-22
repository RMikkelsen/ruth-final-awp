import { useState } from 'react';
import React from 'react';
import './style.css';
const API_URL = process.env.REACT_APP_API;

function CreateQuestion(props) {
  const { createQuestion } = props;

  const [questionTitle, setTitle] = useState("");
  const [questionDescription, setDesc] = useState("");
  const [questionDate, setDate] = useState("");
  const [questionPoster, setPoster] = useState("");


  return (
    <>
      <h3>Ask A Question</h3>
<p>Title</p>
      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <p>Description</p>
      <input onChange={(event) => setDesc(event.target.value)} type="text" />
      <p>Date</p>
      <input onChange={(event) => setDate(event.target.value)} type= "date" />
      <p>Author</p>
      <input onChange={(event) => setPoster(event.target.value)} type="text" />
<br></br>
      <button type="button" onClick={(event) => { 
        createQuestion(questionTitle, questionDescription, questionDate, questionPoster);}}> Add Question </button>
    </>
  );
}

export default CreateQuestion;