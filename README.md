# Text to Speech (ChatGPT)

A simple project using vanilla HTML and JavaScript to convert text into audio files 
using ChatGPT's text to speech feature.

## Before getting started
Before you get started, make sure you have node.js installed on your computer.
You can download it here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

You will also need to make sure you have access to OpenAI's API.
https://platform.openai.com/api-keys

This project sets the API Key as an environmental variable.
https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html

## Installation

1. Clone the repository

```
git clone https://github.com/brukmula/textToSpeechGPT
```

2. Navigate to the project directory

```terminal
cd textToSpeechGPT
```

3. Install the Dependencies

```
npm install 
```

## Usage

Once you have everything installed, you can type this into your terminal:

```bash
node server.js
```

This will launch the app onto your local device at the address: http://localhost:3000

## Features

- ### Choose GPT Voice
  Choose the ideal voice for your need from ChatGPT's selection of 6 voices. These include Nova,
  Shimmer, Echo, Onyx, Fable and Alloy.  

---
- ### Download Audio File
  Once the file is loaded, you can download the generated audio file by clicking on the 
  'Download' button. 


## Citations
- ChatGPT Text to Speech API Documentation: https://platform.openai.com/docs/guides/text-to-speech/overview
