document.addEventListener("DOMContentLoaded", function () {
  // Make phone number clickable
  const phoneElement = document.getElementById("phoneNumber");
  phoneElement.addEventListener("click", function () {
    window.location.href = `tel:${this.textContent}`;
  });

  // Add hover sound effect to requirement items
  const requirementItems = document.querySelectorAll(".requirement-item");
  requirementItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateX(-5px)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateX(0)";
    });
  });

  createFloatingWords();
});

function createFloatingWords() {
  const container = document.querySelector(".main-title-container");
  const words = [
    "✨ יש אור בעולם ✨",
    "✨ There is Light in the World ✨",
    "✨ есть свет В мире ✨",
  ];

  // יצירת שכבת רקע למילים המרחפות
  const backgroundLayer = document.createElement("div");
  backgroundLayer.className = "floating-background";
  container.insertBefore(backgroundLayer, container.firstChild);

  // הגדלת מספר האלמנטים ל-25
  for (let i = 0; i < 25; i++) {
    const floatingWord = document.createElement("div");
    floatingWord.className = "floating-word";
    floatingWord.textContent = words[Math.floor(Math.random() * words.length)];

    const startX = Math.random() * 200 - 100; // טווח רחב יותר
    const startY = Math.random() * 200 - 100;

    const duration = 20 + Math.random() * 30; // אנימציה איטית יותר
    const direction = Math.random() * 360;
    const scale = 0.5 + Math.random() * 0.8; // גדלים גדולים יותר
    const opacity = 0.15 + Math.random() * 0.25; // אטימות גבוהה יותר

    floatingWord.style.cssText = `
            left: ${startX}%;
            top: ${startY}%;
            transform: scale(${scale}) rotate(${direction}deg);
            opacity: ${opacity};
            animation: float ${duration}s infinite linear;
            animation-delay: -${Math.random() * duration}s;
        `;

    backgroundLayer.appendChild(floatingWord);
  }
}
