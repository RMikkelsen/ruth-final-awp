import React from 'react';
import CreateQuestion from "./createquestion";
import {Link} from "@reach/router";

function Questions(props) {
  const {data} = props;



  return ( 
  <>
  
    <div className="questionlist">
    
    <ol className='list'> 
    <h3> Posted Questions </h3> 
      {data.map((question) => (
    <div class="questionposts">

        <Link to={`/question/${question._id}`}> 
        {question.questionTitle}</Link> 
        <p key={question._id}> {question.questionDescription} 
        <br/> {question.questionDate}
        <br/> {question.questionPoster} 
  

        </p> 
        
        </div>

      ))
    } 
    </ol>
<div className="createquestion">
    <CreateQuestion/>
    </div>
    </div>
    </>
  );
}



export default Questions;