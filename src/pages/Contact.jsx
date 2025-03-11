import InputBox from "../components/Inputbox";
import { useState } from "react";
import email from "../assets/images/contactemail.svg";
import insta from "../assets/images/contactinsta.svg";
import linkedin from "../assets/images/contactlinkein.svg";
import overley from "../assets/gifs/overlay.gif";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Contact: "",
    Email: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!formData.Name.trim()) newErrors.Name = "Name is required";
    if (!formData.Contact) newErrors.Contact = "Contact number is required";
    else if (!phoneRegex.test(formData.Contact))
      newErrors.Contact = "Invalid phone number (10 digits required)";
    if (!formData.Email) newErrors.Email = "Email is required";
    else if (!emailRegex.test(formData.Email))
      newErrors.Email = "Invalid email format";
    if (!formData.Subject.trim()) newErrors.Subject = "Subject is required";
    if (!formData.Message.trim()) newErrors.Message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="px-6 py-8 lg:px-35 md:px-12 w-full lg:mt-20">
      <div className="space-y-12 mb-10 w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Contact Us
        </h1>

        {/* Main Container */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-12">
          {/* Left Content */}
          <div className="text-lg md:text-xl md:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-900">
              Let’s Connect and Transform Ride-Sharing
            </h1>
            <p className="mt-4 text-gray-700">
              At <span className="text-[#004E8F] font-semibold">Co-Car</span>,
              we value your feedback and are committed to providing you with the
              best experience possible. Whether you have a query about our
              services, need assistance with the app, or want to share your
              suggestions, we’d love to hear from you!
            </p>

            {/* Social Media */}
            <div className="mt-10">
              <h2 className="text-lg font-semibold text-gray-800">
                Follow Us:
              </h2>
              <div className="flex items-center gap-4 mt-2">
                <img
                  src={email}
                  alt="Email"
                  className="w-8 h-10 cursor-pointer hover:opacity-80"
                />
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-6 h-6 cursor-pointer hover:opacity-80 mb-1"
                />
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-6 h-6 cursor-pointer hover:opacity-80"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="w-full md:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col space-y-4 p-4 w-full max-w-lg mx-auto"
            >
              <InputBox
                type="text"
                value={formData.Name}
                onChange={handleChange}
                name="Name"
                placeholder="Name"
              />
              {errors.Name && (
                <span className="text-red-500 text-sm">{errors.Name}</span>
              )}

              <InputBox
                type="text"
                value={formData.Contact}
                onChange={handleChange}
                name="Contact"
                placeholder="Contact No"
              />
              {errors.Contact && (
                <span className="text-red-500 text-sm">{errors.Contact}</span>
              )}

              <InputBox
                type="email"
                value={formData.Email}
                onChange={handleChange}
                name="Email"
                placeholder="Email ID"
              />
              {errors.Email && (
                <span className="text-red-500 text-sm">{errors.Email}</span>
              )}

              <InputBox
                type="text"
                value={formData.Subject}
                onChange={handleChange}
                name="Subject"
                placeholder="Subject"
              />
              {errors.Subject && (
                <span className="text-red-500 text-sm">{errors.Subject}</span>
              )}

              <textarea
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                cols="30"
                rows="5"
                placeholder="Your Message"
                className={`px-4 py-2 border ${
                  errors.Message ? "border-red-500" : "border-gray-400"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full resize-none`}
              />
              {errors.Message && (
                <span className="text-red-500 text-sm">{errors.Message}</span>
              )}

              <button
                type="submit"
                className="bg-[#004E8F] text-white font-medium py-4 rounded-lg hover:bg-blue-700 transition duration-300 w-full cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Message Overlay */}
      {isSubmitted && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-opacity-20 backdrop-blur-sm h-full">
          <div className="bg-white p-8 rounded-lg text-center shadow-lg w-200 h-170">
            <img src={overley} alt="Success" className="w-80 h-80 mx-auto mb-4" />
            <h1 className="text-[#004E8F] text-4xl font-bold py-8">
              Got thoughts to melt? Let’s Chat!
            </h1>
            <p className="text-2xl px-8">
              We’ve got your message, someone from our team will be contacting
              you soon. Till then, Chillax! 🧘
            </p>
            <button
              className="bg-[#004E8F] text-white py-4 px-4 rounded-4xl w-1/2 mt-8 cursor-pointer"
              onClick={() => setIsSubmitted(false)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
