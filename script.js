function showMessage(text) {
  const box = document.getElementById("messageBox");
  box.innerHTML = text;
  box.style.transform = "scale(1.1)";
  setTimeout(() => box.style.transform = "scale(1)", 300);
}
