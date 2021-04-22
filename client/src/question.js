import React from 'react';
import AddAnswer from './answer';




function Question(props) {
    const {id, getQuestion } = props;
    const question = getQuestion(id);


      return (
      
      <div className="question">
        <h3>Question: </h3> 
        <p> {question.questionTitle}</p> 
  
         <p>{question.questionDescription}</p>
    
         <p>Date Posted: {question.questionDate} </p>
    
         <p>Author: {question.questionPoster} </p>
    
    <h3>Answers:</h3>
    <ol>
      {question.answer.map((answer)=> (
        <li key={question.id}>{answer.answerDescription}</li>
      ))}
    </ol>
    <AddAnswer question={question}/>
       </div>

     );

      }
  
 
 
  export default Question;