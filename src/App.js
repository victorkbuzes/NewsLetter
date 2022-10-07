import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import { AuthProvider } from "./context/AuthProvider";


function App() {
  return (
    <AuthProvider>
      <div className="App container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


     
    </div>



    </AuthProvider>

 
  
  );
}

export default App;
