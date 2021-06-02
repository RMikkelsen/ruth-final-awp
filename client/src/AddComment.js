import { useState } from 'react';
import React from 'react';


const API_URL = process.env.REACT_APP_API;

function AddComment(props) {
  const {addComment, post} = props;
 

  const [commentText, setText] = useState("");
  const [commentAuth, setAuth] = useState("");
  const [commentDate, setDate] = useState("");
  

  return (
    <>
    <br/>
      <h4>Add Your Comment</h4>

     
      <input onChange={(event) => setText(event.target.value)} type="text" placeholder="Enter Comment" />
    <br/> <br/>
      <input onChange={(event) => setAuth(event.target.value)} type="text" placeholder="Enter Comment Author"/>
      
     
     
<br></br>
     {/* <button type="button" onClick={addAnswer} >Add Answer</button>   */}
  <br/>
     <button type="button" onClick={(event) => {
       addComment(commentText, commentAuth, post);
     
         // setText();
        //  setAuth();
         // setaDate();
     }}> Add Comment </button>  
  
    </>
    
  );

}

export default AddComment;