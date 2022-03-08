const btn = document.querySelector(".toggle-btn");

const ul = document.querySelector("nav");

function toggleMenu() {
  ul.classList.toggle("shown");

  const menu = ul.classList.contains("shown");

  if (menu) {
    btn.src = "svg/close_black_24dp.svg";
  } else {
    btn.src = "svg/menu_black_24dp.svg";
  }
}

btn.addEventListener("click", toggleMenu);
