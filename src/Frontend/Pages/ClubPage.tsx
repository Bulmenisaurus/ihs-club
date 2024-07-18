import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { NavBar } from '../Components/NavBar';

import { BACKEND_URL } from '../Utils/backend';

export const ClubPage = () => {
    const { id } = useParams();
    const [content, setContent] = useState('Loading club info...');

    // TODO: is there a better way of displaying the content than in an iframe?

    useEffect(() => {
        const fetchContent = async () => {
            const clubContentRes = await fetch(`${BACKEND_URL}/club/${id}`);
            const content = await clubContentRes.text();
            setContent(content);
        };

        fetchContent();
    }, []);

    return (
        <>
            <NavBar />
            <main>
                <iframe id='frame' srcDoc={content}></iframe>
            </main>
        </>
    );
};
