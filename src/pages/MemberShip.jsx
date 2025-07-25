import React from 'react';

const Membership = () => {
    return (
        <div className="bg-gradient-to-b from-orange-50 to-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-orange-800 mb-2">Membership Plans</h1>
                    <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
                    <p className="text-lg text-gray-600 mt-4">
                        Choose the plan that suits your financial goals
                    </p>
                </div>

                {/* Schemes Section */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    {/* Scheme 1 */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-500">
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-orange-700 mb-2">Basic Membership</h2>
                            <div className="text-4xl font-bold text-orange-600">₹1,000</div>
                            <div className="text-sm text-gray-500">one-time enrollment</div>
                        </div>

                        <div className="space-y-4">
                            {[
                                ['Share Money', '₹100'],
                                ['Compulsory Deposit', '₹200'],
                                ['Kalyan Fund', '₹250'],
                                ['Building Fund', '₹250'],
                                ['Admission Fee', '₹50'],
                                ['Other Charges', '₹150'],
                            ].map(([name, amount], index) => (
                                <div key={index} className="flex justify-between py-2 border-b border-orange-100">
                                    <span className="text-gray-700">{name}</span>
                                    <span className="font-medium text-orange-600">{amount}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 bg-orange-100 hover:bg-orange-200 text-orange-700 font-bold py-2 px-4 rounded-lg transition duration-300">
                            Choose Basic Plan
                        </button>
                    </div>

                    {/* Scheme 2 */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-orange-700 relative">
                        <div className="absolute top-0 right-0 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
                            POPULAR
                        </div>
                        <div className="text-center mb-6">
                            <h2 className="text-2xl font-bold text-orange-800 mb-2">Premium Membership</h2>
                            <div className="text-4xl font-bold text-orange-700">₹1,400</div>
                            <div className="text-sm text-gray-500">one-time enrollment</div>
                        </div>

                        <div className="space-y-4">
                            {[
                                ['Share Money', '₹500'],
                                ['Compulsory Deposit', '₹200'],
                                ['Kalyan Fund', '₹250'],
                                ['Building Fund', '₹250'],
                                ['Admission Fee', '₹50'],
                                ['Other Charges', '₹150'],
                            ].map(([name, amount], index) => (
                                <div key={index} className="flex justify-between py-2 border-b border-orange-100">
                                    <span className="text-gray-700">{name}</span>
                                    <span className="font-medium text-orange-700">{amount}</span>
                                </div>
                            ))}
                        </div>

                        <button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                            Choose Premium Plan
                        </button>
                    </div>
                </div>

                {/* Eligibility Section */}
                <div className="bg-white p-8 rounded-xl shadow-md mb-16">
                    <h2 className="text-2xl font-bold text-orange-700 mb-6">Membership Eligibility</h2>

                    <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                            <h3 className="text-lg font-semibold text-orange-800 mb-3">Required Documents</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>ID Proof (Voter ID/Aadhaar/PAN)</li>
                                <li>Address Proof (Utility Bill)</li>
                                <li>Rent Agreement (if applicable)</li>
                                <li>3 Passport Photos</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-orange-800 mb-3">Who Can Join?</h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Individuals (18+ years)</li>
                                <li>HUF Members</li>
                                <li>Registered Businesses</li>
                                <li>Trusts & Institutions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-orange-800 mb-12">
                        Member Benefits
                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Higher Interest",
                                desc: "Better returns than banks",
                                icon: "📈"
                            },
                            {
                                title: "No TDS",
                                desc: "Keep all your earnings",
                                icon: "💰"
                            },
                            {
                                title: "Easy Loans",
                                desc: "Priority access to credit",
                                icon: "🏦"
                            },
                            {
                                title: "Annual Gifts",
                                desc: "Special member rewards",
                                icon: "🎁"
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-orange-50 p-6 rounded-xl text-center">
                                <div className="text-3xl mb-3">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-orange-800 mb-2">{benefit.title}</h3>
                                <p className="text-gray-700">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-orange-600 to-orange-800 text-white p-8 rounded-xl text-center">
                    <h2 className="text-2xl font-bold mb-4">Start Your Financial Journey</h2>
                    <p className="mb-6 max-w-2xl mx-auto">
                        Join our cooperative family today and secure your financial future
                    </p>
                    <button className="bg-white hover:bg-gray-100 text-orange-700 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300">
                        Apply Now
                    </button>
                    <p className="text-sm text-orange-200 mt-4">
                        * All applications subject to management approval
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Membership;