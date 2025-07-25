import { useState } from 'react';
import { Link } from 'react-router-dom';

const MonthlyIncomeScheme = () => {
    const [activeTab, setActiveTab] = useState('rates');

    const schemeData = [
        { deposit: 50000, monthlyIncome: 500, maturity: 50000 },
        { deposit: 100000, monthlyIncome: 1000, maturity: 100000 },
        { deposit: 200000, monthlyIncome: 2000, maturity: 200000 },
        { deposit: 300000, monthlyIncome: 3000, maturity: 300000 },
        { deposit: 500000, monthlyIncome: 5000, maturity: 500000 },
        { deposit: 1000000, monthlyIncome: 10000, maturity: 1000000 }
    ];

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-IN').format(amount);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Monthly Income Scheme
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Deposit One Time and Get Monthly Income (MIS - 74 Months @12% P.A)
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
                                    onClick={() => setActiveTab('rates')}
                                    className={`${activeTab === 'rates' ? 'border-orange-500 text-orange-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                                >
                                    Scheme Details
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
                        {activeTab === 'rates' && (
                            <div>
                                <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
                                    <div className="px-6 py-4 border-b border-gray-200">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            Monthly Income Scheme Plan
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">(Simple Interest Rates shall be applied)</p>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Deposit (₹)
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        MIS Per Month (₹)
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Maturity Value (₹)
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {schemeData.map((scheme, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {formatCurrency(scheme.deposit)}/-
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {formatCurrency(scheme.monthlyIncome)}/-
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {formatCurrency(scheme.maturity)}/-
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="bg-white shadow rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Key Features</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h4 className="font-medium text-orange-800 mb-2">Monthly Income</h4>
                                            <p className="text-gray-600">Receive fixed monthly payments from your deposit</p>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h4 className="font-medium text-orange-800 mb-2">Principal Protection</h4>
                                            <p className="text-gray-600">Get your full deposit amount back at maturity</p>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h4 className="font-medium text-orange-800 mb-2">Higher Returns</h4>
                                            <p className="text-gray-600">12% annual interest paid monthly</p>
                                        </div>
                                        <div className="bg-orange-50 p-4 rounded-lg">
                                            <h4 className="font-medium text-orange-800 mb-2">Tax Benefits</h4>
                                            <p className="text-gray-600">No TDS on interest earned</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'eligibility' && (
                            <div>
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
                                        <li><strong>Scheme Duration:</strong> 74 months (6 years 2 months)</li>
                                        <li><strong>Minimum Deposit Amount:</strong> Rs. 50,000/- and further in multiples of Rs. 100/-</li>
                                        <li><strong>Nomination Facility:</strong> Available</li>
                                        <li><strong>Interest Payment:</strong> Monthly on fixed date</li>
                                        <li><strong>Premature Withdrawal:</strong> Terms and conditions apply</li>
                                    </ul>
                                </div>

                                <div className="bg-white shadow rounded-lg p-6">
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Special Features</h3>
                                    <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                        <li>No TDS is applicable on the interest earned on deposits</li>
                                        <li>Offers higher interest rates compared to regular savings</li>
                                        <li>Interest on the Deposits is disbursed monthly</li>
                                        <li>Principal amount returned in full at maturity</li>
                                        <li>Ideal for retirees or those needing regular income</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Download Form */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Download MIS Form</h3>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                                Download Application Form
                            </button>
                        </div>

                        {/* Calculator */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Income Calculator</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Deposit Amount (₹)</label>
                                    <input
                                        type="number"
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                                        placeholder="e.g. 100000"
                                    />
                                </div>
                                <div className="bg-gray-50 p-4 rounded-md">
                                    <p className="text-sm text-gray-500">Estimated Monthly Income</p>
                                    <p className="text-xl font-semibold text-orange-600">₹1,000</p>
                                    <p className="text-xs text-gray-500 mt-1">@12% annual interest rate</p>
                                </div>
                            </div>
                        </div>

                        {/* Related Schemes */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Deposit Scheme</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="/schemes/fixed-deposit" className="text-gray-600 hover:text-orange-600">
                                        Fixed Deposit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schemes/recurring-deposit" className="text-gray-600 hover:text-orange-600">
                                        Recurring Deposit
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schemes/monthly-income" className="text-orange-600 hover:text-orange-800 font-medium">
                                        Monthly Income Scheme
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/schemes/saving-account" className="text-gray-600 hover:text-orange-600">
                                        Saving Account
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

export default MonthlyIncomeScheme;