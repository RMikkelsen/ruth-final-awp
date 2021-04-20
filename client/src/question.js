import React from 'react';
import AddAnswer from './answer'



function Question(props) {
    const {id, getQuestion } = props;
    const question = getQuestion(id);


      return (
       <>
        <h3>Question: {question.questionTitle}</h3> 
  
         <p>{question.questionDescription}</p>
    
         <p>Date Posted: {question.questionDate} </p>
    
         <p>Author: {question.questionPoster} </p>
    
    <h3>Answers:</h3>
    <ol>
      {question.answers.map((answer)=> (
        <li key={question.id}>{answer.answerDescription}</li>
      ))}
    </ol>
    <AddAnswer question={question}/>
       </>

     );

      }
  
 
 
  export default Question;