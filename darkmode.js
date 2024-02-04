const themeButton = document.getElementById("theme");

function onClick() {
  console.log("jahc");
  document.body.classList.toggle("dark");
}
themeButton.addEventListener("click", onClick);
