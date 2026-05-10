import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlurText from './BlurText';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;
  const slideInterval = 5000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const offset = -currentSlide * (100 / totalSlides);

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 text-white text-center overflow-hidden bg-black">
      <div 
        className="absolute top-0 left-0 h-full flex transition-transform duration-1000 ease-[cubic-bezier(0.65,0,0.35,1)] z-[1]" 
        style={{ transform: `translateX(${offset}%)`, width: `${totalSlides * 100}%` }}
      >
        <div className="h-full bg-cover bg-top" style={{ backgroundImage: "url('/images/1738238755.JPG')", width: `${100 / totalSlides}%` }}></div>
        <div className="h-full bg-cover bg-top" style={{ backgroundImage: "url('/images/1738048982.jpg')", width: `${100 / totalSlides}%` }}></div>
        <div className="h-full bg-cover bg-top" style={{ backgroundImage: "url('/images/1738054440.jpg')", width: `${100 / totalSlides}%` }}></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-black/30 to-black/70 z-[2]"></div>
      <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex gap-[15px] z-[4]">
        {[...Array(totalSlides)].map((_, i) => (
          <div 
            key={i} 
            className={`w-3 h-3 rounded-full bg-white/30 border-2 border-white/50 cursor-pointer transition-all duration-300 ${currentSlide === i ? 'bg-white scale-[1.3] border-white' : ''}`} 
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
      <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24 relative z-[3]">
        <BlurText 
          text="Making an Impact That Lasts." 
          className="text-[clamp(2.5rem,8vw,3.5rem)] text-white mb-5 font-extrabold leading-tight justify-center"
          animateBy="words"
          direction="top"
          delay={150}
        />
        <p className="text-lg md:text-[1.2rem] mb-8 max-w-[800px] mx-auto opacity-[0.95] text-white">Building a more inclusive, compassionate, and empowered society through community-driven social impact.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-[300px] sm:max-w-none mx-auto">
          <Link to="/projects" className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-lg cursor-pointer border-2 border-transparent transition-all duration-300 bg-primary text-white hover:bg-primary-dark hover:-translate-y-1 hover:shadow-lg">Our Projects</Link>
          <a href="https://pages.razorpay.com/pl_H621G6ea64ZMl7/view" className="inline-flex items-center justify-center px-10 py-4 rounded-xl font-bold text-lg cursor-pointer border-2 border-white transition-all duration-300 text-white bg-transparent hover:bg-white hover:text-dark hover:-translate-y-1">Donate Us</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
