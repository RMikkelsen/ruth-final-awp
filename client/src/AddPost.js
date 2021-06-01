import { useState } from 'react';
import React from 'react';
import './style.css';
import {Link} from "@reach/router";

const API_URL = process.env.REACT_APP_API;

function AddPost(props) {
  const { addPost } = props;

  const [postTitle, setTitle] = useState("");
  const [postTopic, setTop] = useState("");
  const [postAuth, setAuth] = useState("");
  const [postDate, setDate] = useState("");
 
 

  <div className="createquestion">
  <AddPost addPost = {addPost}/>
  </div>

  return (
    
    <>
   


      <h3>Create a New Post</h3>
<p>Title</p>
      <input onChange={(event) => setTitle(event.target.value)} type="text" />
      <p>Topic</p>
      <input onChange={(event) => setTop(event.target.value)} type="text" />
      <p>Author</p>
      <input onChange={(event) => setAuth(event.target.value)} type="text" />
      <p>Date</p>
      <input onChange={(event) => setDate(event.target.value)} type= "date" />
<br></br>
      <button type="button" onClick={(event) => { 
        addPost(postTitle, postTopic, postAuth, postDate);}}> Add Question </button>
         <div>

        
<Link to ='/'> Back to Posts Page </Link> 
</div>
    </>

    
  );
  
}

export default AddPost;