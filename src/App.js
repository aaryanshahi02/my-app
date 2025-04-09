import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';


function App() {
  const [Mode, setMode] = useState('light')

  const toggleMode = ()=> {
    if (Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
    <Navbar title="Text Utils" mode={Mode} toggleMode={toggleMode}/>

    <div className="container">
    <TextForm heading="Enter The Text Below" mode={Mode} />

    {/* <About/> */}

    </div>
    </>
  );
}

export default App;
