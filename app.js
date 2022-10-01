const auctionImage = document.querySelector('.auction-image');
const description = document.querySelector('.auction-description');

window.addEventListener('load', setTextHeight)
window.addEventListener('resize', setTextHeight)

function setTextHeight() {
    let imageHeight = auctionImage.offsetHeight;
    description.style.height = imageHeight;
}

//time logic

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const giveaway = document.querySelector('.auction-title-small');
const deadline = document.querySelector('.deadline-container');
const items = document.querySelectorAll('.box h4');

let futureDate = new Date(2020,4,24,11,30,0);

