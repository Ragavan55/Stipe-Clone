import phoneImg from "../assets/phone.webp";
import openAIImg from "../assets/openAI.webp";
import googleImg from "../assets/google.jpg";
import amaznImg from "../assets/amazn.jpg";
import anthropicImg from "../assets/anthropic.png";
import morriottImg from "../assets/morriott.jpg";
import shopifyImg from "../assets/shopify.webp";
import airnb1Img from "../assets/airnb1.webp";
import urbnImg from "../assets/urbn.png";

const Content1 = () => {
  return (
    <section className="container mx-auto px-4 md:px-12 py-10">
      {/* Responsive layout for text + image */}
      <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <span className="bg-gray-400 text-white px-3 py-1 text-sm rounded-full inline-block">
            Preview
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold opacity-80 leading-tight">
            Financial <br /> infrastructure <br /> to grow your <br /> revenue
          </h1>

          <p className="text-base sm:text-lg text-gray-700">
            Join the millions of companies that use Stripe to accept payments,
            embed financial services, and power custom models.
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-full">
            Request an invite
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={phoneImg}
            alt="Phone Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"
          />
        </div>
      </div>

      {/* Logos grid: 2 columns on mobile, 4 on larger screens */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {[
          openAIImg,
          googleImg,
          amaznImg,
          anthropicImg,
          morriottImg,
          shopifyImg,
          airnb1Img,
          urbnImg,
        ].map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt=""
            className="object-contain h-12 w-full"
          />
        ))}
      </div>
    </section>
  );
};

export default Content1;
