const btn = document.querySelector(".toggle-btn");

const ul = document.querySelector("nav");

function toggleMenu() {
  ul.classList.toggle("shown");

  const menu = ul.classList.contains("shown");

  if (menu) {
    btn.src = "svg/cross.svg";
  } else {
    btn.src = "svg/menu.svg";
  }
}

btn.addEventListener("click", toggleMenu);
