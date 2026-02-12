const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");

// YES button click
yesBtn.addEventListener("click", () => {
    alert("Yayyy ❤️ Date Fix 😄");
    createHearts(10);
});

// NO button hover
noBtn.addEventListener("mouseover", () => {
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    const yesRect = yesBtn.getBoundingClientRect();

    const maxX = window.innerWidth - btnWidth;
    const maxY = window.innerHeight - btnHeight;

    let x, y;
    let overlapping = true;
    let attempts = 0;

    while (overlapping && attempts < 100) {
        x = Math.random() * maxX;
        y = Math.random() * maxY;
        attempts++;

        overlapping = !(
            x + btnWidth < yesRect.left ||
            x > yesRect.right ||
            y + btnHeight < yesRect.top ||
            y > yesRect.bottom
        );
    }

    // Increase YES font size
    const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = (currentSize + 2) + "px";

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

// Heart creation
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        // Random starting position
        heart.style.left = Math.random() * (window.innerWidth - 20) + "px";
        heart.style.top = Math.random() * (window.innerHeight - 20) + "px";

        // Random size
        const size = 10 + Math.random() * 20;
        heart.style.width = size + "px";
        heart.style.height = size + "px";

        document.body.appendChild(heart);

        // Remove heart after animation
        heart.addEventListener("animationend", () => heart.remove());
    }
}
