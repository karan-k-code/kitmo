// Check if the browser supports SpeechRecognition

const mic_bg = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; // Set language (optional)
    recognition.interimResults = false; // Show only final results
    recognition.maxAlternatives = 1; // Limit to 1 transcription alternative

    const startButton = document.getElementById("start");
    // const stopButton = document.getElementById("stop");
    const transcriptParagraph = document.getElementById("transcript");

    // Event when speech recognition starts
    recognition.onstart = () => {
      transcriptParagraph.value = "Listening...";
      startButton.disabled = true;
      // stopButton.disabled = false;
    };

    // Event when speech recognition ends
    recognition.onend = () => {
      startButton.disabled = false;
      // stopButton.disabled = true;
      submitForm();
    };

    // Event when speech recognition gets a result
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      transcriptParagraph.value = `${transcript}`;
      // console.log(`Confidence: ${event.results[0][0].confidence}`);
    };

    // Event if there’s an error
    recognition.onerror = (event) => {
      let jfjf = `Error: ${event.error}`;
      // console.log(jfjf);
      console.error(event.error);
    };

    // Start listening for voice input
    // startButton.addEventListener("click", () => {
    recognition.start();
    // });

    //   Stop listening
    //   stopButton.addEventListener('click', () => {
    //     recognition.stop();
    //   });
  } else {
    alart_mess("Sorry, your browser doesn't support speech recognition.");
  }
};

// small disply screen microphone funcation
const mic_fff = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; // Set language (optional)
    recognition.interimResults = false; // Show only final results
    recognition.maxAlternatives = 1; // Limit to 1 transcription alternative

    const startButton = document.getElementById("start");
    // const stopButton = document.getElementById("stop");
    const transcriptParagraph = document.getElementById("transcript_s");

    // Event when speech recognition starts
    recognition.onstart = () => {
      transcriptParagraph.value = "Listening...";
      startButton.disabled = true;
      // stopButton.disabled = false;
    };

    // Event when speech recognition ends
    recognition.onend = () => {
      startButton.disabled = false;
      // stopButton.disabled = true;
      submitForm_s();
    };

    // Event when speech recognition gets a result
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript || "search";
      transcriptParagraph.value = `${transcript}`;
      // console.log(`Confidence: ${event.results[0][0].confidence}`);
    };

    // Event if there’s an error
    recognition.onerror = (event) => {
      // let jfjf = `Error: ${event.error}`;
      transcriptParagraph.value = ``;
      console.error(event.error);
    };

    // Start listening for voice input
    // startButton.addEventListener("click", () => {
    recognition.start();
    // });

    //   Stop listening
    //   stopButton.addEventListener('click', () => {
    //     recognition.stop();
    //   });
  } else {
    alart_mess("Sorry, your browser doesn't support speech recognition.");
  }
};
