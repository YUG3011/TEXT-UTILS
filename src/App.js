import './App.css';
import React, { useState } from 'react';
import About from './components/About.js';
import NavBar from './components/NavBar.js';
import TextForm from './components/TextForm.js';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState("");

  const ShowAlert = (message, type) => {
    setAlert({ msg: message,
       type: type });

    setTimeout(() => {
      setAlert("");
    }, 1000);
  };
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
 
    document.body.classList.remove('bg-success')
    
 }

  const toggleMode = (cls) => {
    removeBodyClasses()
    console.log(cls)
    document.body.classList.add('bg-' +cls)
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      ShowAlert("Dark mode has been enabled", "success");
      document.title = "Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      ShowAlert("Light mode has been enabled", "success");
      document.title = "Light Mode";
    }
  };
  

  return (
    <>
      <Router>
        <NavBar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About us" />
        <Alert alert={alert} />
        <Routes>
          <Route path="/About" element={<About mode={mode} />} />
          <Route path="/" element={<TextForm heading="Enter text below" ShowAlert={ShowAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
