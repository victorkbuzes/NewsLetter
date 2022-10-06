import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";

// Firebase

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase/firebase-config";
import { ref, set } from "firebase/database";

const Signup = () => {
    let navigate = useNavigate();
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");


    
    
      const handleSubmit = (e) => {
        e.preventDefault();

        function onRegister() {
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {

            set(ref(db, "users/", + userCredential.user.uid), {
              firstName: firstName,
              lastName: lastName,
              email: email,
            });
            navigate("/");
        })

        .catch((error) =>
        setError(true)
      );

      }
      onRegister();

  };

        



  return (
    <div className="container signup">
      <p className="h3 mx-3">Create a DEV@Deakin Account</p>
      <form className="form" onSubmit={handleSubmit}>
       

      <Input
          htmlFor="fname"
          id="fname"
          type="name"
          label="First Name"
          placeholder="Enter first name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        
        <Input
          htmlFor="lname"
          id="lname"
          type="name"
          label="Last Name"
          placeholder="Enter last name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          htmlFor="email"
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
       
      
        <Input
          htmlFor="password"
          id="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        
        
        <Button  label="Signup" isNavbar={false} />
        {error && <span>Password must me more than 4 characters</span>}

      </form>
    </div>
  );
};

export default Signup;
