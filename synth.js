document.addEventListener("DOMContentLoaded", () => {
  const presetButtons = document.querySelectorAll(".preset-btn");

  presetButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.classList.contains("active")) return;

      const parent = button.closest(".preset-buttons");

      parent.querySelectorAll(".preset-btn").forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const presetName = button.dataset.preset;
      console.log(`Выбран пресет: ${presetName}`);
    });
  });
});
