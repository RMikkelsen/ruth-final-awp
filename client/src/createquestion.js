
import { useState } from 'react';
import React from 'react';
const API_URL = process.env.REACT_APP_API;

function CreateQuestion(props) {
  const {createQuestion} = props;

  const [questionTitle, setTitle] = useState("");
  const [questionDescription, setDesc] = useState("");
  const [questionDate, setDate] = useState("");
  const [questionPoster, setPoster] = useState("");
  // Conditional rendering



  async function postData(){
    const url = `${API_URL}/questions`;
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(questionTitle, questionDescription, questionPoster, questionDate),
        });
        console.log(response);
        const data= await response.json();
       
      }

  return (
    <>
      <h3>Add Your Question</h3>
<p>Title</p>
      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <p>Description</p>
      <input onChange={(event) => setDesc(event.target.value)} type="text" />
      <p>Date</p>
      <input onChange={(event) => setDate(event.target.value)} type= "date" />
      <p>Suthor</p>
      <input onChange={(event) => setPoster(event.target.value)} type="text" />
<br></br>
      <button onClick={(postData) => {
        createQuestion(questionTitle, questionDescription, questionDate, questionPoster);
      }}>Add Question

      </button>
    </>
  );
}

export default CreateQuestion;