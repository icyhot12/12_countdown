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
const weekdaysArray = [
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

let futureDate = new Date(2022, 9, 2, 11, 16, 30);

const year = futureDate.getFullYear();
let month = futureDate.getMonth();
let dateNumber = futureDate.getDate();
const hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let weekDayNumber = futureDate.getDay();

monthText = months[month];

let weekDayFinal = weekdaysArray[weekDayNumber];

function numberFormat(value) {
    if (value < 10) {
        return (value = '0' + value);
    }
    return value
};

giveaway.textContent = `giveaway ends on ${weekDayFinal}, ${numberFormat(dateNumber)} ${monthText} ${year} ${hours}:${numberFormat(minutes)}`;

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSecond = 1000;

function getTimeDif() {
    let currentDate = new Date();
    let dateDif = futureDate - currentDate;

    let remainDays = Math.floor(dateDif / oneDay);
    let remainHours = Math.floor(dateDif / oneHour) - remainDays * 24;
    let remainMinutes = Math.floor(dateDif / oneMinute) - remainDays * 24 * 60 - remainHours * 60;
    let remainSeconds = Math.floor(dateDif / oneSecond) - remainDays * 24 * 60 * 60 - remainHours * 60 * 60 - remainMinutes * 60;

    const values = [remainDays, remainHours, remainMinutes, remainSeconds];

    // function format 

    items.forEach((item, index) => {
        item.innerHTML = numberFormat(values[index]);
    })

    if(dateDif <0) {
        clearInterval(countdown)
    }

};

let countdown = setInterval(getTimeDif, 1000);
getTimeDif();