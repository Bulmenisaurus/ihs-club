import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BACKEND_URL } from '../Utils/backend';

export const ClubPage = () => {
    const { id } = useParams();
    const [content, setContent] = useState('he');

    const contentFrame = document.getElementById('frame') as HTMLIFrameElement;
    // contentFrame.contentWindow!.document.write(content);

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
            <iframe id='frame' srcDoc={content}></iframe>
        </>
    );
};
