import React from 'react';
import { FaHandHoldingUsd, FaPiggyBank, FaHome, FaChartLine, FaUsers, FaPhoneAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';

const HomePage = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <section className="relative bg-green-600 text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Welcome to Shree Dhan Laxmi Co-Operative
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Your trusted partner for savings and credit solutions since 2024
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                            Become a Member
                        </button>
                        <button className="bg-transparent hover:bg-green-700 text-white font-bold py-3 px-6 border border-white rounded-lg transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaHandHoldingUsd className="text-4xl mb-4 text-green-600" />,
                                title: "Loans",
                                description: "Competitive interest rates with flexible repayment options for all members"
                            },
                            {
                                icon: <FaPiggyBank className="text-4xl mb-4 text-green-600" />,
                                title: "Savings Schemes",
                                description: "Various savings plans to help you grow your money securely"
                            },
                            {
                                icon: <MdSecurity className="text-4xl mb-4 text-green-600" />,
                                title: "Safe Investments",
                                description: "Government-approved investment options with guaranteed returns"
                            },
                            {
                                icon: <FaHome className="text-4xl mb-4 text-green-600" />,
                                title: "Housing Loans",
                                description: "Special housing loan schemes for our valued members"
                            },
                            {
                                icon: <FaChartLine className="text-4xl mb-4 text-green-600" />,
                                title: "Financial Planning",
                                description: "Expert advice to help you achieve your financial goals"
                            },
                            {
                                icon: <FaUsers className="text-4xl mb-4 text-green-600" />,
                                title: "Member Benefits",
                                description: "Exclusive benefits and discounts for our cooperative members"
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-xs hover:shadow-lg transition duration-300">
                                {service.icon}
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center">
                        <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
                            <h2 className="text-3xl font-bold mb-6 text-gray-800">About Our Society</h2>
                            <p className="text-gray-600 mb-4">
                                Shree Dhan Laxmi Co-Operative (U) Thrift & Credit Society Ltd was established in 2024 with the vision
                                of providing financial security and growth opportunities to our members.
                            </p>
                            <p className="text-gray-600 mb-6">
                                We operate under the cooperative principles of voluntary membership, democratic control, and concern
                                for community. Our society is registered and regulated by the appropriate government authorities.
                            </p>
                            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                                Read More About Us
                            </button>
                        </div>
                        <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                                alt="Financial meeting"
                                className="w-full h-auto rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-green-700 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-lg">Happy Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">₹5Cr+</div>
                            <div className="text-lg">Assets</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10+</div>
                            <div className="text-lg">Schemes</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">100%</div>
                            <div className="text-lg">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Visit Our Office</h3>
                            <div className="flex items-start mb-4">
                                <FaMapMarkerAlt className="text-green-600 mt-1 mr-3" />
                                <div>
                                    <p>C-324, Street No. 9</p>
                                    <p>West Vinod Nagar</p>
                                    <p>Delhi-110092</p>
                                </div>
                            </div>
                            <div className="flex items-start mb-4">
                                <FaPhoneAlt className="text-green-600 mt-1 mr-3" />
                                <div>
                                    <p>+91 98765 43210</p>
                                    <p>+91 11 2345 6789</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <FaClock className="text-green-600 mt-1 mr-3" />
                                <div>
                                    <p>Monday - Sunday: 10:00 AM - 7:00 PM</p>
                                    <p>Tuesday: Closed</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-gray-50 p-8 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Send Us a Message</h3>
                            <form>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="tel"
                                        placeholder="Your Phone"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <textarea
                                        placeholder="Your Message"
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="bg-green-700 cursor-pointer hover:bg-green-800 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;