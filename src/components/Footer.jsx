import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";

// JSON footer data
const footerData = {
  designedBy: "Er. Sunny Prajapati",
  address: "British Academy Near Gurudwara, Seohara",
  phone: "8899429888",
  email: "info@tuitionwala.com",
  socialLinks: [
    { name: "Facebook", url: "https://facebook.com", icon: "FaFacebookF" },
    { name: "Instagram", url: "https://instagram.com", icon: "FaInstagram" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "FaLinkedinIn" },
    { name: "YouTube", url: "https://youtube.com", icon: "FaYoutube" }
  ]
};

// Icon mapping
const iconMap = {
  FaFacebookF: <FaFacebookF size={20} />,
  FaInstagram: <FaInstagram size={20} />,
  FaLinkedinIn: <FaLinkedinIn size={20} />,
  FaYoutube: <FaYoutube size={20} />
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-white to-blue-100 py-8 shadow-inner text-gray-700">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-pink-700 mb-2">Contact Us</h3>
          <p>{footerData.address}</p>
          <p>Phone: <a href={`tel:${footerData.phone}`} className="text-blue-600">{footerData.phone}</a></p>
          <p>Email: <a href={`mailto:${footerData.email}`} className="text-blue-600">{footerData.email}</a></p>
        </div>

        {/* Social Links */}
        <div className="flex md:justify-center items-center gap-4">
          {footerData.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-pink-600 transition"
              title={link.name}
            >
              {iconMap[link.icon]}
            </a>
          ))}
        </div>

        {/* Credits */}
        <div className="text-sm flex flex-col justify-center items-center md:items-end">
          <p>&copy; {new Date().getFullYear()} Tuition Wala</p>
          <p>
            Designed by <span className="font-bold text-pink-600">{footerData.designedBy}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
