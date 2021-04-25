import { useState } from 'react';
import React from 'react';
import Question from './question';
import Questions from './questions';

const API_URL = process.env.REACT_APP_API;

function AddAnswer(props) {
  const {addAnswer} = props;
  const {updateQuestion} = props;
  const{question} = props;
 
  
  const [answerDescription, setaDesc] = useState("");
  const [answerDate, setaDate] = useState("");
  const [answerPoster, setaPoster] = useState("");



  return (
    <>
    <br/>
      <h4>Add Your Answer</h4>

      <p>Description</p>
      <input onChange={(event) => setaDesc(event.target.value)} type="text" />
      <p>Date</p>
      <input onChange={(event) => setaDate(event.target.value)} type= "date" />
      <p>Submitted by</p>
      <input onChange={(event) => setaPoster(event.target.value)} type="text" />
     
<br></br>
     {/* <button type="button" onClick={addAnswer} >Add Answer</button>   */}
  
     <button type="button" onClick={(event) => { 
        addAnswer(answerDescription, answerDate, answerPoster);
        }}> Add Answer </button>  
  
    </>
    
  );

}

export default AddAnswer;