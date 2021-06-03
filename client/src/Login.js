import { useState } from "react";

function Login(props) {
  const {login} = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    console.log(username, password);
    login(username, password);
  }

  return (
    <>
    <div className="login">
      <h3>Login</h3>

      <input onChange={(event) => setUsername(event.target.value)} 
        type="text" name="username" placeholder="username"></input> <br/><br/>
      <input onChange={(event) => setPassword(event.target.value)} 
        type="password" name="password" placeholder="password"></input><br/><br/>
      
      <button
        type="button"
        onClick={() => onSubmit()}>Login!
      </button>
      </div>
    </>
  );
}

export default Login;