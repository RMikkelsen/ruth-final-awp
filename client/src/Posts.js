import {React, useState} from 'react';
import {Link} from "@reach/router";




function Posts(props) {

 const {data} = props;

const filter = props.filter;

console.log ("filter", filter)
console.log("data", data)


if (data === undefined){
  return <p>There should be posts here</p>;
} else if (filter === undefined){
  return(

    <>
    <h3> All Posts:</h3>
  
  {data.slice(0,15).map(post => 
    <div className="questionposts">
<ul>
<li key={post._id}> Title: <Link to={`/post/${post._id}`}> 
        {post.postTitle}  </Link>    <br/>
     

   <p> Topic:  {post.postTopic}  </p>  <br/>
     
   <p> Author: {post.postAuth}  </p>  <br/>
   
   <p> Date Posted:  {post.postDate}</p> 
   </li> 
        
        </ul>
        </div>
      )} 
    </>
  )
}
  return ( 
  <>

    <div className="questionlist">
    
    <ol className='list'> 
  <h3> Posted Questions </h3> 
  <h4> Filter By:</h4>

    {data.slice(0,15).filter(post => post.postTopic.includes(filter))
 .map(post => 
    <div className="questionposts">

<li key={post._id}> Title: <Link to={`/post/${post._id}`}> 
        {post.postTitle}</Link> </li>  <br/>
     

     <p>Topic:  {post.postTopic} </p>   <br/>
     
      <p>Author: {post.postAuth}</p>   <br/>
   
    <p> Date Posted:  {post.postDate}</p>  

        

        </div>
      )} 
    </ol>
   
    </div>
    </>
  );
}


export default Posts;