import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
// import About from './components/About';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'light';
    }
  }

  return (
   <>
  <Nav title="Textutils" about="About us" mode= {mode} toggleMode ={toggleMode} />
  <div className='container my-3'>
    <TextForm heading= "Enter the text to analyze below" mode = {mode}/>
   {/* <About /> */}
  </div>

   </>
  );
}

export default App;
