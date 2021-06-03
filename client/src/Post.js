import React from 'react';
import {useState} from 'react';
import AddVotes from './votes';
import AddComment from './AddComment'
import {Link} from "@reach/router";




function Post(props) {
 
 
  const {_id, getPost, addComment} = props;
 
 const post = getPost(_id);

const {setPost} = useState;

 const updatePost = () => {setPost(getPost(_id))}

  if (post === undefined) {
   return <>  <p>You should probably see something else</p>
   

   <br/><Link to ='/'> Back to Posts </Link> </>;
      } else {

      return (
      
      <div className="question">
           
          
        
        <h3>Post: </h3> 

        <p>Title: {post.postTitle}</p> 

        <p>Topic: {post.postTopic}</p>
        <p>Author: {post.postAuth} </p> 
    
         <p>Date Posted: {post.postDate} </p>
    
       
        
    <h4>Answered by the community:</h4>
    <ol>
    
      {post.comment.map((comment)=> (
        <li key={post._id}> 
       <p>Comment:  {comment.commentText}</p> <br/>
       <p>Author: {comment.commentAuth}</p><br/>
       <p>Date:  {comment.commentDate} </p><br/>  </li>
      ))}  
    </ol> 
 
     <AddComment updatePost={updatePost}  post ={post._id} addComment ={addComment}/> 
    <br/><br/><Link to ='/'> Back to all Posts</Link> 
       </div>
    

      
     );

  }
}
    
 
  export default Post;