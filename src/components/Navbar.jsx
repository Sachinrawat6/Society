import { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from './Banner';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [schemesOpen, setSchemesOpen] = useState(false);
    const [mobileSchemesOpen, setMobileSchemesOpen] = useState(false);

    return (
        <div>
            <Banner />
            <nav className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/">
                                <img src="logo.jpeg" alt="logo" width={80} height={80} />
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                            <Link
                                to="/"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about-us"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/membership"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                Membership
                            </Link>

                            {/* Schemes Dropdown */}
                            <div className="relative">
                                <button
                                    onClick={() => setSchemesOpen(!schemesOpen)}
                                    className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300 flex items-center"
                                >
                                    Schemes
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${schemesOpen ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {schemesOpen && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                                        <Link
                                            to="/schemes/fixed-deposit"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                                            onClick={() => setSchemesOpen(false)}
                                        >
                                            Fixed Deposit
                                        </Link>
                                        <Link
                                            to="/schemes/recurring-deposit"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                                            onClick={() => setSchemesOpen(false)}
                                        >
                                            Recurring Deposit
                                        </Link>
                                        <Link
                                            to="/schemes/monthly-income"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                                            onClick={() => setSchemesOpen(false)}
                                        >
                                            Monthly Income Scheme
                                        </Link>
                                        <Link
                                            to="/schemes/saving-account"
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                                            onClick={() => setSchemesOpen(false)}
                                        >
                                            Saving Account
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/loans"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                Loans
                            </Link>
                            <Link
                                to="/our-branches"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                Our Branches
                            </Link>
                            <Link
                                to="/news"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                News
                            </Link>
                            <Link
                                to="/contact-us"
                                className="hover:bg-orange-400 hover:text-white px-3 py-2 rounded-md text-md font-medium transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-blue-800">
                            <Link
                                to="/"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about-us"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/membership"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Membership
                            </Link>

                            {/* Mobile Schemes Dropdown */}
                            <div>
                                <button
                                    onClick={() => setMobileSchemesOpen(!mobileSchemesOpen)}
                                    className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                >
                                    Schemes
                                    <svg
                                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileSchemesOpen ? 'transform rotate-180' : ''}`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {mobileSchemesOpen && (
                                    <div className="pl-4">
                                        <Link
                                            to="/schemes/fixed-deposit"
                                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Fixed Deposit
                                        </Link>
                                        <Link
                                            to="/schemes/recurring-deposit"
                                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Recurring Deposit
                                        </Link>
                                        <Link
                                            to="/schemes/monthly-income"
                                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Monthly Income Scheme
                                        </Link>
                                        <Link
                                            to="/schemes/saving-account"
                                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            Saving Account
                                        </Link>
                                    </div>
                                )}
                            </div>

                            <Link
                                to="/loans"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Loans
                            </Link>
                            <Link
                                to="/our-branches"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Our Branches
                            </Link>
                            <Link
                                to="/news"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                News
                            </Link>
                            <Link
                                to="/contact-us"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-orange-400 hover:text-white"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;