var dropZone = document.getElementById("dropZone");
var playButton = document.getElementById("playButton");
var pauseButton = document.getElementById("pauseButton");
var fileInput = document.getElementById("fileInput");
var songName = document.getElementById("songName");
var progressContainer = document.getElementById(
  "progressContainer"
);
var progressBar = document.getElementById("progressBar");
var timer = document.getElementById("timer");

var audioContext = new AudioContext();
var source;
var buffer;
var startTime;
var pauseTime;

dropZone.addEventListener("dragover", function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.style.background = "#eee";
});

dropZone.addEventListener("dragleave", function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.style.background = "";
});

dropZone.addEventListener("drop", function (e) {
  e.preventDefault();
  e.stopPropagation();
  this.style.background = "";

  if (source) {
    source.stop();
    source = null;
    startTime = null;
    pauseTime = null;

    // Reset the progress bar
    progressBar.style.width =
      "0%";
  }

  var file =
    e.dataTransfer.files[0];

  if (
    file.type.startsWith(
      "audio/"
    )
  ) {
    handleFile(file);
  } else {
    dropZone.textContent =
      "Sorry, only audio files can be uploaded.";
  }
});

fileInput.addEventListener(
  "change",
  function (e) {
    if (source) {
      source.stop();
      source = null;
      startTime =
        null;
      pauseTime =
        null;

      // Reset the progress bar
      progressBar.style.width =
        "0%";
    }

    var file =
      e.target.files[0];
    handleFile(file);
  }
);

document.addEventListener(
  "dragover",
  function (e) {
    e.preventDefault();
  }
);

document.addEventListener(
  "drop",
  function (e) {
    e.preventDefault();
  }
);

playButton.addEventListener(
  "click",
  function () {
    if (
      !source &&
      buffer &&
      pauseTime !==
      undefined
    ) {
      playBuffer(
        buffer,
        pauseTime
      );
      pauseTime =
        null;

      // Start updating the progress bar and timer
      updateProgressBarAndTimer();
    }
  }
);

pauseButton.addEventListener(
  "click",
  function () {
    if (source) {
      source.stop();
      source =
        null;

      pauseTime =
        audioContext.currentTime -
        startTime;

      startTime =
        null;

      // Stop updating the progress bar and timer
      clearInterval(
        updateProgressBarAndTimerInterval
      );
    }
  }
);

progressContainer.addEventListener(
  "click",
  function (e) {
    if (
      buffer &&
      source
    ) {
      // Calculate the new time based on the click position
      var newTime =
        (e.offsetX /
          progressContainer.offsetWidth) *
        buffer.duration;

      // Stop the current playback
      source.stop();
      source =
        null;

      // Start playing from the new time
      playBuffer(
        buffer,
        newTime
      );
    }
  }
);

var updateProgressBarAndTimerInterval;

function updateProgressBarAndTimer() {
  updateProgressBarAndTimerInterval =
    setInterval(function () {
      if (
        buffer &&
        source &&
        startTime !==
        null
      ) {
        // Calculate the current time
        var currentTime =
          audioContext.currentTime -
          startTime;

        // Calculate the progress as a percentage
        var progress =
          (currentTime /
            buffer.duration) *
          100;

        // Update the progress bar width
        progressBar.style.width =
          progress + "%";

        // Update the timer text
        timer.textContent =
          formatTime(currentTime) +
          " / " +
          formatTime(buffer.duration);
      }
    }, 100);
}

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);

  return (
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0")
  );
}

function handleFile(file) {
  var reader = new FileReader();

  reader.onload = function (
    e
  ) {
    audioContext.decodeAudioData(
      e.target.result,
      function (
        decodedData
      ) {
        buffer =
          decodedData;
        playBuffer(buffer);
        updateProgressBarAndTimer(); // Start updating the progress bar and timer
      });
  };

  reader.readAsArrayBuffer(file);

  playButton.disabled = false;
  pauseButton.disabled = false;

  // Display the file name without the extension
  var fileNameWithoutExtension =
    file.name.substr(0, file.name.lastIndexOf(".")) ||
    file.name;

  songName.textContent =
    "Song playing: " +
    fileNameWithoutExtension;

  // Reset the drop zone text
  dropZone.textContent =
    "Drop audio file here";
}

function playBuffer(buffer, offset) {
  source = audioContext.createBufferSource();

  // Create a reversed buffer
  var reversedBuffer =
    audioContext.createBuffer(
      buffer.numberOfChannels,
      buffer.length,
      buffer.sampleRate
    );

  for (
    var channel = 0; channel <
    buffer.numberOfChannels; channel++
  ) {
    var channelData =
      buffer.getChannelData(channel);
    var reversedChannelData =
      reversedBuffer.getChannelData(channel);

    for (
      var i = 0; i <
      channelData.length; i++
    ) {
      reversedChannelData[i] =
        channelData[
          channelData.length -
          i -
          1
        ];
    }
  }

  source.buffer = reversedBuffer;

  source.connect(audioContext.destination);

  startTime =
    audioContext.currentTime -
    (offset || 0);

  source.start(0, offset || 0);
}