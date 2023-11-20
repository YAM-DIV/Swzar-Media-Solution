// Start navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
// End navbar
// Start bgcolor scrolled

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if (window.scrollY > 0) {
        header.classList.add('scrolled');
		
    } else {
        header.classList.remove('scrolled')
    }
});
// End bgcolor scrolled
// Start slide details
const accordion = document.getElementsByClassName('contentBX');
for (i = 0; i<accordion.length; i++ ){
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}

// End slide details
// Start Slider Swiper
var Swiper = new Swiper(".card_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
// End Slider Swiper

// Start Section Loading Animation
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})
// End Section Loading Animation

// Start Scroll To Top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(#FFD700 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// End Scroll To Top
// Start Cookies
setCookie = (cName, cValue, expDays) => {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

getCookie = (cName) => {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    const cArr = cDecoded.split("; ");
    let value;
    cArr.forEach(val => {
        if(val.indexOf(name) === 0) value = val.substring(name.length);
    })

    return value;
}

document.querySelector("#cookies-btn").addEventListener("click", () => {
    document.querySelector("#cookies").style.display = "none";
    setCookie("cookie", true, 30);
})

cookieMessage = () => {
    if(!getCookie("cookie"))
        document.querySelector("#cookies").style.display = "block";
}

window.addEventListener("load", cookieMessage);
// End cookies