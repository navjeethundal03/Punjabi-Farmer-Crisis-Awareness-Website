
// Get references to audio elements and the audio controller icon
const audio = document.getElementById("backgroundMusic");
const audioControllerIcon = document.getElementById("audioController");

// Initialize audio and set initial icon state
window.addEventListener("DOMContentLoaded", () => {
    audio.volume = 0.7;
    audio.play();
    audioControllerIcon.src = "resources/images/audioControllerOn.png";
});

// Function to toggle audio and icon
function toggleAudio() {
    if (audio.paused) {
        audio.play();
        audioControllerIcon.src = "resources/images/audioControllerOn.png";
    } else {
        audio.pause();
        audioControllerIcon.src = "resources/images/audioControllerOff.png";
    }
}

// Add click event listener for toggling audio
audioControllerIcon.addEventListener("click", toggleAudio);

// function for sources
const qq = document.querySelector(".dropdownContent");
function s() {
    qq.style.display = "flex";
}

function c() {
    qq.style.display = "none";
}

function showOrHide() {
if (qq.style.display === "none") {
  s()
} else {
  c()
}
}