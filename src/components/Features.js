import React from 'react';  
import CallToAction from './CallToAction'; // Adjust the import path if necessary  

const featuresData = [  
  {  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg",  
    isImageOnly: true,  
  },  
  {  
    title: "Fully Responsive Design",  
    text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",  
  },  
  {  
    title: "Easy to Use",  
    text: "Ready to use with your own content, or customize the source files!",  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",  
  },  
  {  
    title: "Updated Feature",  
    text: "Check out our new feature!",  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",  
  },  
];  

const iconFeaturesData = [  
  {  
    title: "Fully Responsive",  
    text: "This theme will look great on any device, no matter the size!",  
    image: "https://static.vecteezy.com/system/resources/previews/003/731/316/large_2x/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg",  
  },  
  {  
    title: "Bootstrap 5 Ready",  
    text: "Featuring the latest build of the new Bootstrap 5 framework!",  
    image: "https://icon-library.com/images/small-icon/small-icon-24.jpg",  
  },  
  {  
    title: "Easy to Use",  
    text: "Ready to use with your own content, or customize the source files!",  
    image: "https://th.bing.com/th/id/OIP.wacfUzGrlryweUA91w3u7AHaJ0?w=156&h=200&c=7&r=0&o=5&dpr=1.4&pid=1.7",  
  },  
];  

const testimonialsData = [  
  {  
    title: "Margaret E.",   
    text: "This is fantastic! Thanks so much guys!",  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",  
  },  
  {  
    title: "Fred S.",   
    text: "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",  
  },  
  {  
    title: "Sarah W.",   
    text: "Thanks so much for making these free resources available to us!",  
    image: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",  
  },  
];  

const Features = () => {  
  return (  
    <div className="features-container">  
      {/* Render the background masthead image */}  
      <div className="image-container">  
        <img   
          src={featuresData[0].image}   
          alt="Background Masthead"   
          className="img-fluid large-image"   
        />  
        <CallToAction /> {/* Overlay Call to Action on the image */}  
      </div>  

      {/* Render the icon features below the masthead image */}  
      <div className="icon-feature-container">  
        {iconFeaturesData.map((iconFeature, index) => (  
          <div className="features-item" key={index} style={{ flexDirection: 'column', alignItems: 'center' }}>  
            <img   
              src={iconFeature.image}   
              alt={iconFeature.title}   
              className="feature-image"   
              style={{ width: '40px', height: '40px', marginBottom: '8px' }}   
            />  
            <h3>{iconFeature.title}</h3>  
            <p>{iconFeature.text}</p>  
          </div>  
        ))}  
      </div>  

      {/* Render the showcase section with text and image side by side */}  
      <div className="showcase-container" style={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>  
        <div className="showcase-text" style={{ flex: '1', paddingRight: '20px' }}>  
          <h3>{featuresData[1].title}</h3>  
          <p>{featuresData[1].text}</p>  
        </div>  
        
        <div className="showcase-image" style={{ flex: '1', display: 'flex', justifyContent: 'flex-end' }}>  
          <img   
            src={featuresData[1].image}   
            alt="Showcase"   
            className="img-fluid"   
            style={{ maxWidth: '100%', height: 'auto' }}   
          />  
        </div>  
      </div>  

      {/* Continue rendering other features after the showcase section */}  
      {featuresData.slice(2).map((feature, index) => (  
        <div className="features-item" key={index} style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>  
          {feature.isImageOnly ? (  
            <div className="image-container">  
              <img src={feature.image} alt={feature.title} className="img-fluid" />  
              <CallToAction />  
            </div>  
          ) : (  
            <>  
              <img src={feature.image} alt={feature.title} className="img-fluid" />  
              <div className="features-text">  
                <h3>{feature.title}</h3>  
                <p>{feature.text}</p>  
              </div>  
            </>  
          )}  
        </div>  
      ))}  

      {/* Render Testimonials Section */}  
      <h2 className="testimonials-title">What people are saying...</h2>   
      <div className="testimonials-container">  
        {testimonialsData.map((testimonial, index) => (  
          <div className="testimonial-item" key={index}>  
            <img  
              src={testimonial.image}  
              alt={`Testimonial from ${testimonial.title}`}  
              className="img-fluid"  
            />  
            <h5 style={{ marginTop: '10px', fontStyle: 'italic' }}>{testimonial.title}</h5>  
            <p>{testimonial.text}</p>    
          </div>  
        ))}  
      </div>  

      {/* Sign-Up Section */}  
     

      {/* Bottom Image */}  

      {/* Bottom Image with Sign-Up Prompt */}  
<div style={{ position: 'relative', textAlign: 'center', margin: '20px 0' }}>  
  <img  
    src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-masthead.jpg" // Use your actual image URL here  
    alt="Bottom image"  
    className="bottom-image"  
    style={{ display: 'block', margin: '0 auto', maxWidth: '100%', height: 'auto' }}  
  />  
  
  <div className="signup-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)', textAlign: 'center' }}>  
    <h3>Ready to get started? Sign up now!</h3>  
    <form className="signup-form" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>  
      <input  
        type="email"  
        placeholder="Email Address"  
        className="email-input"  
        required  
        style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px', width: '250px' }}  
      />  
      <button type="submit" className="signup-button_Two" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>  
        Submit  
      </button>  
    </form>  
  </div>  
</div>
    </div>  
  );  
};  

export default Features;