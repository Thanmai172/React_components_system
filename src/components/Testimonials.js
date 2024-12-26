import React from 'react';  

const testimonialsData = [  
  {  
  }
]

const Testimonials = () => {  
  return (  
    <div className="row my-5">  
      {testimonialsData.map((testimonial, index) => (  
        <div className="col-md-4" key={index}>  
          <h5>{testimonial.name}</h5>  

        </div>  
      ))}  
    </div>  
  );  
};  

export default Testimonials;