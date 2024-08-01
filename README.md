# Text to Speech (ChatGPT)

A simple project using vanilla HTML and JavaScript to convert text into audio files 
using ChatGPT's text to speech feature.

## Before getting started
Before you get started, make sure you have node.js installed on your computer.
You can download it here: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm


## Set up your API key for all projects (recommended)
The main advantage to making your API key accessible for all projects is that the SDK will automatically detect it and use it without having to write any code.
<details>
  <summary style="font-size: large">MAC</summary>

### 1. Open Terminal:
You can find it in the Applications folder or search for it using Spotlight (Command + Space).

### 2.Edit bash profile: 
Use the command <span style="background-color: #ccc; color: black">nano ~/.bash_profile </span>  or 
<span style="background-color: #ccc; color: black">nano ~/.zshrc </span>
(for newer MacOS versions) to open the profile file in a text editor.

### 3. Add Environment Variable: 
In the editor, ensure you have set your API key as shown below, replacing your-api-key-here with your actual API key:

```angular2html
export OPENAI_API_KEY='your-api-key-here'
```

### 1. Save and exit: 
Press Ctrl+O to write the changes, followed by Ctrl+X to close the editor.

### 2. Load your profile: 
Use the command source ~/.bash_profile or source ~/.zshrc to load the updated profile.

### 3. Verification: 
Verify the setup by typing echo $OPENAI_API_KEY in the terminal. It should display your API key.

</details>

<details>
  <summary style="font-size: large">Windows</summary>

### 1. Open command prompt: 
You can find it by searching "cmd" in the start menu.

### 2. Set environment variable in the current session: 
To set the environment variable in the current session, use the command below, replacing your-api-key-here with your actual API key:

```terminal
setx OPENAI_API_KEY "your-api-key-here"
```

This command will set the OPENAI_API_KEY environment variable for the current session.

### 1. Permanent setup: To make the setup permanent, add the variable through the system properties as follows:

- Right-click on 'This PC' or 'My Computer' and select 'Properties'.
- Click on 'Advanced system settings'.
- Click the 'Environment Variables' button.
- In the 'System variables' section, click 'New...' and enter OPENAI_API_KEY as the variable name and your API key as the variable value.

### 2. Verification: 
To verify the setup, reopen the command prompt and type the command below. It should display your API key: 

```
echo %OPENAI_API_KEY%
```
</details>


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
