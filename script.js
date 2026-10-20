const button = document.getElementById("shareButton");

button.addEventListener("click", function () {
  // copy this page's address to the clipboard
  navigator.clipboard.writeText(window.location.href);

  // give feedback, then change it back after a moment
  button.textContent = "✅ 복사완료!";
  setTimeout(function () {
    button.textContent = "🔗 주소 복사하기";
  }, 1500);
});
