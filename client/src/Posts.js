import React from 'react';
import AddPost from "./AddPost";
import {Link} from "@reach/router";





function Posts(props) {

 const {data, addPost} = props;

console.log("data", data)


  return ( 
  <>

    <div className="questionlist">
    
    <ol className='list'> 
  <h3> Posted Questions </h3> 
      {data.slice(0,15).map(post => 
    <div className="questionposts">

<p key={post._id}>
         <Link to={`/post/${post._id}`}> 
        {post.postTitle}</Link>  
       <br/><br/>

        {post.postTopic} 
        <br/> 
        {post.postAuth} <br/>
        {post.postDate}
        <br/> 
      

        </p> 

        </div>

      )
      
    } 
    </ol>
    <div>
    <Link to ='/addpost'> Create a Post </Link> 
    </div>
   
    </div>
    </>
  );
}



export default Posts;