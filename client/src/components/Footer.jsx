// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Programming Pathshala. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
