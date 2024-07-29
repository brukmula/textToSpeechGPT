const voiceSelect = document.getElementById('voice_select');
const convertButton = document.getElementById('convertButton');

let voice = 'alloy';

// When user select a new voice adjust the value
voiceSelect.addEventListener('change', () => {
    voice = voiceSelect.value;
});

convertButton.addEventListener('click', async () => {
    const textInput = document.getElementById('textInput').value;
    if (textInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    try {
        const response = await fetch('/convert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: textInput,
                selected_voice: voice
            })
        });

        if (!response.ok) {
            throw new Error('Failed to convert text to speech.');
        }

        const { filePath, downloadLink } = await response.json();

        const audioPlayer = document.getElementById('audioPlayer');
        const downloadAnchor = document.getElementById('downloadLink');

        audioPlayer.src = filePath; // Set the source for the audio element
        audioPlayer.hidden = false; // Make the audio player visible

        downloadAnchor.href = downloadLink; // Set the href for the download link
        downloadAnchor.hidden = false; // Make the download link visible
    } catch (error) {
        console.error(error);
        alert('An error occurred while converting text to speech.');
    }
});
