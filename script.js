// Reveal Secret Message
function revealSecret() {
    let message = document.getElementById("secretMessage");
    message.classList.remove("hidden");
    message.style.animation = "fadeIn 2s forwards";
}

// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart-float");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Generate floating hearts every second
setInterval(createHeart, 700);

// Love Quotes
const quotes = [
    "Love is not about how many days, months, or years you have been together. It’s about how much you love each other every day.",
    "Love is the bridge between two hearts.",
    "You are the reason why I believe in love.",
    "To love and be loved is to feel the sun from both sides."
];

function newQuote() {
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

// Share on WhatsApp
function shareOnWhatsApp() {
    let text = encodeURIComponent("Check out this beautiful Valentine's Day surprise! ❤️");
    let url = encodeURIComponent(window.location.href);
    window.open(`https://api.whatsapp.com/send?text=${text} ${url}`, "_blank");
}

// Share on Twitter
function shareOnTwitter() {
    let text = encodeURIComponent("Spread the love! 💖 Check out this special Valentine's Day page!");
    let url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
}

// Share on Facebook
function shareOnFacebook() {
    let url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
}
