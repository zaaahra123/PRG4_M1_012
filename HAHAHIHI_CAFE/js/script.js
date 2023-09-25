// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// ketika menu di klik
document.querySelector("#barmenu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar slide bar untuk menghilangkan nav menu
const barmenu = document.querySelector("#barmenu");

document.addEventListener("click", function (e) {
  if (!barmenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
