import { useState } from 'react';
import React from 'react';
const API_URL = process.env.REACT_APP_API;

function AddAnswer(props) {
  const { question } = props;

  
  const [answerDescription, setaDesc] = useState("");
  const [answerDate, setaDate] = useState("");
  const [answerPoster, setaPoster] = useState("");
  const [vote, setVote] = useState("");


  return (
    <>
      <h3>Add Your Answer</h3>

      <p>Description</p>
      <input onChange={(event) => setaDesc(event.target.value)} type="text" />
      <p>Date</p>
      <input onChange={(event) => setaDate(event.target.value)} type= "date" />
      <p>Submitted by</p>
      <input onChange={(event) => setaPoster(event.target.value)} type="text" />
      <p>vote</p>
      <input onChange={(event) => setVote(event.target.value)} type="text" />
<br></br>
      {/* <button type="button" onClick={putData} >Add Answer</button> */}
      <button type="button" onClick={(event) => { 
        AddAnswer(answerDescription, answerDate, answerPoster, vote);}}> Add Answer </button>
    </>
  );
}

export default AddAnswer;