import InputBox from "./inputbox";
import { useState } from "react";
import email from "../assets/images/contactemail.svg";
import insta from "../assets/images/contactinsta.svg";
import linkedin from "../assets/images/contactlinkein.svg";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    subject: "",
    message: "",
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

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.contact) {
      newErrors.contact = "Contact number is required";
    } else if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = "Invalid phone number (10 digits required)";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form Data Submitted:", formData);
      // Add your submission logic here (API call, etc.)
      alert("Form submitted succesfully!!")

      // Reset form
      setFormData({
        name: "",
        contact: "",
        email: "",
        subject: "",
        message: "",
      });
      setErrors({});
      setSubmitSuccess(true);

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  return (
    <div className="px-6 py-8 lg:px-35 md:px-12 w-full">
      <div className="space-y-12 mb-10 w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Contact Us
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Content */}
          <div className="w-full text-lg md:text-xl md:w-1/2">
            <h1 className="text-3xl font-semibold text-gray-900">
              Let’s Connect and Transform Ride-Sharing
            </h1>
            <p className="mt-4 text-gray-700">
              At <span className="text-[#004E8F] font-semibold">Co-Car</span>,
              we value your feedback and are committed to providing you with the
              best experience possible. Whether you have a query about our
              services, need assistance with the app, or want to share your
              suggestions, we’d love to hear from you! Your insights help us
              improve and make Co-Car a better platform for everyone.
            </p>

            {/* Why Reach Out? */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Why Reach Out to Us?
              </h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                <li>
                  Have questions about how Co-Car works? We’ve got answers.
                </li>
                <li>Facing an issue? Our team is ready to assist you.</li>
                <li>
                  Got a great idea? Share your suggestions, and let’s shape the
                  future of ride-sharing together.
                </li>
              </ul>
            </div>

            {/* Business Collaboration */}
            <p className="mt-6 text-gray-700">
              We also believe in the power of collaboration. If you’re an
              investor or business partner interested in being part of our
              journey, we’re open to funding and partnership opportunities.
              Together, we can redefine commuting and create a more connected,
              sustainable world.
            </p>

            {/* Socials */}
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
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Name"
              />
              <InputBox
                type="text"
                value={formData.contact}
                onChange={handleChange}
                name="contact"
                placeholder="Contact No"
              />
              <InputBox
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="Email ID"
              />
              <InputBox
                type="text"
                value={formData.subject}
                onChange={handleChange}
                name="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols="30"
                rows="5"
                placeholder="Your Message"
                className={`px-4 py-2 border ${
                  errors.message ? "border-red-500" : "border-gray-400"
                } rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full resize-none`}
              />
              {errors.message && (
                <span className="text-red-500 text-sm mt-1 block">
                  {errors.message}
                </span>
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
    </div>
  );
};

export default Contact;