// let card = document.querySelector('.full-card');
// card.addEventListener( 'click', function() {
//     card.classList.toggle('is-flipped');
// });

// let link_icons = document.getElementsByTagName('a');
// for (let icon of link_icons) {
//     icon.onclick = (event) => event.stopPropagation();
// }

const businessCard = document.getElementById('businessCard');

businessCard.addEventListener('click', function() {
    businessCard.style.transform = 'rotateX(-180deg)';
});
