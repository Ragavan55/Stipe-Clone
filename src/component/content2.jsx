import { useEffect, useRef, useState } from "react";
import modularVideo from "../assets/modular.mp4";
import paymentsVideo from "../assets/payments.mov";
import billingVideo from "../assets/billing.mov";
import connectVideo from "../assets/connect.mov";
import issuingVideo from "../assets/issuing.mov";

const videoSources = {
  modular: modularVideo,
  payments: paymentsVideo,
  billing: billingVideo,
  connect: connectVideo,
  issuing: issuingVideo,
};

const Section = ({ id, title, heading, desc, button, seeAlso, isMobile }) => (
  <div data-id={id} className="mb-20">
    <p className="text-blue-500 font-bold text-lg mb-4">{title}</p>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
    <p className="text-gray-700 text-lg mb-6">{desc}</p>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-black transition">
      {button}
    </button>
    <div className="mt-6 space-y-2">
      <p className="font-bold">See also</p>
      {seeAlso.map((item, idx) => (
        <p key={idx}>
          <a href="#" className="text-blue-400 hover:text-black font-bold">
            {item}
          </a>
        </p>
      ))}
    </div>

    {/* MOBILE VIDEO */}
    {isMobile && (
      <video
        src={videoSources[id]}
        autoPlay
        muted
        loop
        playsInline
        className="mt-6 w-full rounded-xl shadow-xl"
      />
    )}
  </div>
);

const Content2 = () => {
  const [activeSection, setActiveSection] = useState("modular");

  const sectionRefs = {
    modular: useRef(null),
    payments: useRef(null),
    billing: useRef(null),
    connect: useRef(null),
    issuing: useRef(null),
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const sectionData = [
    {
      id: "modular",
      title: "Modular solutions",
      heading: "A fully integrated suite of financial and payments products",
      desc: `Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch (or invent) new business models.`,
      button: "Start with Modular",
      seeAlso: ["Revenue Recognition", "Embedded Finance"],
    },
    {
      id: "payments",
      title: "Payments",
      heading: "Accept and optimise payments globally",
      desc: `Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.`,
      button: "Start with Payments",
      seeAlso: [
        "Tax for automating tax registration, collection, and filing",
        "Radar for AI-powered fraud protection",
        "Terminal for custom in-person payments",
      ],
    },
    {
      id: "billing",
      title: "Billing",
      heading: "Capture recurring revenue",
      desc: `Manage flat rate, usage-based, and hybrid pricing models, minimise churn, and automate finance operations.`,
      button: "Start with Billing",
      seeAlso: [
        "Invoicing for invoice creation, collection, and tracking",
        "Usage-based billing for metering, billing, and consumption insights",
        "Sigma for custom revenue reports – no SQL required",
      ],
    },
    {
      id: "connect",
      title: "Connect",
      heading: "Set up multi-party payments and payouts",
      desc: `Integrate payments into your platform or marketplace for end-to-end payments experiences.`,
      button: "Start with Connect",
      seeAlso: [
        "Terminal for custom in-person payments",
        "Instant Payouts for fast payments to users",
        "Payment Elements for customisable UIs",
      ],
    },
    {
      id: "issuing",
      title: "Issuing",
      heading: "Build a fintech offering with banking-as-a-service",
      desc: `Launch, manage, and scale a commercial card programme without any setup fees.`,
      button: "Start with Issuing",
      seeAlso: [
        "Treasury for financial accounts",
        "Capital for offering fast, flexible financing",
        "Connect for powering platform payments",
      ],
    },
  ];

  return (
    <section className="w-full px-4 md:px-14 pb-20">
      {/* Desktop View */}
      <div className="hidden lg:flex gap-10 relative">
        {/* Left: Text Sections */}
        <div className="w-1/2 space-y-28">
          {sectionData.map((section) => (
            <div ref={sectionRefs[section.id]} key={section.id}>
              <Section {...section} isMobile={false} />
            </div>
          ))}
        </div>

        {/* Right: Sticky Video */}
        <div className="w-1/2 relative">
          <div className="sticky top-20 ">
            <video
              src={videoSources[activeSection]}
              autoPlay
              muted
              loop
              playsInline
              className="rounded-xl shadow-xl w-full max-h-[80vh] object-cover max-w-2xl mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden space-y-20">
        {sectionData.map((section) => (
          <div key={section.id} ref={sectionRefs[section.id]}>
            <Section {...section} isMobile={true} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content2;
