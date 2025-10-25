import React from 'react';

const AppNotFound = () => {
    return (
        <div className='flex flex-col items-center justify-center m-5'>
            <img className='m-3q' src='/App-Error.png' alt="" />
            <h1 className='text-5xl font-bold mb-3.5'>OPPS!! APP NOT FOUND</h1>
            <p>The page you are looking for is not available.</p>
        </div>
    );
};

export default AppNotFound;