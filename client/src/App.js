import {useEffect, useState} from "react";
import { Router} from "@reach/router";
import Question from './question';
import Questions from './questions';



const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setQuestions] = useState([]);
  
  function getQuestion(id){
    return data.find(question => question._id === (id));
  }
  
  useEffect(() => {
     async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setQuestions(data);
    }
    getData();
  }, []); 

return (
<>
<h1> stack app</h1>
<Router>
<Questions path ="/"exact data ={data}/>
<Question path ="/question/:id" getQuestion ={getQuestion}/>
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

