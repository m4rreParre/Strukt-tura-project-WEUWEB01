function closeBtn() {
    console.log("yo")
    document.querySelector('nav > ul').style.display = 'none';
}

fetch('/includes/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

