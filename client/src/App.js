import {useEffect, useState} from "react";
const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function getData() {
      const url = `${API_URL}/questions`;
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []); 

  return (
    <>
      <h1>StackOverflow Copy</h1>
      <h3>by Ruth</h3>
      <p>Data from server:</p> 

      {data.map((stack) => {
 return (
 <p key={stack._id}>
 {stack.questionTitle} <br />
 {stack.questionDescription} <br />
 {stack.questionDate}<br />
 {stack.questionPoster} 
 </p>
 );
 })}
    </>
  );
}

export default App;
