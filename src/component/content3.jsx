import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';
import '../App.css'

const content3 = () => {
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
    <div
      className="earth pt-[-15] px-22 py-30 pb-20 overflow-hidden relative"
      style={{
        backgroundColor: '#002c59',
        clipPath: 'polygon(0 8%, 100% 0%, 100% 100%, 0% 100%)',
      }}
    >
      {/* Globe as background */}
        <div
        className="absolute right-0 top-0 w-1/2 h-full maptag"
        style={{ zIndex: 0 }} // removed pointerEvents: 'none'
      >
        <Globe
          ref={globeRef}
          width={900}
          height={1100}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere={true}
          atmosphereColor="green"
          atmosphereAltitude={0.25}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10">
        <div className="">
          <p className="text-blue-400 pb-20 font-bold text-xl">Global scale</p>
        </div>
        <div className="mt-[-40]">
          <h1 className="text-5xl font-bold mt-[-40] text-slate-300">
            The backbone for <br /> global commerce
          </h1>
        </div>
        <div className="py-10">
          <p className="text-xl text-slate-300">
            Stripe makes moving money as easy and <br /> programmable as moving data. Our teams are <br />
            based in offices around the world and we process <br /> hundreds of billions of dollars each year for <br />
            ambitious businesses of all sizes.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-10 my-10 text-white">
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 500M+</h4>
            <p className="px-2">API requests per day, peaking at <br /> 30,000 requests per second.</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 99.999%</h4>
            <p className="px-2">historic uptime for <span className="text-blue-400">stripe services</span></p>
          </div>
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 47+</h4>
            <p className="px-2">countries with local acquiring</p>
          </div>
          <div>
            <h4 className="text-2xl font-bold py-2"><span className="text-blue-500">|</span> 135+</h4>
            <p className="px-2">countries and payment methods supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default content3;