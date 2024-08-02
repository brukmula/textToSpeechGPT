const voiceSelect = document.getElementById('voice_select');
const convertButton = document.getElementById('convertButton');
const spinner = document.getElementById('spinner');
const filenameDisplay = document.getElementById('filenameDisplay');

let voice = 'alloy';

// When user selects a new voice adjust the value
voiceSelect.addEventListener('change', () => {
    voice = voiceSelect.value;
});

// When user clicks convert
convertButton.addEventListener('click', async () => {
    const textInput = document.getElementById('textInput').value;
    if (textInput.trim() === '') {
        alert('Please enter some text.');
        return;
    }

    convertButton.disabled = true; // Disable the button while processing
    spinner.hidden = false; // Show the spinner

    const fileName = prompt("Enter the filename for the download (without extension):");
    if (!fileName) {
        alert('Please enter a valid filename.');
        convertButton.disabled = false;
        spinner.hidden = true;
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
        audioPlayer.src = filePath; // Set the source for the audio element
        audioPlayer.hidden = false; // Make the audio player visible

        const responseBlob = await fetch(downloadLink).then(res => res.blob());
        const url = window.URL.createObjectURL(responseBlob);

        const tempLink = document.createElement('a');
        tempLink.href = url;
        tempLink.download = fileName + '.mp3'; // Append .mp3 extension to the filename
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(url);

        // Display the filename and hide the spinner
        filenameDisplay.textContent = `Downloaded: ${fileName}.mp3`;
        filenameDisplay.hidden = false;
    } catch (error) {
        console.error(error);
        alert('An error occurred while converting text to speech.');
    } finally {
        convertButton.disabled = false; // Re-enable the button after processing
        spinner.hidden = true; // Hide the spinner
    }
});