// Countdown Timer
let timeLeft = 10;
const countdownElement = document.getElementById('countdown');
const hackedPopup = document.getElementById('hackedPopup');
const loadingMessageElement = document.getElementById('loadingMessage');

// Array of loading messages
const loadingMessages = [
    "Initializing system...",
    "Searching vulnerability...",
    "Penetrated...",
    "Gaining access...",
    "Root access changed successfully...",
    "Finalizing exploit..."
];

let messageIndex = 0;

// Function to update the loading message
function updateLoadingMessage() {
    loadingMessageElement.textContent = loadingMessages[messageIndex];
    messageIndex = (messageIndex + 1) % loadingMessages.length; // Cycle through messages
}

// Update the loading message every 2 seconds
setInterval(updateLoadingMessage, 2000);

// Update the countdown every second
const countdown = setInterval(() => {
    timeLeft--;
    countdownElement.textContent = `${timeLeft} seconds remaining`;

    // When the countdown reaches 0
    if (timeLeft <= 0) {
        clearInterval(countdown);
        countdownElement.textContent = "Time's up!";
        showHackedPopup();
    }
}, 1000);

// Function to show the hacked popup
function showHackedPopup() {
    hackedPopup.style.display = 'flex';
}

// Close the popup when the user clicks the close button
const closeButton = document.querySelector('.close');
closeButton.addEventListener('click', () => {
    hackedPopup.style.display = 'none';
});
