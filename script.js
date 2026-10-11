document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("questionForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = form.querySelector("button");
    const originalText = button.textContent;

    button.textContent = "Question sent";
    button.disabled = true;

    form.reset();

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 2200);
  });
});
































































