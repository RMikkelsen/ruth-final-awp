import {useEffect, useState} from "react";
import {Link, Router} from "@reach/router";
import Post from './Post';
import Posts from './Posts';
import AddPost from './AddPost';
import './style.css';
import AddComment from './AddComment';




const API_URL = process.env.REACT_APP_API;

function App() {
  const [data, setData] = useState([]);
 
 
  useEffect(() => {
     async function getData() {
     const url = `${API_URL}/posts`;
    
      const response = await fetch(url
        );
       
     const data = await response.json();
     
      setData(data);
        
      };
     
    getData();
      
  }, []); 

  function getPost(_id){
    return data.find(post => post._id === _id);
  }
  
  function addPost(postTitle, postTopic, postAuth) {
  
    const data = { 
      title: postTitle, 
     topic: postTopic,
     author: postAuth,
    
 
    };
    console.log("data", data);

    const postData = async () => {
     const url = `${API_URL}/posts`;
    
          const response = await fetch(url, 
            {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data),
          });
        
          const reply = await response.json();
         console.log(reply);
        
    };
 
postData();
      
}


function addComment(commentText, commentAuth, _id) {
  
  const data = { 
    text: commentText,
   author: commentAuth,
   id : _id
  
  }
 
  console.log("data", data);

  const postData = async () => {
   const url = `${API_URL}/posts/addcomment`;
  
        const response = await fetch(url, 
          {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        });
       
       
       const reply = await response.json();
       //setCounter(counter + 1);
      console.log(reply);
       
  };

postData();

}



return (
<>
<div className="header">
<h1> Sports Activities </h1>
<h3>Scuba Diving, Skateboarding, and more!</h3>
<div>
    <Link to ='/addpost'> Create a Post </Link> <br/>
    <Link to ='/login'>   Login </Link> <br/>
    <Link to ='/'>   All Posts </Link> 
    </div>
</div>
<Router>
<Posts path="/" data={data}  addPost ={addPost}/>
<Post path="/post/:_id" getPost={getPost} addComment={addComment}/>
<AddPost path="/addpost"  addPost={addPost}/>
<AddComment path="/post/:_id" getPost={getPost} addComment={addComment}/>

</Router>
</>
  
);

}
export default App;
