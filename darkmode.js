const themeButton = document.getElementById("theme");

function onClick() {
  document.body.classList.toggle("dark");
}
themeButton.addEventListener("click", onClick);
