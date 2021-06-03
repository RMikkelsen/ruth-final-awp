import { useState } from 'react';
import React from 'react';


function AddComment(props) {
  const {addComment, post} = props;

  const [commentText, setText] = useState("");
  const [commentAuth, setAuth] = useState("");

  return (
    <>
    <br/>
      <h4>Add Your Comment</h4>

      <input onChange={(event) => setText(event.target.value)} type="text" placeholder="Enter Comment" />
    <br/> <br/>
      <input onChange={(event) => setAuth(event.target.value)} type="text" placeholder="Enter Comment Author"/>
       
<br></br>
  
  <br/>
     <button type="button" onClick={(event) => {
       addComment(commentText, commentAuth, post);
     
     }}> Add Comment </button>  
  
    </>
    
  );

}

export default AddComment;