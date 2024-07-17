import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ClubPage = () => {
    const { id } = useParams();
    const [content, setContent] = useState('he');

    const contentFrame = document.getElementById('frame') as HTMLIFrameElement;
    // contentFrame.contentWindow!.document.write(content);

    useEffect(() => {
        const fetchContent = async () => {
            const clubContentRes = await fetch(`http://localhost:3000/club/${id}`);
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
