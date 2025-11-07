
import React from 'react';

const footerLinks = [
  'Meta', 'About', 'Blog', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 
  'Locations', 'Instagram Lite', 'Threads', 'Contact Uploading & Non-Users', 'Meta Verified'
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 text-center text-xs text-gray-500">
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-4 max-w-4xl mx-auto">
        {footerLinks.map((link) => (
          <a href="#" key={link} className="hover:underline">
            {link}
          </a>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4">
        <span>English</span>
        <span>&copy; {new Date().getFullYear()} Instagram from Meta</span>
      </div>
    </footer>
  );
};

export default Footer;
