import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import '../App.css';

const Content3 = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (globeRef.current) {
      const controls = globeRef.current.controls();
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <section
      className="relative bg-[#002c59] overflow-hidden text-white px-4 md:px-14 py-20"
      style={{
        clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      {/* Globe background (top-right) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-[80vh] lg:h-full z-0">
        <Globe
          ref={globeRef}
          width={900}
          height={900}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="green"
          atmosphereAltitude={0.25}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto">
        <p className="text-blue-400 font-bold text-xl mb-4">Global scale</p>
        <h2 className="text-3xl md:text-5xl font-bold text-slate-200 mb-6">
          The backbone for <br /> global commerce
        </h2>
        <p className="text-lg text-slate-300 mb-10">
          Stripe makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process
          hundreds of billions of dollars each year for ambitious businesses of all sizes.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 500M+</h4>
            <p className="px-2">API requests per day, peaking at 30,000 requests per second.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 99.999%</h4>
            <p className="px-2">Historic uptime for <span className="text-blue-400">Stripe services</span>.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 47+</h4>
            <p className="px-2">Countries with local acquiring support.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 135+</h4>
            <p className="px-2">Countries and payment methods supported.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content3;
