import { onValue, ref } from 'firebase/database';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthProvider'
import { auth, db } from './firebase/firebase-config';
import { signOut } from "firebase/auth";


export default function Home() {
  const { currentUser} = useContext(AuthContext);
  const [userName, setUserName] = useState("");

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


  return (
    <div>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <p className="navbar-brand">Dev@Deakin</p>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="d-flex">
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
