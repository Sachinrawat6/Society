import { useState } from 'react';
import { Link } from 'react-router-dom';

const FixedDeposit = () => {
    const [activeTab, setActiveTab] = useState('details');

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Fixed Deposit
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Give your portfolio stability of returns and safety and liquidity
                    </p>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Tabs */}
                        <div className="border-b border-gray-200 mb-6">
                            <nav className="-mb-px flex space-x-8">
                                <button
                                    onClick={() => setActiveTab('details')}
                                    className={`${activeTab === 'details' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Details
                                </button>
                                <button
                                    onClick={() => setActiveTab('rates')}
                                    className={`${activeTab === 'rates' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Interest Rates
                                </button>
                                <button
                                    onClick={() => setActiveTab('eligibility')}
                                    className={`${activeTab === 'eligibility' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Eligibility & Features
                                </button>
                            </nav>
                        </div>

                        {/* Tab Content */}
                        {activeTab === 'details' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Fixed Deposit Scheme</h2>
                                <p className="text-gray-600 mb-6">
                                    Invest in FIXED DEPOSIT. We offer attractive returns with stability and safety for your investments.
                                </p>
                                <div className="bg-white shadow rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Key Benefits</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        <li>Attractive interest rates higher than banks</li>
                                        <li>No TDS deduction on interest earned</li>
                                        <li>Loan facility available against deposit</li>
                                        <li>Safe and secure investment</li>
                                        <li>Nomination facility available</li>
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'rates' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Interest Rates</h2>
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Tenure
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Rate
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Maturity Amount (₹)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    12 Months
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    10%
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    5,500/-
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    24 Months
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    11%
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    6,161/-
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    36 Months
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    12%
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    7,025/-
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    74 Months
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    12%
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    10,000/-
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mt-8 bg-white shadow rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Example Investment Returns</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Principal Amount (₹)
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        12 Months
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        24 Months
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        36 Months
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        74 Months
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        5,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        5,500/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        6,161/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        7,025/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        10,000/-
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        10,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        11,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        12,322/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        14,050/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        20,000/-
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        20,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        22,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        24,644/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        28,100/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        40,000/-
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        50,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        55,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        61,605/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        70,246/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        100,000/-
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        100,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        110,000/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        123,210/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        140,493/-
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        200,000/-
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'eligibility' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Eligibility & Features</h2>
                                <div className="bg-white shadow rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Eligibility</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        <li>The applicant must be a member of the Society</li>
                                        <li>For Society membership related information, please contact our office</li>
                                    </ul>
                                </div>

                                <div className="bg-white shadow rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Terms & Conditions</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        <li><strong>Minimum Deposit Amount:</strong> Rs. 5,000/- and further in multiples of Rs. 500/-</li>
                                        <li><strong>Loan Facility:</strong> Maximum up to 90% against Deposit Amount. Interest Rate (Reducing) 2% extra.</li>
                                        <li><strong>Nomination Facility:</strong> Available</li>
                                        <li><strong>Premature Payment:</strong> Premature Payment guideline shall be applicable as per Society's Terms & Conditions</li>
                                    </ul>
                                </div>

                                <div className="bg-white shadow rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Special Features</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        <li>No TDS is applicable on the interest earned on deposits</li>
                                        <li>Offers higher interest rates compared to banks</li>
                                        <li>Safe and secure investment with government regulations</li>
                                        <li>Flexible tenure options</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Download Form */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Download FD Form</h3>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                                Download Application Form
                            </button>
                        </div>

                        {/* Related Schemes */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Deposit Scheme</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/schemes/fixed-deposit" className="text-orange-600 hover:text-orange-800 font-medium">
                                        Fixed Deposit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schemes/recurring-deposit" className="text-gray-600 hover:text-orange-600">
                                        Recurring Deposit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schemes/monthly-income" className="text-gray-600 hover:text-orange-600">
                                        MIS
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schemes/saving-account" className="text-gray-600 hover:text-orange-600">
                                        Saving Account
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Related Loans */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Loan</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/loans/emergency" className="text-gray-600 hover:text-orange-600">
                                        Emergency Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/loans/regular" className="text-gray-600 hover:text-orange-600">
                                        Regular Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/loans/against-deposit" className="text-gray-600 hover:text-orange-600">
                                        Loan Against Deposit
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Brochures */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Brochures</h3>
                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300 mb-2">
                                Download Brochure
                            </button>
                            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300">
                                Registration Certificate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FixedDeposit;