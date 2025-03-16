const typed1 = new Typed('#header-typed', {
    strings: ["använder flexbox?","förstår grids?", "centrerar divs?", "strukturerar din hemsida?"],
    typeSpeed: 40,
    backSpeed: 30,
    backDelay: 1500,
    loop: true
});

function adjustBRTag() {
    const h2 = document.querySelector('h2');
    const brTag = h2.querySelector('br');

    if (window.innerWidth > 768 && brTag) {
        // Ta bort <br>-taggen om skärmstorleken är över 768px
        brTag.remove();
    } else if (window.innerWidth <= 768 && !brTag) {
        // Om skärmen är mindre än 768px, lägg till <br> om det inte finns
        const newBr = document.createElement('br');
        h2.appendChild(newBr);
    }
}

window.addEventListener('resize', adjustBRTag);
window.addEventListener('load', adjustBRTag);