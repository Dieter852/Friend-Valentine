const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const teddyContainer = document.getElementById("teddyContainer");
const card = document.querySelector(".card");

// Function to move button randomly
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

// Desktop hover
noBtn.addEventListener("mouseover", moveButton);

// Mobile tap
noBtn.addEventListener("click", function(e) {
    e.preventDefault(); // stops accidental click
    moveButton();
});

// YES button action
yesBtn.addEventListener("click", function() {
    card.style.display = "none";
    teddyContainer.classList.remove("hidden");
});