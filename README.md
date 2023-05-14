# **The Hidden Message Player** #
![]()

<hr>

## **Introduction** ##
I recently completed a personal project called the 33 RPM Player. That project was an audio player where users could upload any song and hear it played back at 33rpm, just like on a record player. The links to that project can be found here:<br>
[View Player](https://smcgdub.github.io/the_33rpm_player/)<br>
[View Code & Github Repository](https://github.com/smcgdub/the_33rpm_player) 

After i published the project a few people said my next project should be a player that plays songs in reverse. Urban legend is that some songs have hidden messages in them that are only audible when the song is played in reverse. 

I thought it would be an interesting project to do so hence the inspiration for this project. 

This is also the 2nd project that i have built using nothing more than prompts from Bing chat which is powered by ChatGPT 4. The full conversation with bing chat and all of the prompts, replies and code generated can be found in section 9 of this document. My summary on the project can be read in section 10.
<hr>

<details>
<summary>Table of Contents</summary>
<br>

## **1. User Experience (UX)** ##
* 1.1 Target audience
* 1.2 Visitor goals
* 1.3 User stories
* 1.4 Design choices

## **2. Features** ##
* 2.1 The Dropzone
* 2.2 Upload File
* 2.3 Play Button
* 2.4 Pause Button
* 2.5 Progress Bar
* 2.6 Song Duration
* 2.7 Song Name
* 2.8 Warning Message

## **3. Technologies/Languages Used** ##
* 3.1 ChatGPT via Bing
* 3.2 VSCode
* 3.3 HTML5
* 3.4 CSS
* 3.5 JavaScript
* 3.6 Favicon Generator 

## **4. Testing** ##
* 4.1 See [testing.md](testing.md) document 

## **5. Deployment** ##
* 5.1 Deployment
* 5.2 Cloning
* 5.3 Cloning Desktop

## **6. Credits** ##
* 6.1 Code 

## **7. Contact Me** ##
* 7.1 LinkedIn

## **8. Disclaimer** ##
* 8.1 Disclaimer on project

## **9. Prompts and code** ##
* 9.1 Prompts and code

## **10. Project summary** ##
* My summary on the project

</details>
<hr>

<details>
<summary>1. User Experience (UX)</summary>
<br>

### **1.1 - Target Audience** ###

Anyone who wishes to hear one of their favourite songs played in reverse to hear any potential hidden messages.

### **1.2 - Visitor goals** ###

As a visitor to The Hidden Message Player I want to be able to upload a song and hear it played in reverse.

### **1.3 - User Stories** ###

**As a visitor to The Hidden Message Player want/expect/need:**

1. A simple user interface that is easy to navigate.
2. To be able to upload a song and hear it played in reverse.
3. To be able to play and pause the song.
4. To be able to see the progress of the song as it plays
5. To be able to see the duration of the song with a timer.
6. To be able to see the name of the song that is playing.
7. To be able to see an error message if i try to upload a file that is not an audio file.

### **1.4 - Design Choices** ###

As i made this project completely using prompts in Bing chat i decided i would not make any design choices in advance and decide on the design choices as i go. 

**COLOURS**

I would prompt Bing chat with different requests as the project progressed and see what colour schemes the chat bot could come up with as we went through the CSS part of the project.

</details>

<hr>

<details>
<summary>2. Features</summary>
<br>

### **2.1 - The Dropzone** ###

The clearly marked drop zone is where desktop users must drag the audio file so it will load and start playing for them in reverse.

### **2.2 - Upload file** ###

For mobile users who don't have drag and drop functionality, they can click on the upload file button and select the audio file they wish to listen to in reverse.

### **2.3 - The play button** ###

Users will be able to press play if they have paused the song to resume it playing for them at the point they paused it. 

### **2.4 - The pause button** ###

Users will be able to pause the song at any point by pressing the pause button. .

### **2.5 - Progress bar** ###

As the song plays a progress bar will be shown to the user so they can see how far through the song they are. Users can also click on the progress bar to jump to any point in the song. 

### **2.6 - Song duration** ###

The duration of the song will be displayed to the user so they can see how long the song that is currently playing is. This will be displayed as in a 0:00 format.

### **2.7 - Song name** ###

The name of the song that is currently playing will be displayed on screen to the user so they can see what song is currently playing.

### **2.6 - Warning message** ###

If the user tries to upload a file that is not an audio file they will be presented with an error message.

</details>
<hr>

<details>
<summary>3. Technologies/Languages Used</summary>
<br>

* 3.1 - ChatGPT via Bing
* 3.2 - VSCode
* 3.3 - HTML5
* 3.4 - CSS
* 3.5 - JavaScript
* 3.6 - Favicon

</details>
<hr>

<details>
<summary>4. Testing</summary>
<br>

Testing information can be found in the [testing.md](testing.md) file

</details>
<hr>

<details>
<summary>5. Deployment</summary>
<br>

### **5.1 Deployment** ###

To deploy the site on Github i undertook the following steps:

1. Navigated to my profile page on Github
2. Selected this project from the repositories
3. Clicked on settings
4. Scroll down to the Github pages section
5. Click where is says source and in the dropdown menu select master
6. Click save

You will then receive a confirmation saying the page has been published and also be provided with the link where people can view your site.

The link to view the published site for this project can be found by clicking [Here]()

<hr>

### **5.2 Cloning** ###

You can clone the projects repository to your local computer by following the steps below:

Cloning a repository using the command line

1. On github navigate to the project repository. The link can be found here: 
2. Click on the button that says < >code
3. From the menu select HTTPS
4. Click on the clipboard icon on the right hand side of the URL
5. Open the terminal in your IDE
6. Change the current working directory to the location where you want the cloned directory.
7. In terminal type `git clone` and then paste the URL you copied earlier: 
8. Press Enter to create your local clone

<hr>

### **5.3 Cloning Desktop** ###

You can also clone the project using Github Desktop. To do this you can do the following:

1. Download Github Desktop if you do not already have it installed. The link can be found here: [GitHub Desktop](https://desktop.github.com/)
2. Sign in to GitHub and GitHub Desktop before you start to clone.
3. On github navigate to the project repository. The link can be found here: 
4. Click on the tab that says <>code
5. Click open with GitHub Desktop to clone and open the repository with GitHub Desktop.
6. Click Choose... and, using the Finder window, navigate to a local path where you want to clone the repository
7. Click clone

</details>
<hr>

<details>
<summary>6. Credits</summary>
<br>

### **6.1 Code** ###

All of the code for the project was generated using Bing chat powered by ChatGPT. I made only a handful of adjustments to the code myself. 

</details>

<hr>

<details>
<summary>7. Contact Me</summary>
<br>

If you wish to contact me you can do so on LinkedIn. My profile can be found here: [My LinkedIn](https://www.linkedin.com/in/stephenmcgovern01/)<br>

</details>
<hr>

<details>
<summary>8. Disclaimer</summary>
<br>

This website and all of its content was generated strictly for educational purposes only. There is no monetization of this website.

</details>

<hr>

<details>
<summary>9. Prompts and code</summary>
<br>

Below you can see the entire conversation i had with Bing chat to build this project. The prompts i asked and the responses Bing chat gave me. 

<hr>

<strong>Prompt 1:</strong><br> 
I want to build an audio file / song player on a web page. I need you to help me. We will need to create an audio player to start with. Users will drag and drop an audio file/song of their choice into a drop zone and when they do this the song will load into the player and start playing automatically. Can you generate this code for me

<strong>Response 1:</strong><br> 
Sure! Here’s a simple example of how you can create an audio player on a web page using HTML5 and JavaScript:

```html
<!DOCTYPE html>
<html>

<head>
  <title>Audio Player</title>
</head>

<body>
  <h1>Audio Player</h1>
  <input type="file" id="audioFile" accept="audio/*" />
  <br />
  <audio id="audioPlayer" controls></audio>

  <script>
    document.getElementById("audioFile").addEventListener("change", function () {
      var file = this.files[0];
      var audioPlayer = document.getElementById("audioPlayer");
      audioPlayer.src = URL.createObjectURL(file);
      audioPlayer.play();
    });
  </script>
</body>

</html>
```

This code creates an input element that allows the user to select an audio file from their device. When the user selects a file, the change event is triggered and the selected file is loaded into the audio element using the URL.createObjectURL() method. The play() method is then called on the audio element to start playing the selected file.

![](images/prompt_1.png)

Is this what you were looking for?<br>
<strong>1 of</strong> 

<strong>Prompt 2:</strong><br>
Can you create a drop zone located above the input. I want it to tell the user to drop their audio file / song into this box for the song to play

<strong>Response 2:</strong><br>
Sure! Here’s an example of how you can create a drop zone for audio files using HTML5 and JavaScript:

```html
<!DOCTYPE html>
<html>

<head>
  <title>Audio Player</title>
  <style>
    #dropZone {
      border: 2px dashed #bbb;
      border-radius: 5px;
      padding: 25px;
      text-align: center;
      font-size: 20px;
    }
  </style>
</head>

<body>
  <h1>Audio Player</h1>
  <div id="dropZone">Drop audio file here</div>
  <br />
  <audio id="audioPlayer" controls></audio>

  <script>
    var dropZone = document.getElementById("dropZone");
    var audioPlayer = document.getElementById("audioPlayer");

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

      var file = e.dataTransfer.files[0];
      audioPlayer.src = URL.createObjectURL(file);
      audioPlayer.play();
    });
  </script>
</body>

</html>
```

This code creates a `div` element with the id `dropZone` that serves as the drop zone for audio files. The `dragover` and `dragleave` events are used to change the background color of the drop zone when a file is being dragged over it. When a file is dropped onto the drop zone, the `drop` event is triggered and the selected file is loaded into the audio element using the `URL.createObjectURL()` method. The `play()` method is then called on the audio element to start playing the selected file.

![](/images/prompt_2.png)
<strong>2 of</strong>







</details>
<hr>

<details>
<summary>10. Project summary</summary>
<br>

<strong>Functionality</strong><br>

<strong>Design and aesthetics</strong><br>


<strong>Development time</strong><br>

<strong>Code summary</strong><br>
<strong>HTML:</strong> <br>
<strong>CSS:</strong> <br>
<strong>Javascript:</strong> <br>
<strong>Total lines of code:</strong> 

<strong>Final thoughts</strong><br>
</details>

