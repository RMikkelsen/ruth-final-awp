import {React, useState} from 'react';
import {Link} from "@reach/router";




function Posts(props) {

 const {data} = props;
const [topic, setTopic] = useState("")


console.log("data", data)



  return ( 
  <>

    <div className="questionlist">
    
    <ol className='list'> 
  <h3> Posted Questions </h3> 
  <h4> Filter By:</h4>
  <button onClick={() => {setTopic("Scuba")}} >Scuba</button>&emsp;
  <button onClick={() => {setTopic("Skate")}} > Skate</button>&emsp;
  <button onClick={() => {setTopic("Surf")}}>Surf</button>&emsp;
  <button onClick={() => {setTopic("Dance")}}>Dance</button>
 {/*<button onClick={() =>  {Posts(data)}}>All</button> 
 

  // {data.slice(0,15) */}
{data.filter(data => data.postTopic === topic) 

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