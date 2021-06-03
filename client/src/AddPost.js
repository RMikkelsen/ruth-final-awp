import { useState } from 'react';
import React from 'react';
import './style.css';
import {useNavigate} from "@reach/router";

function AddPost(props) {
  const { addPost } = props;

  const navigate = useNavigate();

  const [postTitle, setTitle] = useState("");
  const [postTopic, setTop] = useState("");
  const [postAuth, setAuth] = useState("");

  return (
    
    <>
<div className = "addpost">
      <h3>Create a New Post</h3>

      <input onChange={(event) => setTitle(event.target.value)} type="text" placeholder="Enter Title" />
     <br/> <br/>
      <input onChange={(event) => setTop(event.target.value)} type="text" placeholder="Enter Topic" />
      <br/> <br/>
      <input onChange={(event) => setAuth(event.target.value)} type="text" placeholder="Enter Author of Post"/><br/>
     
<br></br>
      <button type="button" onClick={(event) => { 
       
       addPost(postTitle, postTopic, postAuth);
      navigate("/");}
         } > 
         Add Question </button>
         </div>
    </>

  );
  
}

export default AddPost;