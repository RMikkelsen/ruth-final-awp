import { useState } from 'react';
import React from 'react';
const API_URL = process.env.REACT_APP_API;

function AddAnswer(props) {
  const { question } = props;

  
  const [answerDescription, setaDesc] = useState("");
  const [answerDate, setaDate] = useState("");
  const [answerPoster, setaPoster] = useState("");
  const [vote, setVote] = useState("");



async function putData(){
    const answer = {answerDescription, answerDate, answerPoster, vote};
    let questionAnswer = question;
    questionAnswer.answers = [answer]
    const url = `${API_URL}/questions`;
        const response = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(questionAnswer),
        });
        console.log(response);
        const data= await response.json();
       

}


  // Conditional rendering
  return (
    <>
      <h3>Add Your Answer</h3>

      <p>Description</p>
      <input onChange={(event) => setaDesc(event.target.value)} type="text" />
      <p>Preparation Time</p>
      <input onChange={(event) => setaDate(event.target.value)} type= "date" />
      <p>Submitted by</p>
      <input onChange={(event) => setaPoster(event.target.value)} type="text" />
      <p>vote</p>
      <input onChange={(event) => setVote(event.target.value)} type="text" />
<br></br>
      <button type="button" onClick={putData} >Add Answer</button>
    </>
  );
}

export default AddAnswer;