// Ganti nama dan ucapan di bawah sesuai keinginanmu.
const namaPenerima = "Yusuf Riski mazriel";
const ucapanUlangTahun = "Semoga langkahmu selalu dimudahkan, hatimu dipenuhi kebahagiaan, dan satu per satu impianmu menjadi nyata. Tetap jadi dirimu yang istimewa!";

document.querySelector("#recipient").textContent = namaPenerima;
document.querySelector("#birthdayMessage").textContent = ucapanUlangTahun;

const surpriseBtn = document.querySelector("#surpriseBtn");
const surprise = document.querySelector("#surprise");
const confettiLayer = document.querySelector("#confetti");

surpriseBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surpriseBtn.textContent = "Kejutan Terbuka! 💖";
  surpriseBtn.disabled = true;
  buatConfetti();
});

function buatConfetti() {
  const warna = ["#ff6f91", "#ffd166", "#7b61a8", "#83d6c5", "#ff9f68"];

  for (let i = 0; i < 90; i++) {
    const potongan = document.createElement("span");
    potongan.className = "confetti";
    potongan.style.left = Math.random() * 100 + "%";
    potongan.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];
    potongan.style.animationDelay = Math.random() * 0.8 + "s";
    potongan.style.animationDuration = 2 + Math.random() * 2 + "s";
    confettiLayer.appendChild(potongan);

    potongan.addEventListener("animationend", () => potongan.remove());
  }
}
