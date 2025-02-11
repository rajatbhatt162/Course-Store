import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Company Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Company</h2>
          <p className="text-gray-500">
            Building innovative web solutions to empower businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Web St, Tech City</p>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
