import React from 'react';
import Banner from '../../Components/Banner/Banner';
import HomeApps from '../HomeApps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <HomeApps data={data}></HomeApps>
        </div>
    );
};

export default Home;