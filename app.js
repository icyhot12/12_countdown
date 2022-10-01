const auctionImage = document.querySelector('.auction-image');
const description = document.querySelector('.auction-description');

window.addEventListener('load', setTextHeight)
window.addEventListener('resize', setTextHeight)

function setTextHeight() {
    let imageHeight = auctionImage.offsetHeight;
    description.style.height = imageHeight;
}