import React from 'react';

import {useState} from 'react';
import AddVotes from './votes';
import CreateQuestion from './createquestion';
import {Link} from "@reach/router";
import AddAnswer from './answer';



const API_URL = process.env.REACT_APP_API;

function Question(props) {
 
 
  const {_id, getQuestion, addAnswer} = props;
 
 const question = getQuestion(_id);

const {setQuestion} = useState;

 const updateQuestion = () => {setQuestion(getQuestion(_id))}

   
   // Conditional rendering
  if (question === undefined) {
   return <>  <p>You should see a question here</p>
     <div>
     <img src="/images/tech.jpg" alt="Technical Difficulties"/>
     </div>
   

  // <br/><Link to ='/'> Back to Questions </Link> </>;
      } else {

      return (
      
      <div className="question">
           
           <>
        
        <h3>Question: </h3> 

<ol>
<p>
 {question.questionTitle}</p> 

</ol>
       </>

        <p>{question.questionDescription}</p>
    
         <p>Date Posted: {question.questionDate} </p>
    
         <p>Author: {question.questionPoster} </p> 
    
    <h4>Answered by the community:</h4>
    <ol>
    
      {question.answer.map((answer)=> (
        <li key={question._id}> {answer.answerDescription} <br/> {answer.answerDate} <br/> {answer.answerPoster}<br/> </li>
      ))}  
    </ol> 

     <AddAnswer question={question} addAnswer ={addAnswer}/> 
 {/* <AddAnswer question={question} />   */}
    <br/><br/><Link to ='/'> Back to Questions </Link> 
       </div>
      //  <AddVotes answers ={answer} question ={question} />: {answer.vote}
     );

  }
}
    
 
  export default Question;