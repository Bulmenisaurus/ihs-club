import React from 'react';
import { BACKEND_URL } from '../Utils/backend';

const submitClub = async () => {
    const clubNameInput = document.getElementById('club-name') as HTMLInputElement;
    const clubName = clubNameInput.value;

    const clubDescriptionInput = document.getElementById('description') as HTMLTextAreaElement;
    const clubDescription = clubDescriptionInput.value;

    const clubContentInput = document.getElementById('club-file') as HTMLInputElement;
    const files = clubContentInput.files;

    if (files === null || files.length === 0) {
        throw new Error('No files attached');
    }

    const file = files[0];
    const fileText = await file.text();
    console.log({ fileText });

    // TODO: redirect user to club page immediately
    fetch(`${BACKEND_URL}/create`, {
        method: 'POST',
        body: JSON.stringify({ name: clubName, description: clubDescription, content: fileText }),
        headers: { 'Content-Type': 'application/json' },
    });
};

export const CreatePage = () => {
    return (
        <>
            <nav>Create</nav>
            <main>
                <label>
                    Name
                    <input type='text' id='club-name' />
                </label>
                <label>
                    Add a short description
                    <textarea id='description'></textarea>
                </label>
                <label>
                    Content
                    <input type='file' name='' id='club-file' />
                </label>
                <button onClick={submitClub}>Submit</button>
            </main>
        </>
    );
};
