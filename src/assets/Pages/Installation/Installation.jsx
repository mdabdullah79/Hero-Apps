import React, { useEffect, useState } from 'react';

const Installation = () => {
    const [installed,setInstalled] = useState([])
    useEffect(()=>{
        const savedList = JSON.parse(localStorage.getItem('installed'))
        if(savedList) setInstalled(savedList)
    },[])
    return (
        <>
        <div className='m-10 text-center'>
            <h1 className='text-5xl font-bold m-5'>Your Installed Apps</h1>
            <p className='text-gray-400 font-thin'>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className='flex items-center justify-between p-4'>
            <h1 className='font-bold'>{installed.length} Apps Found</h1>
            <label className='w-[200px]'>
                <select name="" id="" className='select select-bordered'>
                    <option value="">Sort By</option>
                    <option value="">High-Low</option>
                    <option value="">Low-High</option>
                </select>
            </label>
        </div>
        </>
    );
};

export default Installation;