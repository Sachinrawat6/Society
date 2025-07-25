import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* About Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-bold mb-4 text-amber-400">Shree Dhan Laxmi Co-Operative</h3>
                        <p className="text-gray-300 mb-4">
                            A trusted thrift & credit society committed to providing financial security and growth opportunities to our members since 2024.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                                <FaFacebook size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-amber-400 transition duration-300">
                                <FaLinkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-amber-400 transition duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-amber-400 transition duration-300">About Us</Link>
                            </li>
                            <li>
                                <Link to="/membership" className="text-gray-300 hover:text-amber-400 transition duration-300">Membership</Link>
                            </li>
                            <li>
                                <Link to="/schemes" className="text-gray-300 hover:text-amber-400 transition duration-300">Schemes</Link>
                            </li>
                            <li>
                                <Link to="/loans" className="text-gray-300 hover:text-amber-400 transition duration-300">Loans</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-amber-400">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <FaMapMarkerAlt className="text-amber-400 mt-1 mr-3" />
                                <span className="text-gray-300">
                                    C-324, Street No. 9,<br />
                                    West Vinod Nagar,<br />
                                    Delhi-110092
                                </span>
                            </div>

                            <div className="flex items-center">
                                <FaPhone className="text-amber-400 mr-3" />
                                <span className="text-gray-300"> <a href="+91 9871614421">+91 9871614421</a> </span>
                            </div>

                            <div className="flex items-center">
                                <FaEnvelope className="text-amber-400 mr-3" />
                                <a href="mailto:shreedhanlaxmi2024@gmail.com" className="text-gray-300 hover:text-amber-400 transition duration-300">
                                    shreedhanlaxmi2024@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Shree Dhan Laxmi Co-Operative (U) Thrift & Credit Society Ltd. All Rights Reserved.
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/privacy-policy" className="text-gray-400 hover:text-amber-400 text-sm transition duration-300">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="text-gray-400 hover:text-amber-400 text-sm transition duration-300">
                            Terms & Conditions
                        </Link>
                        <Link to="/disclaimer" className="text-gray-400 hover:text-amber-400 text-sm transition duration-300">
                            Disclaimer
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;