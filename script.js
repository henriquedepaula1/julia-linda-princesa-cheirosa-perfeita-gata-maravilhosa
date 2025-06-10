// Mensagem surpresa
document.getElementById("surpresa-btn").addEventListener("click", () => {
  document.getElementById("surpresa-msg").classList.remove("hidden");
});

// Corações flutuando
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
    
}

setInterval(criarCoracao, 500);

