import { useState } from 'react';
import React from 'react';
import Post from './Post';
import Posts from './Posts';
import {Link} from "@reach/router";

const API_URL = process.env.REACT_APP_API;

function AddComment(props) {
  const {addComment} = props;
 
  
  const [commentText, setText] = useState("");
  const [commentAuth, setAuth] = useState("");
  const [commentDate, setDate] = useState("");
  


  return (
    <>
    <br/>
      <h4>Add Your Comment</h4>

      <p>Description</p>
      <input onChange={(event) => setText(event.target.value)} type="text" />
      <p>Submitted by</p>
      <input onChange={(event) => setAuth(event.target.value)} type="text" />
      <p>Date</p>
      <input onChange={(event) => setDate(event.target.value)} type= "date" />
     
     
<br></br>
     {/* <button type="button" onClick={addAnswer} >Add Answer</button>   */}
  
     <button type="button" onClick={(event) => {
       addComment(commentText, commentAuth, commentDate);
     
      //  setaDesc();
      //  setaDate();
      //  setaPoster();
     }}> Add Comment </button>  
  
    </>
    
  );

}

export default AddComment;