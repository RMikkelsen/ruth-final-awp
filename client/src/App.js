import {useEffect, useState} from "react";
import { Router} from "@reach/router";
import Question from './question';
import Questions from './questions';
import AddAnswer from './answer.js';
import CreateQuestion from './createquestion.js';


const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
 
 
  useEffect(() => {
     async function getData() {
     const url = `${API_URL}/questions`;
      const response = await fetch(url
        );
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  function getQuestion(_id){
    return data.find(question => question._id === _id);
  }
  
  function createQuestion(questionTitle, questionDescription, questionDate, questionPoster) {
  
    const data = { 
      title: questionTitle, 
      description: questionDescription,
     date: questionDate,
      poster: questionPoster,
 
    };
    const postData = async () => {
     const url = `${API_URL}/questions`;
    
          const response = await fetch(url, 
            {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({data}),
          });
         
          const reply = await response.json();
          console.log(reply);
    };
 
postData();
      
}
 
function addAnswer(answerDescription, answerDate, answerPoster) {
  
  const data = { 
    desc: answerDescription,
   adate: answerDate,
    aposter: answerPoster,

  };


  const postData = async () => {
   const url = `${API_URL}/questions/answer`;
  
        const response = await fetch(url, 
          {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({data}),
        });
       
        const reply = await response.json();
        console.log(reply);
   
  };

postData();
    
}


// function addAnswer(answerDescription, answerDate, answerPoster) {
  
//         const data = { 
//           desc: answerDescription,
//          adate: answerDate,
//           aposter: answerPoster,
     
//         };

//         const postData = async () => {
//           const url = `${API_URL}/questions/answer`;

//   //       async function putData(){
//   // const answer = {id, answerDescription, answerDate, answerPoster};
//   // // let questionAnswer = question;
//   // // questionAnswer.answers = [answer]
//   // const url = `${API_URL}/questions/answers`;
//       const response = await fetch(url,
//         {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify({data}),
//       });
//       console.log(response);
//       const data= await response.json();
//       //  setCounter(counter + 1);
//       // console.log(response);
     
//     };
// postData();
//       }

    

return (
<>
<div className="header">
<h1> StackOverflow Clone - Using MERN </h1>
<h3>By Ruth Moritz Mikkelsen</h3>
</div>
<Router>
<Questions path="/" data={data} createQuestion={createQuestion}/>
<Question path="/question/:_id" getQuestion={getQuestion} addAnswer={addAnswer}/>

</Router>
</>
  
);
}

export default App;

//   return (
//     <>
//       <h1>StackOverflow Copy</h1>
//       <h3>by Ruth</h3>
//       <p>Data from server:</p> 

//       {question.map((stack) => {
//  return (
//  <p key={stack._id}>
//  {stack.questionTitle} <br />
//  {stack.questionDescription} <br />
//  {stack.questionDate}<br />
//  {stack.questionPoster} 
//  </p>
//  );
//  })}
//     </>
