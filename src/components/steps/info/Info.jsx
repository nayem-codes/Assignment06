import React from 'react';

const Info = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-90% flex justify-center items-center sm:gap-10  mt-20 gap-6 flex-wrap overflow-hidden '>
            <div className='py-14 text-center sm:text-left'>
                <h2 className='font-extrabold text-6xl text-white'>50K+</h2>
                <p className='text-gray-400'>Active Users</p>
            </div>
            <div className='py-14 flex items-center'>
                <div className='w-0.5 h-15 mr-28 bg-gray-400 hidden sm:block'></div>
                <div><h2 className='font-extrabold text-6xl text-white'>200+</h2>
                <p className='text-gray-400'>Premium Tools</p></div>
            </div>
            <div className='py-14 flex items-center'>
                <div className='w-0.5 h-15 mr-28 bg-gray-400 hidden sm:block'></div>
                <div><h2 className='font-extrabold text-6xl text-white'>4.9</h2>
                <p className='text-gray-400'>Rating</p></div>
            </div>
            
        </div>
    );
};

export default Info;