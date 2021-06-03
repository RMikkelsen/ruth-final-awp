import {useEffect, useState} from "react";
import {Link, Router} from "@reach/router";
import Post from './Post';
import Posts from './Posts';
import AddPost from './AddPost';
import './style.css';
import AddComment from './AddComment';
import AuthService from "./AuthService";
import Login from "./Login";



const API_URL = process.env.REACT_APP_API;

const authService = new AuthService(`${API_URL}/users/authenticate`);

function App() {
  const [data, setData] = useState([]);
  const [postCount, setPostCount] = useState(0);
 
  
  useEffect(() => {
     async function getData() {
     const url = `${API_URL}/posts`;
       // We now use `authService.fetch()` instead of `fetch()`
      const response = await authService.fetch(url);
       
     const data = await response.json();
 
      setData(data);
        
      };
     
    getData();
      
  }, [postCount]); 

 // Login using API
 async function login(username, password) {
  try {
    const resp = await authService.login(username, password);
    console.log("Authentication:", resp.msg);
    setPostCount(p => p + 1);
  } catch (e) {
    console.log("Login", e);
  }
}

/*
useEffect(() => {
  if (!authService.loggedIn()) {
    login("krdo", "123").then(() => {
      setPostCount(p => p + 1); // Refresh data after login
    })
  }
}, []); // Only try login at first page render
*/

let contents = <p>No Posts</p>;
if (data.length > 0) {
  contents =< ol>{data.map(post => <li key={post._id}>{post.name}</li>)}</ol>;
}

let loginPart = <Login login={login}></Login>;
if (authService.loggedIn()) {
  loginPart = "You are Currently Logged In";

}





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

     
    setPostCount(postCount + 1);
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
       
      console.log(reply);
     
     
      setPostCount(postCount + 1);
  };

postData();

}



return (
<>
<div className="header">
<h1> Cool Sports </h1>
<h3>Scuba Diving, Skateboarding, and more!</h3>
<div className ="navigation">
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
{/*{contents} */}
{loginPart}
</>
  
);

}
export default App;
