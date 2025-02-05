/* eslint-disable react/prop-types */
import linkedin from "../assets/images/Aboutlinkin.svg";
import mail from "../assets/images/contactemail.svg";

const Card = ({ image, title, description, linkedinLink, mailLink }) => {
  return (
    <div className="px-6 py-2 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center w-full max-w-sm border border-gray-300 gap-4 md:px-8 md:py-10 lg:max-w-md">
      {/* Card Image */}
      <img src={image} alt={title} className="w-50 h-50 object-contain mb-4" />

      {/* Card Title */}
      <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>

      {/* Description */}
      <p className="text-sm text-gray-600 my-1 px-4 md:text-base">
        {description}
      </p>

      {/* Social Links */}
      <div className="flex items-center space-x-4">
        {/* LinkedIn Link */}
        <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition-opacity" />
        </a>

        {/* Vertical Line */}
        <div className="h-6 w-[3px] bg-gray-400"></div>

        {/* Mail Link */}
        <a href={`mailto:${mailLink}`}>
          <img src={mail} alt="Mail" className="w-6 h-6 hover:opacity-80 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default Card;
