// Confetti Animation
const button = document.getElementById('heartButton');
const surprise = document.getElementById('surprise');
const canvas = document.getElementById('confetti');

button.addEventListener('click', () => {
    surprise.classList.remove('hidden');
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