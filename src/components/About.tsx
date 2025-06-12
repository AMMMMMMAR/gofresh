import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-900">
          Our Story
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Juice Bar"
              className="rounded-lg shadow-lg w-full h-64 md:h-auto object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4">
            <p className="text-base md:text-lg text-gray-700">
            Founded with a love for wellness and fresh living, Go Fresh was created to offer delicious, 
            nutritious drinks that support a healthy lifestyle for everyone.
            </p>
            <p className="text-base md:text-lg text-gray-700">
            At Go Fresh, we carefully select only the highest quality,
             natural ingredients to craft our signature juices, smoothies, açaí bowls, and wellness shots. 
              Our focus on freshness and flavor has made us a trusted destination for those who care about what they put in their bodies.
            </p>
            <p className="text-base md:text-lg text-gray-700">
              Every item on our menu is made with heart and purpose designed to give you real energy, 
              real nutrition, and real taste in every sip or spoonful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;