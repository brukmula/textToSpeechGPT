import fs from 'fs';
import path from 'path';
import express from 'express';
import OpenAI from 'openai';

const app = express();
const port = 3000;
const openai = new OpenAI();
const speechFilePath = path.resolve('public/speechTest.mp3');

app.use(express.json());
app.use(express.static('public'));

// Server POST
app.post('/convert', async (req, res) => {
    const { text, selected_voice } = req.body;

    if (!text) {
        return res.status(400).json({ error: 'Text input is required.' });
    }

    // ChatGPT API information
    try {
        const mp3 = await openai.audio.speech.create({
            model: 'tts-1',
            voice: selected_voice,
            input: text,
        });

        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(speechFilePath, buffer);

        res.json({ filePath: '/speechTest.mp3', downloadLink: `/download` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to convert text to speech.' });
    }
});

// Route to download the audio file
app.get('/download', (req, res) => {
    res.download(speechFilePath, 'speechTest.mp3', (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error occurred during download');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});