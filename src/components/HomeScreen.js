import React, { useState } from 'react';
import '../styles/HomeScreen.css';

// Data
const features = [
  {
    id: 1,
    title: 'Quality Food',
    description: 'We use only the freshest ingredients to prepare our dishes, ensuring a delightful culinary experience.'
  },
  {
    id: 2,
    title: 'Fast Delivery',
    description: 'Our efficient delivery service ensures your food arrives hot and fresh at your table.'
  },
  {
    id: 3,
    title: 'Expert Chefs',
    description: 'Our team of experienced chefs brings creativity and expertise to every dish they prepare.'
  }
];

const dishes = [
  {
    id: 1,
    name: 'Grilled Salmon',
    description: 'Fresh salmon grilled to perfection with herbs and lemon',
    price: 24.99,
    image: '/images/grilled-salmon.png'
  },
  {
    id: 2,
    name: 'Spicy Shrimp Pasta',
    description: 'Al dente pasta with jumbo shrimp in a spicy tomato sauce',
    price: 19.99,
    image: '/images/pasta-dish.jpg'
  },
  {
    id: 3,
    name: 'Tagliatelle Pasta',
    description: 'Homemade pasta with creamy mushroom sauce and parmesan',
    price: 18.99,
    image: '/images/tagliatelle-pasta.jpg'
  },
  {
    id: 4,
    name: 'Beef Steak',
    description: 'Premium cut beef steak with roasted vegetables and red wine sauce',
    price: 29.99,
    image: '/images/beef-dish.jpeg'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'Sophie Bernard',
    rating: 5,
    avatar: '/images/avatar1.png',
    text: 'The food at ISIRI is fantastic! Had the Tagliatelle Pasta and Tiramisu, and they were so delicious. The service is top-notch!'
  },
  {
    id: 2,
    name: 'John Lyle',
    rating: 4,
    avatar: '/images/avatar1.png',
    text: 'Great experience at ISIRI Resto Bar. The ambiance was pleasant, and the food was delicious. The delivery was prompt.'
  },
  {
    id: 3,
    name: 'Emma Davis',
    rating: 5,
    avatar: '/images/avatar1.png',
    text: 'ISIRI Resto Bar is amazing! The dishes are consistently delicious, and the staff is always friendly and accommodating. A true gem!'
  }
];

const steps = [
  {
    id: 1,
    title: 'Browse Our Menu',
    description: 'Explore our selection of dishes on our menu'
  },
  {
    id: 2,
    title: 'Place Your Order',
    description: 'Choose your favorite dish and add it to your order'
  },
  {
    id: 3,
    title: 'Enjoy Your Meal',
    description: "We'll deliver your order to your location or you can dine in"
  }
];

// Component Definitions
const Hero = () => {
  const handleOrderNow = () => {
    console.log('Order Now clicked');
  };

  const handleViewMenu = () => {
    console.log('View Menu clicked');
  };

  return (
    <section className="hero" style={{ backgroundImage: `url('/images/restaurant-interior.png')` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>ISIRI Resto Bar</h1>
        <p>Experience the finest dining in town</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={handleOrderNow}>
            Order Now
          </button>
          <button className="secondary-btn" onClick={handleViewMenu}>
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="rating">
          <p>Customer Rating</p>
          <h3>4.8/5</h3>
        </div>
        
        <h2>About ISIRI Resto Bar</h2>
        <p>
          ISIRI Resto Bar is a family-owned restaurant with a tradition of excellence in cuisine. 
          With over 15 years of experience, we pride ourselves on using the freshest ingredients 
          with authentic recipes to create dishes that delight the senses. Our commitment to 
          quality and service has made us a favorite in the community.
        </p>
        
        <h3>Why Choose Us</h3>
        <h2>Our Commitment to Excellence</h2>
        <p>At ISIRI Resto Bar, we go above and beyond to provide an exceptional dining experience.</p>
        
        <div className="features">
          {features.map((feature) => (
            <div key={feature.id} className="feature">
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DishCard = ({ dish }) => {
  const handleOrderDish = () => {
    console.log(`Ordering ${dish.name}`);
  };

  return (
    <div className="dish">
      <img src={dish.image} alt={dish.name} />
      <h3>{dish.name}</h3>
      <p>{dish.description}</p>
      <span className="price">${dish.price.toFixed(2)}</span>
      <button className="primary-btn dish-order-btn" onClick={handleOrderDish}>
        Order Now
      </button>
    </div>
  );
};

const FeaturedDishes = () => {
  return (
    <section className="featured-dishes">
      <div className="container">
        <h2>Featured Dishes</h2>
        <div className="dishes-grid">
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index}>{index < rating ? '★' : '☆'}</span>
    ));
  };

  return (
    <div className="testimonial">
      <img src={testimonial.avatar} alt={testimonial.name} className="avatar" />
      <h4>{testimonial.name}</h4>
      <div className="stars">{renderStars(testimonial.rating)}</div>
      <p>{testimonial.text}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2>Customer Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <div className="step-icon">{step.id}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section className="location">
      <div className="container">
        <h2>Location</h2>
        <address>
          <strong>Address:</strong> Doddanekundi Junction, Outer Ring Rd, Doddanekkundi, Bengaluru, Karnataka 560048<br />
          <strong>Phone:</strong> <a href="tel:88845 77123">88845 77123</a><br />
          <strong>Email:</strong> <a href="mailto:info@isirirestobar.com">info@isirirestobar.com</a>
        </address>
        
        {/* Optional: Add Google Maps iframe */}
        <div className="map-container">
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31213.90791365726!2d77.65219678371163!3d12.98457726447134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae114f53ff37a1%3A0xc71a781e1327009e!2sISIRI%20Resto%20Bar%20-%20Theme%20Restaurant!5e0!3m2!1sen!2sin!4v1761371685174!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitMessage('Thank you! Your message has been sent successfully.');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="primary-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {submitMessage && (
            <p className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>ISIRI Resto Bar offers a unique dining experience with quality food and excellent service.</p>
          </div>
          
          <div className="footer-section">
            <h3>Opening Hours</h3>
            <p>
              Mon-Fri: 11am - 10pm<br />
              Sat-Sun: 10am - 11pm
            </p>
          </div>
          
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>
              Phone: <a href="tel:88845 77123">88845 77123</a><br />
              Email: <a href="mailto:info@isirirestobar.com">info@isirirestobar.com</a>
            </p>
          </div>
        </div>
        
        <div className="social-icons">
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://yelp.com" aria-label="Yelp" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-yelp"></i>
          </a>
        </div>
        
        <div className="copyright">
          <p>
            © {currentYear} ISIRI Resto Bar | All Rights Reserved | 
            <a href="/privacy"> Privacy Policy</a> | 
            <a href="/terms"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main HomeScreen Component
function HomeScreen() {
  return (
    <div className="home-screen">
      <Hero />
      <About />
      <FeaturedDishes />
      <Testimonials />
      <HowItWorks />
      <Location />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default HomeScreen;