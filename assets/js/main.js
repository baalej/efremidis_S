console.log('ready');

let announcementFirst = document.querySelector('#announcement-first');
let announcementSecond = document.querySelector('#announcement-second');

announcementFirst.addEventListener('click', (event) => {
    announcementFirst.style.display = 'none';
    announcementSecond.style.display = 'block';
})

announcementSecond.addEventListener('click', (event) => {
    announcementSecond.style.display = 'none';
    announcementFirst.style.display = 'block';
})