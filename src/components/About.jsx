import aboutgif from "../assets/gifs/aboutus.gif";
import Card from "./Card";
import anikeshimg from "../assets/images/ANIKESHSVG.svg";
import shrutimg from "../assets/images/SHURTISONONE.svg";
import piyush from "../assets/images/PIYUSHIMG.svg";

const About = () => {
  return (
    <div className="px-6 py-2 lg:px-35 md:px-25">
      <div className="space-y-3">
        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-2">
          {/* Heading Section */}
          <div className="font-bold text-[45px] text-center md:text-left">
            <h1>
              About <span className="text-[#004E8F]">Co-Car</span>
            </h1>
          </div>

          {/* Image Section */}
          <div className="flex justify-center mt-4 md:mt-0">
            <img
              src={aboutgif}
              alt=""
              className="w-full max-w-[700px] h-auto"
            />
          </div>
        </div>

        <div className="px-4 md:px-0">
          <p className="text-lg md:text-2xl font-semibold tracking-[-0.25px] leading-relaxed text-center md:text-left">
            <span className="text-[#004E8F]">Co-Car</span> is a smart
            co-commuting platform that connects daily fleet commuters and
            travelers for shared rides, making urban transportation efficient,
            affordable, and eco-friendly. With features like real-time tracking,
            intelligent matching algorithms, and a rewarding system, Co-Car
            reduces individual travel costs by up to 80% while promoting
            sustainability. Together, let’s redefine commuting for a better
            future—one shared ride at a time.
          </p>
        </div>

        <div className="font-bold text-[25px] mt-12 space-y-2">
          <h1 className="text-center md:text-left">Meet the Innovators</h1>
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 py-5 pb-25">
            <Card
              image={anikeshimg}
              title="Anikesh Gadekar"
              description="Founder"
            />
            <Card
              image={piyush}
              title="Piyush Agroya"
              description="Co-Founder"
            />
            <Card
              image={shrutimg}
              title="Shruti Sonone"
              description="Co-Founder"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
