import React from 'react';
import AddAnswer from './answer';
import {useState} from 'react';
import AddVotes from './votes';
import CreateQuestion from './createquestion';
import {Link} from "@reach/router";



const API_URL = process.env.REACT_APP_API;

function Question(props) {
    
  
  const {id, getQuestion} = props;
    // const question = getQuestion(id);
    const [question, setQuestion] = useState(getQuestion(id));

    const updateQuestion = () => {
      setQuestion(getQuestion(id))
    }

   
  // // Conditional rendering
  if (question === undefined) {
    return <>  <p>You should see a question here</p>
    <div>
      <img src="/images/tech.jpg" alt="Technical Difficulties"/>
    </div>
   

  <br/><Link to ='/'> Back to Questions </Link> </>;
    } else {



      return (
      
      <div className="question">
           
           
        <h3>Question: </h3> 


     

<ol>
  
<p> {question.questionTitle}</p> 

</ol>
 
       
        
  
          {/* <p>{getQuestion.questionDescription}</p>
    
         <p>Date Posted: {getQuestion.questionDate} </p>
    
         <p>Author: {getQuestion.questionPoster} </p> */}
    
    <h3>Answers:</h3>
    {/* <ol>
    
      {question.answer.map((answer)=> (
        <li key= {question._id}> {answer.answerDescription} <br/> <AddVotes answers ={answer} question ={question} />: {answer.vote}</li>
      ))}  
    </ol> */}
    <AddAnswer question={question} updateQuestion ={updateQuestion}/>

    <br/><Link to ='/'> Back to Questions </Link> 
       </div>

     );

      }
    
    }
 
  export default Question;