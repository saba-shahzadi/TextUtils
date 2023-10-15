import React, {useState} from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import './App.css';
import Nav from './components/Nav';
// import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(()=> {
      setAlert(null);
    },1500)

  }

  return (
   <>
    <Router>
    <Nav title="Textutils" about="About us" mode= {mode} toggleMode ={toggleMode} />
    <Alert alert = {alert}/>
  <div className='container my-3'>
    <Routes>
    <Route  path="/" element ={<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode = {mode}/>}>
    </Route>
    <Route path='/about' element={<About/>}></Route>
    </Routes>
    </div>
    </Router>







{/* 
  <Nav title="Textutils" about="About us" mode= {mode} toggleMode ={toggleMode} />
  <Alert alert = {alert}/>
  <div className='container my-3'>
    <Routes>
    <Route  path="/" element ={<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode = {mode}/>}>
    
    </Route>
    <Route path="/about">
      <About />
    </Route>

    </Routes> */}

    {/* <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About />}></Route>
      <Route path='/' 
      element= {<TextForm showAlert={showAlert} heading= "Enter the text to analyze below" mode = {mode}/>}
      ></Route>
    </Routes>
    </BrowserRouter> */}
  
  {/* </div> */}

   </>
  );
}

export default App;
