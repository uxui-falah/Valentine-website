// Countdown Timer
let timeLeft = 10;
const countdownElement = document.getElementById('countdown');
const hackedPopup = document.getElementById('hackedPopup');

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
