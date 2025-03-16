fetch("/includes/navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;
  });

function closeBtn() {
  document.querySelector("nav > ul").style.display = "none";
  document.querySelector(".overlay").style.display = "none";
  document.querySelector("nav > ul").setAttribute('aria-expanded', 'false');
}
function openBtn() {
  document.querySelector("nav > ul").style.display = "block";
  document.querySelector(".overlay").style.display = "flex";
  document.querySelector("nav > ul").setAttribute('aria-expanded', 'true');
}

window.addEventListener("resize", function() {
  if (window.innerWidth >= 768) {
    // Ensure navbar is shown and menu is closed
    document.querySelector("nav > ul").style.display = "flex";
    document.querySelector(".overlay").style.display = "none";
    document.querySelector("nav > ul").setAttribute('aria-expanded', 'false');
  } else {
    // Ensure mobile menu is hidden on mobile view
    document.querySelector("nav > ul").style.display = "none";
  }
});