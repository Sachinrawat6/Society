import React from 'react';
import welcomeImage from '../assets/logo.jpeg';
import logoImage from '../assets/logo.jpeg';
import interestIcon from '../assets/logo.jpeg';
import tdsIcon from '../assets/logo.jpeg';
import schemeIcon from '../assets/logo.jpeg';
import giftIcon from '../assets/logo.jpeg';

const Membership = () => {
    return (
        <div className="w-full bg-cover bg-center" style={{ backgroundImage: `url('/your-banner-bg.jpg')` }}>
            <div className="bg-white bg-opacity-90 p-8 md:p-16 max-w-7xl mx-auto space-y-12">
                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Membership</h2>

                {/* Section: Who can be a member */}
                <div className="md:flex md:items-start md:justify-between gap-8">
                    <div className="md:w-2/3 space-y-6">
                        <h3 className="text-2xl font-semibold text-orange-500">Who can be a member of the society?</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Any person who has attained the age of 18 years, is capable of entering a valid contract, member of Hindu undivided family, business, a company registered under Companies Act, a partnership firm, a limited liability partnership firm, any trust, institutions etc. can become a member of the Society.
                        </p>

                        {/* Documents */}
                        <div>
                            <h4 className="text-xl font-semibold text-gray-800 border-l-4 border-orange-400 pl-2">How can one join the Co-operative society?</h4>
                            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                                <li>ID Proof (Voter ID, Aadhaar, PAN etc.)</li>
                                <li>Address Proof (Electricity/Water Bill - Compulsory)</li>
                                <li>Rent Agreement (If tenant - Landlord's Electricity/Water Bill required)</li>
                                <li>3 Latest passport size Photos</li>
                            </ul>
                        </div>
                    </div>

                    {/* Welcome Image + Fee Table */}
                    <div className="md:w-1/3 flex flex-col items-center">
                        <img src={welcomeImage} alt="Welcome" className="w-40 mb-6" />
                        <table className="w-full text-sm border border-gray-300">
                            <thead>
                                <tr className="bg-orange-500 text-white">
                                    <th className="px-3 py-2 border-r border-white">ENROLLMENT</th>
                                    <th className="px-3 py-2 border-r border-white">FEES</th>
                                    <th className="px-3 py-2">₹</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800">
                                {[
                                    ['Share Money', 500],
                                    ['Compulsory Deposit (C.D.)', 200],
                                    ['Kalyan Fund', 250],
                                    ['Building Fund', 250],
                                    ['Admission Fee', 50],
                                    ['Other Charges', 150],
                                    ['Total', 1400],
                                ].map(([label, value], i) => (
                                    <tr key={i} className={label === 'Total' ? 'font-bold bg-gray-100' : ''}>
                                        <td className="border px-3 py-1">{label}</td>
                                        <td className="border px-3 py-1">{value}</td>
                                        <td className="border px-3 py-1">/-</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Benefits Section */}
                <div>
                    <h3 className="text-2xl font-semibold text-orange-600 mb-6 text-center">
                        Benefits of joining <span className="text-red-600">Shree Dhan Laxmi Co-Operative Society</span> ?
                    </h3>

                    <div className="grid md:grid-cols-3 gap-6 items-center text-center">
                        {/* Left Benefits */}
                        <div className="space-y-4">
                            <div>
                                <img src={interestIcon} alt="Interest" className="w-12 mx-auto mb-2" />
                                <p><strong>INTEREST RATE</strong><br />Higher interest rates than banks.</p>
                            </div>
                            <div>
                                <img src={tdsIcon} alt="No TDS" className="w-12 mx-auto mb-2" />
                                <p><strong>NO TDS</strong><br />No tax deducted on interest earned.</p>
                            </div>
                        </div>

                        {/* Center Badge */}
                        <div>
                            <img src={logoImage} alt="Society Logo" className="w-48 mx-auto" />
                        </div>

                        {/* Right Benefits */}
                        <div className="space-y-4">
                            <div>
                                <img src={schemeIcon} alt="Schemes" className="w-12 mx-auto mb-2" />
                                <p><strong>Schemes</strong><br />Wide range of hassle-free loan products.</p>
                            </div>
                            <div>
                                <img src={giftIcon} alt="Gifts" className="w-12 mx-auto mb-2" />
                                <p><strong>Gifts & Offers</strong><br />Diwali gifts and ongoing offers.</p>
                            </div>
                        </div>
                    </div>

                    {/* Button & Notes */}
                    <div className="text-center mt-10">
                        <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition">Become a Member Now</button>
                        <p className="text-sm text-gray-600 mt-4">* You can apply for more shares subject to management approval.</p>
                        <p className="text-xs text-red-600 italic">* The right to accept/reject membership applications is reserved with the management of the society.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
