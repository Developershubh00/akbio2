import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Leaf, Phone } from 'lucide-react';
import { Logo } from './Logo';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const heroImages = [
    {
      url: 'https://cdn.dribbble.com/userupload/44960441/file/6111b8f71db95990bdd425db175c0688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fueling Industries, Sustaining Tomorrow',
      subtitle: 'High-quality biomass pellets for burners & boilers'
    },
    {
      url: 'https://cdn.dribbble.com/userupload/44960442/file/bd9d4cb5681293fec29565ca0481a221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Renewable Energy Solutions',
      subtitle: 'Carbon-neutral fuel for a cleaner future'
    },
    {
      url: 'https://cdn.dribbble.com/userupload/44960443/file/4fa46450b292697fbf4728046a887097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sustainable Industrial Power',
      subtitle: 'Eco-friendly alternatives to fossil fuels'
    },
    {
      url: 'https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fueling Industries, Sustaining Tomorrow',
      subtitle: 'High-quality biomass pellets for burners & boilers'
    },
    {
      url: 'https://images.pexels.com/photos/9800019/pexels-photo-9800019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Renewable Energy Solutions',
      subtitle: 'Carbon-neutral fuel for a cleaner future'
    },
    {
      url: 'https://images.pexels.com/photos/9800026/pexels-photo-9800026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Sustainable Industrial Power',
      subtitle: 'Eco-friendly alternatives to fossil fuels'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative h-screen overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={`Biomass pellets ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* <div className="flex items-center mb-6 animate-fade-in">
              <Logo className="w-8 h-8 text-green-400 mr-3" />
              <span className="text-green-400 font-semibold text-lg">AK Bio Energy</span>
            </div> */}
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-slide-up">
              {heroImages[currentSlide].title}
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 animate-slide-up animation-delay-200">
              {heroImages[currentSlide].subtitle}
            </p>
            
            <button
              onClick={scrollToContact}
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-slide-up animation-delay-400"
            >
              <span className="flex items-center">
                Contact Us
                <Phone className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;