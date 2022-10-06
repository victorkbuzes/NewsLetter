import React, { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";


// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "./firebase/firebase-config";


const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    function onRegister() {
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
        console.log(user);
      })
      .catch((error) =>
        setError(true)
      );
     
    }
    onRegister();
  };
       
  
  

  return (
    <div className="container login">
      <form onSubmit={handleSubmit} className="form">
        <Input
          htmlFor="email"
          id="login-email"
          type="email"
          label="Your email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          htmlFor="password"
          id="login-password"
          type="password"
          label="Your password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button  type="submit" label="Login"  />
        {error && <span className="span">Wrong email or password!</span>}
      </form>
    </div>
  );
};

export default Login;
