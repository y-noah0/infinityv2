import styles from './Testimonials.module.css';
import logo1 from'../../../assets/Testimonials/Logo (1).png'
import logo2 from'../../../assets/Testimonials/Logo (2).png'
import logo3 from'../../../assets/Testimonials/Logo (3).png'
import logo4 from'../../../assets/Testimonials/Logo (4).png'
import logo5 from'../../../assets/Testimonials/Logo (5).png'
import ceo from'../../../assets/Testimonials/picture.png'
// import right from'../../../assets/Testimonials/chevron-right.png'
import { useState } from 'react';

const testimonials = [
	{
	  image: ceo, // Directly assign the imported image
	  quote: `"Speed of service is better for everyone. Not having to wait in line means more chance of upselling and that's better for everyone."`,
	  author: 'Jack Manzi',
	  position: 'CEO | SAGA BAY',
	  business: 'RESTAURANT',
	},
	{
	  image: ceo,
	  quote: `"Speed of service is better for everyone. Not having to wait in line means more chance of upselling and that's better for everyone."`,
	  author: 'Jack Manzi',
	  position: 'CEO | SAGA BAY',
	  business: 'RESTAURANT',
	},
	{
	  image: ceo,
	  quote: `"Speed of service is better for everyone. Not having to wait in line means more chance of upselling and that's better for everyone."`,
	  author: 'Jack Manzi',
	  position: 'CEO | SAGA BAY',
	  business: 'RESTAURANT',
	},
  ];
  

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Trusted by over 150,000+ RESTAURANTs <br /> of all concepts</h2>
      <div className={styles.logos}>
        <img src={logo1} alt="Logo 1" />
        <img src={logo2} alt="Logo 2" />
        <img src={logo3} alt="Logo 3" />
        <img src={logo4} alt="Logo 4" />
        <img src={logo5} alt="Logo 5" />
      </div>
      <div className={styles.testimonialContainer}>
        <img 
          src={testimonials[currentTestimonial].image} 
          alt="Testimonial" 
          className={styles.testimonialImage}
        />
        <div className={styles.testimonialContent}>
		  <div className={styles.text_container}>
			<p className={styles.type}>{testimonials[currentTestimonial].business}</p>	
			<p className={styles.quote}>{testimonials[currentTestimonial].quote}</p>
			<p className={styles.author}>{testimonials[currentTestimonial].author}</p>
			<p className={styles.position}>{testimonials[currentTestimonial].position}</p>
		  </div>
        </div>
      </div>
      <div className={styles.carouselControls}>
        <button onClick={prevTestimonial} className={styles.carouselButton}>&lt;</button>
        <button onClick={nextTestimonial} className={styles.carouselButton}>&gt;</button>
      </div>
    </div>
  );
};

export default Testimonials;