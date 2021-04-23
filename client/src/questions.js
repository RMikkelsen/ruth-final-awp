import React from 'react';
import CreateQuestion from "./createquestion";
import {Link} from "@reach/router";




function Questions(props) {

 const {data, createQuestion} = props;
  // const data = Array.from(props.data);
console.log("data", data)
  return ( 
  <>
  
    <div className="questionlist">
    
    <ol className='list'> 
  <h3> Posted Questions </h3> 
      {data.map(question => 
    <div className="questionposts">

<p key={question.id}>
         <Link to={`/question/${question.id}`}> 
        {question.questionTitle}</Link>  
       
        {question.questionDescription} 
        <br/>
        {question.questionDate}
        <br/> 
        {question.questionPoster} 

        </p> 

        </div>

      )
      
    } 
    </ol>
<div className="createquestion">
    <CreateQuestion createQuestion = {createQuestion}/>
    </div>
    </div>
    </>
  );
}



export default Questions;