import { onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider'
import { auth, db } from './firebase/firebase-config';
import { signOut } from "firebase/auth";
import { Footer } from './components/Footer';



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
  


  // let transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'victorkbuzes@gmail.com',
  //     pass: '33947267'
  //   }
  // });

  // const mailOptions = {
  //   from: 'youremail@gmail.com',
  //   to: email,
  //   subject: 'Deakin Newsletter',
  //   text: 'Welcome to our news Letter!'
  // };

  //  transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('Email sent: ' + info.response);
  //   }
  // });
  


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
