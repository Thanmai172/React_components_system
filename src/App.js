import React from 'react';  
import Testimonials from './components/Testimonials';  
import Features from './components/Features';  
import CallToAction from './components/CallToAction';  
import './App.css';

function App() {  
  return (  
    <div className="container text-center">  
      <div className="my-5">  
        <title>React</title>  

        <button type="submit" className="signup-button" style={{ padding: '5px 5px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>  
        Sign Up  
      </button>  
        <Testimonials />  
      </div>  
      <div className="my-5">  
        <h2 className= "Head">Start Bootstrap</h2>  
        <Features />  
      </div>  
      <CallToAction />  
    </div>  
  );  
}  

export default App;