import React from 'react';

import {useState} from 'react';
import AddVotes from './votes';
import AddPost from './AddPost';
import AddComment from './AddComment'
import {Link} from "@reach/router";


const API_URL = process.env.REACT_APP_API;

function Post(props) {
 
 
  const {_id, getPost, addComment} = props;
 
 const post = getPost(_id);

const {setPost} = useState;

 const updatePost = () => {setPost(getPost(_id))}

   
   // Conditional rendering
  if (post === undefined) {
   return <>  <p>You should see a question here</p>
     <div>
     <img src="/images/tech.jpg" alt="Technical Difficulties"/>
     </div>
   

   <br/><Link to ='/'> Back to Posts </Link> </>;
      } else {

      return (
      
      <div className="question">
           
           <>
        
        <h3>Post: </h3> 

<ol>
<p>
 {post.postTitle}</p> 

</ol>
       </>

        <p>{post.postTopic}</p>
        <p>Author: {post.postAuth} </p> 
    
         <p>Date Posted: {post.postDate} </p>
    
       
    
    <h4>Answered by the community:</h4>
    <ol>
    
      {post.comment.map((comment)=> (
        <li key={post._id}> {comment.commentTopic} <br/> {comment.commentDate} <br/> {comment.commentAuth}<br/> </li>
      ))}  
    </ol> 

     <AddComment post={post} addComment ={addComment}/> 
    <br/><br/><Link to ='/'> Back to Questions </Link> 
       </div>
      //  <AddVotes answers ={answer} question ={question} />: {answer.vote}

      
     );

  }
}
    
 
  export default Post;