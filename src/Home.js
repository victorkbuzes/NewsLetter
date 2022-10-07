import { onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider'
import { auth, db } from './firebase/firebase-config';
import { signOut } from "firebase/auth";



export default function Home() {
  const { currentUser} = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [ email, setEmail] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      const starCountRef = ref(db, "users/" + currentUser.uid);
      onValue(starCountRef, (snapshot) => {
        if (snapshot.exists()) {
          var data = snapshot.val();
          setUserName(data.firstName + " " + data.lastName);

          
        }
      });
      
    }
  }, [currentUser]);
  
  const clickLogin = () => {
    if (currentUser) {
      signOut(auth);
      
    }else {
      navigate("/login");
    }
  };
  const clickSignUp = () => {
    navigate("/signup");
  };
  const clickSubscribe = () => {
    console.log(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  
//   const nodemailer = require("nodemailer");
//  let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     pass: process.env.WORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
//  });

//  transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
//  });

//  let mailOptions = {
//   from: email,
//   to: process.env.EMAIL,
//   subject: "Nodemailer API",
//   text: "Hi from your nodemailer API",
//  };
//  transporter.sendMail(mailOptions, function (err, data) {
//   if (err) {
//     console.log("Error " + err);
//   } else {
//     console.log("Email sent successfully");
//   }
//  });
 
 



  


  return (
    <div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className='text-uppercase'>Deakin</p>
        <p className="navbar-brand text-success text-uppercase ">Signup For Your Daily Insider</p>

        <form className="d-flex" onSubmit={handleSubmit} >
     
            {
            !currentUser && (
              <input
              className="form-control me-2"
              type="search"
        
              placeholder="Search"
              aria-label="Search"
            />

            )}
          {
            currentUser && (
              <input
              className="form-control me-2"
              type="email"
              value={email}
              onChange= {(e) => setEmail(e.target.value)}
              placeholder ="Enter your email address"
              aria-label="Search"
              
            />

            )}
          <div className="d-flex">
          {currentUser && (
            <button className="btn btn-success btn-change mx-2"  onClick={clickSubscribe}
            >
                Subscribe
            </button>

          )}
            <button
              className="btn btn-primary btn-change"
              onClick={clickLogin}
            >
              {currentUser ? "Logout" : "Login"}
            </button>

            {!currentUser && (
              <button
                className="btn btn-primary btn-change mx-2"
                onClick={clickSignUp}
              >
                Signup
              </button>
            )}

          
          </div>
        </form>
      </div>
    </nav>
    
    <div>
      {currentUser && <h1> Welcome {userName}</h1>}
    </div>

  
 



  </div>
  
  )
}
