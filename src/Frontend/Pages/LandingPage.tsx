import React from 'react';
import { ClubsPreview } from '../Components/ClubsPreview';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <>
            <nav>Interlake Clubs</nav>
            <main>
                <Link to='/create'>Create</Link>
                <ClubsPreview />
            </main>
        </>
    );
};
