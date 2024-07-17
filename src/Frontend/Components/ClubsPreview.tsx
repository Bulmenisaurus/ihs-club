import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface ClubMetadata {
    name: string;
    description: string;
}

export const ClubsPreview = () => {
    const [data, setData] = useState<ClubMetadata[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/clubs').then((res) => {
            if (res === undefined) {
                throw new Error(`Received empty response`);
            }
            res.json().then((json) => {
                console.log('setting data');
                setData(json);
            });
        });
    }, []);

    return (
        <div id='clubs'>
            {data.map((club) => (
                <div className='club' key={club.name}>
                    <h1>
                        <Link to={`/club/${club.name}`}>{club.name}</Link>
                    </h1>
                    <p>{club.description}</p>
                </div>
            ))}
        </div>
    );
};
