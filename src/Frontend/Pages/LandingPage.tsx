import React from 'react';
import { ClubsPreview } from '../Components/ClubsPreview';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/NavBar';

export const LandingPage = () => {
    return (
        <>
            <NavBar />
            <main>
                <Link to='/create'>Create</Link>
                <ClubsPreview />
            </main>
        </>
    );
};
