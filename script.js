// Play music on first click
window.addEventListener("click", function(){
    document.getElementById("bgMusic").play();
}, { once: true });

function showSurprise(){
    document.getElementById("surprise").style.display = "block";
}

// Floating Hearts
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";
    heart.style.animationDuration = Math.random() * 3 + 4 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createHeart, 700);

// Smooth Fade Slider
const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg",
    "images/pic7.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    slide.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        slide.src = images[index];
        slide.style.opacity = 1;
    }, 500);

}, 4000);