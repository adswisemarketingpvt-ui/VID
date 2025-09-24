import React from 'react';

const Map = () => {
  return (
    <section id="map" className="relative">
      <div className="w-full h-96">
        <div className="w-full h-full">
          <iframe 
            src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-full"
            title="Google Map"
          ></iframe>
        </div>
      </div>
      <div 
        className="absolute right-0 top-0 w-1/3 h-full bg-cover bg-center hidden lg:block"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1)' }}
      ></div>
    </section>
  );
};

export default Map;