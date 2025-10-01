const dealBtn = document.getElementById("dealBtn");
dealBtn.addEventListener("click", () => {
  Toastify({
    text: "🔥 Today’s Deal: Buy a bottle of water get a pizza free! 🔥",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "#d62828",
  }).showToast();
});

const surpriseBtn = document.getElementById("surpriseBtn");
const surprises = [
  "Mystery Meat Madness",
  "Chocolate Pizza",
  "Pineapple Party",
  "Invisible Pizza (0 calories!)",
  "No Foods But Still Pay"
];
surpriseBtn.addEventListener("click", () => {
  const random = surprises[Math.floor(Math.random() * surprises.length)];
  Toastify({
    text: `🍕 Your surprise is: ${random}`,
    duration: 3000,
    gravity: "bottom",
    position: "right",
    backgroundColor: "#f77f00",
  }).showToast();
});

