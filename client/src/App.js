import {useEffect, useState} from "react";
import { Router} from "@reach/router";
import Post from './Post';
import Posts from './Posts';



const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
 
 
  useEffect(() => {
     async function getData() {
     const url = `${API_URL}/posts`;
    
      const response = await fetch(url
        );
       
     const data = await response.json();
     
      setData(data);
        
      };
     
    getData();
      
  }, []); 

  function getPost(_id){
    return data.find(post => post._id === _id);
  }
  
  function addPost(postTitle, postTopic, postAuth, postDate) {
  
    const data = { 
      title: postTitle, 
     topic: postTopic,
     author: postAuth,
      date: postDate,
 
    };
    console.log("data", data);

    const postData = async () => {
     const url = `${API_URL}/posts`;
    
          const response = await fetch(url, 
            {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
          });
        
          const reply = await response.json();
         console.log(reply);
         
    };
 
postData();
      
}
 
function addComment(commentText, commentAuth, commentDate) {
  
  const data = { 
    text: commentText,
   author: commentAuth,
    date: commentDate,

  };


  const postData = async () => {
   const url = `${API_URL}/post/comment`;
  
        const response = await fetch(url, 
          {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
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
<h1> MERN Final Exam </h1>
<h3>By Ruth Moritz Mikkelsen</h3>
</div>
<Router>
<Posts path="/" data={data} addPost={addPost}/>
<Post path="/post/:_id" getPost={getPost} addComment={addComment}/>

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
