import React from 'react';
import {Link} from "@reach/router";


function Posts(props) {

 const {data} = props;

console.log("data", data)


  return ( 
  <>

    <div className="questionlist">
    
    <ol className='list'> 
  <h3> Posted Questions </h3> 
      {data.slice(0,15).map(post => 
    <div className="questionposts">

<p key={post._id}> Title: <Link to={`/post/${post._id}`}> 
        {post.postTitle}</Link>   <br/>
     

     <p>Topic:  {post.postTopic} </p>   <br/>
     
      <p>Author: {post.postAuth}</p>   <br/>
   
    <p> Date Posted:  {post.postDate}</p>  

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