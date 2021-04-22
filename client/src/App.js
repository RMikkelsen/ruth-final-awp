import {useEffect, useState} from "react";
import { Router} from "@reach/router";
import Question from './question';
import Questions from './questions';



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

  function getQuestion(id){
    return data.find(question => question._id === parseInt(id));
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
            body: JSON.stringify({questionTitle,questionDescription, questionDate, questionPoster}),
          });
         
          const reply = await response.json();
          console.log(reply);
        };
        
postData();
        }


return (
<>
<div className="header">
<h1> StackOverflow Clone</h1>
<h3>By Ruth Moritz Mikkelsen</h3>
</div>
<Router>
<Questions path="/" exact data={Questions} createQuestion={createQuestion}/>
<Question path="/question/:id" getQuestion ={getQuestion}/>
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
