import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-900">
        Find Us
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        <div className="space-y-6 order-2 md:order-1">
          <div className="flex items-start space-x-4">
            <MapPin className="text-green-900 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-600 text-base md:text-lg">
                3924 Telegraph Ave, Oakland,<br />
                CA 94609, United States
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Clock className="text-green-900 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-600 text-base md:text-lg">
                Monday - Friday: 7am - 7pm<br />
                Friday: 1pm - 2:30pm close<br />
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Phone className="text-green-900 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-600 text-base md:text-lg">(555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="h-64 md:h-96 bg-gray-200 rounded-lg order-1 md:order-2">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.34561634656!2d-122.264274!3d37.828794!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857d00500f6525%3A0x3150e1c52ac5f126!2sGo%20Fresh!5e0!3m2!1sen!2sus!4v1749426040273!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true}
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;