import React from 'react';
import CreateQuestion from "./createquestion";
import {Link} from "@reach/router";

function Questions(props) {
  const {data} = props;



  return ( 
  <>
    <h3> Question </h3> 
    <ol> 
      {data.map((question) => (
    <>
        <Link to={`/question/${question._id}`}> {question.questionTitle}</Link> 
        <p key={question._id}> {question.questionDescription} 
        <br/> {question.questionDate}
        <br/> {question.questionPoster} 
  

        </p> 
        
        </>

      ))
    } 
    </ol>

    <CreateQuestion/>
    </>
  );
}



export default Questions;