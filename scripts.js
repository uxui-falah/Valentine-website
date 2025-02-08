/* General Styles */
body {
    font-family: 'Arial', sans-serif;
    background-image: url('valentine-background.jpg'); /* Add a cute Valentine's Day wallpaper */
    background-size: cover;
    background-position: center;
    color: #d32f2f;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    position: relative;
}

.container {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
    padding: 30px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 2;
}

h1 {
    font-size: 3em;
    margin-bottom: 10px;
    animation: float 3s ease-in-out infinite;
}

p {
    font-size: 1.5em;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
}

p:hover {
// Confetti Animation
const proposeButton = document.getElementById('proposeButton');
const proposal = document.getElementById('proposal');
const acceptButton = document.getElementById('acceptButton');
const acceptedMessage = document.getElementById('acceptedMessage');
const canvas = document.getElementById('confetti');
const romanticMusic = document.getElementById('romanticMusic');

proposeButton.addEventListener('click', () => {
    proposeButton.classList.add('hidden');
    proposal.classList.remove('hidden');
    romanticMusic.play(); // Play romantic music
});

acceptButton.addEventListener('click', () => {
    proposal.classList.add('hidden');
    acceptedMessage.classList.remove('hidden');
    startConfetti();
});

function startConfetti() {
    const confettiSettings = { target: 'confetti', max: 150, size: 1.5, animate: true };
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    // Stop confetti after 5 seconds
    setTimeout(() => {
        confetti.clear();
    }, 5000);
}
