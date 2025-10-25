import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <img className='m-10' src='../error-404.png' alt="" />
            <h1 className='text-5xl font-bold mb-3.5'>Oops, page not found!</h1>
            <p>The page you are looking for is not available.</p>
        </div>
    );
};

export default ErrorPage;