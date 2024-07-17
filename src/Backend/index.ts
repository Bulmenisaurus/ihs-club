import express, { json } from 'express';
import * as fs from 'node:fs';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

interface ClubData {
    name: string;
    description: string;
    content: string;
}

// TODO: use an actual database maybe

app.get('/clubs', (req, res) => {
    const clubData: ClubData[] = JSON.parse(fs.readFileSync('./data/clubs.json', 'utf-8'));
    res.contentType('json');
    res.send(
        clubData.map((club) => ({
            name: club.name,
            description: club.description,
        }))
    );
});

app.get('/club/:clubId', (req, res) => {
    const { clubId } = req.params;
    const clubsData: ClubData[] = JSON.parse(fs.readFileSync('./data/clubs.json', 'utf-8'));
    const clubData = clubsData.find((club) => club.name === clubId);

    if (clubData === undefined) {
        res.status(404).send(`No club with name ${clubId} found`);
    } else {
        res.send(clubData.content);
    }
});

app.post('/create', (req, res) => {
    console.log(`Received req ${JSON.stringify(req.body)}`);

    const clubData: any[] = JSON.parse(fs.readFileSync('./data/clubs.json', 'utf-8'));
    clubData.push({
        name: req.body.name,
        description: req.body.description,
        content: req.body.content,
    });

    fs.writeFileSync('./data/clubs.json', JSON.stringify(clubData));
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
