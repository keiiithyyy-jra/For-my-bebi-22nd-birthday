function openSurprise() {
  document.getElementById("opening").style.display = "none";
  document.getElementById("website").classList.remove("hidden");
  startGame();
}

function reveal(button, message) {
  button.textContent = message;
  button.disabled = true;
}

let score = 0;

function startGame() {
  const game = document.getElementById("game");

  const interval = setInterval(() => {
    if (score >= 8) {
      clearInterval(interval);
      document.getElementById("gameMessage").textContent =
        "You caught every heart! My birthday wish for you is that you always know how loved you are. ♡";
      return;
    }

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = "♡";

    heart.style.left = Math.random() * 85 + "%";
    heart.style.top = Math.random() * 80 + "%";

    heart.onclick = () => {
      score++;
      heart.remove();
      document.getElementById("score").textContent =
        "Hearts: " + score + " / 8";
    };

    game.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }, 900);
}

function openLetter() {
  const letter = document.getElementById("letter");
  letter.classList.remove("hidden");

  const message =
    "Happy birthday, my love. I hope today reminds you just how special you are. Thank you for every smile, every laugh, and every little moment that has made knowing you such a beautiful part of my life. I hope this new year brings you closer to every dream you have, and I hope I get to celebrate many more birthdays with you. You deserve all the love in the world today and always. ♡";

  let i = 0;
  const typed = document.getElementById("typed");
  typed.textContent = "";

  const typing = setInterval(() => {
    typed.textContent += message.charAt(i);
    i++;

    if (i >= message.length) clearInterval(typing);
  }, 25);
}

function showFinal() {
  document.getElementById("finalMessage").classList.remove("hidden");
}