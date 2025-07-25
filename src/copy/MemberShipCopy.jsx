import React from 'react';
import ImageBanner from '../components/ImageBannner';

const MemberShip = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Banner */}
            <ImageBanner
                imageUrl="mem.png"
                altText="Membership benefits"
                height="h-64 md:h-96"
                overlay={true}
                contentPosition="center"
            >
                <div className="text-center px-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Membership Benefits</h1>
                    <p className="text-white text-lg md:text-xl">Join our cooperative family and enjoy exclusive benefits</p>
                </div>
            </ImageBanner>

            {/* Membership Benefits Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
                    Why Become a Member?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Financial Security",
                            description: "Secure your future with our reliable savings and investment plans",
                            icon: "💰"
                        },
                        {
                            title: "Low-Interest Loans",
                            description: "Access loans at preferential rates exclusively for members",
                            icon: "🏦"
                        },
                        {
                            title: "Profit Sharing",
                            description: "Receive annual dividends from society profits",
                            icon: "📈"
                        },
                        {
                            title: "Financial Education",
                            description: "Free workshops on financial planning and management",
                            icon: "🎓"
                        },
                        {
                            title: "Community Support",
                            description: "Be part of a network that supports each other",
                            icon: "🤝"
                        },
                        {
                            title: "Special Schemes",
                            description: "Exclusive access to member-only schemes and offers",
                            icon: "🔒"
                        }
                    ].map((benefit, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Membership Process Section */}
            <section className="py-12 bg-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800">
                        How to Become a Member
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold">1</span>
                            </div>
                            <h3 className="font-semibold mb-2">Visit Branch</h3>
                            <p className="text-gray-600 text-sm">Visit our nearest branch with required documents</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold">2</span>
                            </div>
                            <h3 className="font-semibold mb-2">Application</h3>
                            <p className="text-gray-600 text-sm">Fill out the membership application form</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold">3</span>
                            </div>
                            <h3 className="font-semibold mb-2">Deposit</h3>
                            <p className="text-gray-600 text-sm">Make initial deposit as per society norms</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-blue-600 font-bold">4</span>
                            </div>
                            <h3 className="font-semibold mb-2">Approval</h3>
                            <p className="text-gray-600 text-sm">Receive your membership certificate</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Join Our Cooperative Family?</h2>
                    <p className="mb-8 text-lg">
                        Become a member today and start enjoying exclusive financial benefits and community support.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Apply Now
                        </button>
                        <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-3 px-8 border border-white rounded-lg transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MemberShip;