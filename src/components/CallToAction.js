import React from 'react';  

const CallToAction = () => {  
  return (  
    <div className="call-to-action text-center">  
      <h2>Generate more leads with a professional landing page!</h2>  
      <input type="email" placeholder="Email Address" className="form-control my-2" />  
      <button type="submit" className="signup-button_One" style={{ padding: '10px 10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>  
        Submit  
      </button>  
    </div>  
  );  
};  

export default CallToAction;