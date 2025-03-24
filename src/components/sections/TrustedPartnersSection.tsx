
import React from 'react';

const TrustedPartnersSection = () => {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="container-wide">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-semibold text-neutral-800">Trusted Partners</h3>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-neutral-700">Government of India</div>
          </div>
          <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-neutral-700">ICDS</div>
          </div>
          <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-neutral-700">Uttar Pradesh Govt.</div>
          </div>
          <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-neutral-700">Madhya Pradesh Govt.</div>
          </div>
          <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-neutral-700">PDS</div>
          </div>
          <div className="h-16 px-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="text-lg font-bold text-neutral-700">MDM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
