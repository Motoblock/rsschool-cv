const navlist = document.querySelector('.nav')

navlist.addEventListener('click', function () {
    navlist.classList.hidden = true;
    navlist.classList.left = '-100%';
}, false);