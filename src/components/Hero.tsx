import React from 'react';

const Hero = () => {
  return (
    <div 
      className="h-[calc(100vh-4rem)] bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-yellow-400">Fresh</span> &amp; 
            <span className="text-green-400"> Healthy</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            Discover the power of natural juices
          </p>
          <a
            href="#menu"
            className="inline-block bg-yellow-400 text-green-900 px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-500 transition-colors"
          >
            View Our Menu
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;