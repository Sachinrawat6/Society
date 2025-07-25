import React from 'react';
import { FaEnvelope, FaClock, FaMapMarkerAlt, FaCreditCard } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='bg-amber-500 text-gray-800 py-3 px-4 shadow-md'>
            <div className='max-w-full mx-auto'>
                <div className='flex flex-col md:flex-row justify-center items-center  gap-4 text-sm md:text-base'>
                    {/* Email */}
                    <div className='flex items-center gap-2'>
                        <FaEnvelope className='text-gray-700' />
                        <a href="mailto:shreedhanlaxmi2024@gmail.com" className='hover:text-gray-900 transition-colors'>
                            shreedhanlaxmi2024@gmail.com
                        </a>
                    </div>

                    {/* Working Hours */}
                    <div className='flex items-center gap-2'>
                        <FaClock className='text-gray-700' />
                        <span>Mon - Sun: 10:00 am - 07:00 pm (Tues - Off)</span>
                    </div>

                    {/* Address - Hidden on small screens */}
                    <div className='hidden md:flex items-center gap-2'>
                        <FaMapMarkerAlt className='text-gray-700' />
                        <span>C-324, Street No. 9, West Vinod Nagar, Delhi-110092</span>
                    </div>

                    {/* Payment Button */}
                    <button className='bg-amber-600 cursor-pointer hover:bg-amber-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors shadow-sm hover:shadow-md'>
                        <FaCreditCard />
                        <span>Online Payment</span>
                    </button>
                </div>

                {/* Mobile Address - Visible only on small screens */}
                <div className='md:hidden mt-3 flex items-center gap-2'>
                    <FaMapMarkerAlt className='text-gray-700' />
                    <span className='text-xs'>C-324, Street No. 9, West Vinod Nagar, Delhi-110092</span>
                </div>
            </div>
        </div>
    );
};

export default Banner;