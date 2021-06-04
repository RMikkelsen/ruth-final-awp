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

<p key={post._id}> Title: <Link to={`/post/${post._id}`}> 
        {post.postTitle}</Link>   <br/>
     

     <p>Topic:  {post.postTopic} </p>   <br/>
     
      <p>Author: {post.postAuth}</p>   <br/>
   
    <p> Date Posted:  {post.postDate}</p>  

        </p> 

        </div>

      )
      
      
    } 
   
    </>
  )
}



  return ( 
  <>

    <div className="questionlist">
    
    <ol className='list'> 
  <h3> Posted Questions </h3> 
  <h4> Filter By:</h4>

  {/*moved to app.js so all the posts can show :-/
  <button onClick={() => {setTopic("Scuba")}} >Scuba</button>&emsp;
  <button onClick={() => {setTopic("Skate")}} > Skate</button>&emsp;
  <button onClick={() => {setTopic("Surf")}}>Surf</button>&emsp;
  <button onClick={() => {setTopic("Dance")}}>Dance</button>
 {/*<button onClick={() =>  {Posts(data)}}>All</button> 
 */}

 
    {data.slice(0,15).filter(post => post.postTopic.includes(filter))
 .map(post => 
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
  {/*} <Link to ='/addpost'> Create a Post </Link> */}
    </div>
   
    </div>
    </>
  );
}


export default Posts;