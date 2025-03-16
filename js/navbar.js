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
