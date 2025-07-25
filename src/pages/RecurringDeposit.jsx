import { useState } from 'react';
import { Link } from 'react-router-dom';

const RecurringDeposit = () => {
    const [activeTab, setActiveTab] = useState('rates');
    const [activeTenure, setActiveTenure] = useState('12');

    const tenureData = {
        '12': {
            rate: '10%',
            data: [
                { monthly: 500, total: 6000, interest: 325, maturity: 6325 },
                { monthly: 1000, total: 12000, interest: 650, maturity: 12650 },
                { monthly: 2000, total: 24000, interest: 1300, maturity: 25300 },
                { monthly: 5000, total: 60000, interest: 3250, maturity: 63250 },
                { monthly: 10000, total: 120000, interest: 6500, maturity: 126500 }
            ]
        },
        '24': {
            rate: '11%',
            data: [
                { monthly: 500, total: 12000, interest: 1414, maturity: 13414 },
                { monthly: 1000, total: 24000, interest: 2829, maturity: 26829 },
                { monthly: 2000, total: 48000, interest: 5657, maturity: 53657 },
                { monthly: 5000, total: 120000, interest: 14143, maturity: 134143 },
                { monthly: 10000, total: 240000, interest: 28287, maturity: 268287 }
            ]
        },
        '36': {
            rate: '12%',
            data: [
                { monthly: 500, total: 18000, interest: 3562, maturity: 21562 },
                { monthly: 1000, total: 36000, interest: 7125, maturity: 43125 },
                { monthly: 2000, total: 72000, interest: 14250, maturity: 86250 },
                { monthly: 5000, total: 180000, interest: 35634, maturity: 215624 },
                { monthly: 10000, total: 360000, interest: 71248, maturity: 431248 }
            ]
        },
        '48': {
            rate: '12%',
            data: [
                { monthly: 500, total: 24000, interest: 6540, maturity: 30540 },
                { monthly: 1000, total: 48000, interest: 13080, maturity: 61080 },
                { monthly: 2000, total: 96000, interest: 26160, maturity: 122160 },
                { monthly: 5000, total: 240000, interest: 65399, maturity: 305399 },
                { monthly: 10000, total: 480000, interest: 130798, maturity: 610798 }
            ]
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Recurring Deposit
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
                        {activeTab === 'rates' && (
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4">Recurring Deposit Schemes</h2>
                                <p className="text-gray-600 mb-6">
                                    Invest in RECURRING DEPOSIT. We offer attractive returns with stability and safety for your investments.
                                </p>

                                {/* Tenure Selector */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    <button
                                        onClick={() => setActiveTenure('12')}
                                        className={`${activeTenure === '12' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} py-3 px-4 rounded-lg shadow-sm border border-gray-200 font-medium`}
                                    >
                                        12 Months @ 10%
                                    </button>
                                    <button
                                        onClick={() => setActiveTenure('24')}
                                        className={`${activeTenure === '24' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} py-3 px-4 rounded-lg shadow-sm border border-gray-200 font-medium`}
                                    >
                                        24 Months @ 11%
                                    </button>
                                    <button
                                        onClick={() => setActiveTenure('36')}
                                        className={`${activeTenure === '36' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} py-3 px-4 rounded-lg shadow-sm border border-gray-200 font-medium`}
                                    >
                                        36 Months @ 12%
                                    </button>
                                    <button
                                        onClick={() => setActiveTenure('48')}
                                        className={`${activeTenure === '48' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'} py-3 px-4 rounded-lg shadow-sm border border-gray-200 font-medium`}
                                    >
                                        48 Months @ 12%
                                    </button>
                                </div>

                                {/* Rate Table */}
                                <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
                                    <div className="px-6 py-4 border-b border-gray-200">
                                        <h3 className="text-lg font-medium text-gray-900">
                                            R.D. SCHEME IN {activeTenure} MONTHS @ {tenureData[activeTenure].rate}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">(Compound Interest rates shall be applied)</p>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Monthly Deposit (₹)
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Total Deposit (₹)
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Interest (₹)
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Maturity Amount (₹)
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {tenureData[activeTenure].data.map((row, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {row.monthly.toLocaleString()}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {row.total.toLocaleString()}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {row.interest.toLocaleString()}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {row.maturity.toLocaleString()}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                {/* All Tenures Table */}
                                <div className="bg-white shadow rounded-lg overflow-hidden">
                                    <div className="px-6 py-4 border-b border-gray-200">
                                        <h3 className="text-lg font-medium text-gray-900">All Tenures at a Glance</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Period
                                                    </th>
                                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Interest Rate (%)
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        12 Months
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        10
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        24 Months
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        11
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        36 Months
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        12
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        More than 36 Months
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        12
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
                                        <li><strong>Minimum Deposit Amount:</strong> Rs. 500/- per month (minimum Rs. 5,000/- total)</li>
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
                                        <li>Flexible monthly deposit amounts</li>
                                        <li>Encourages regular savings habit</li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Download Form */}
                        <div className="bg-white shadow rounded-lg p-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Download RD Form</h3>
                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition duration-300">
                                Download Application Form
                            </button>
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
                                    <Link to="/schemes/recurring-deposit" className="text-orange-600 hover:text-orange-800 font-medium">
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

export default RecurringDeposit;