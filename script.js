// ==============================
// HERO SLIDER
// ==============================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 5000; // 5 seconds per slide

function showSlide(index){
    slides.forEach((slide,i)=>{
        slide.style.opacity = (i === index) ? '1' : '0';
    });
}

function nextSlide(){
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize
showSlide(currentSlide);
setInterval(nextSlide, slideInterval);

// ==============================
// MOBILE HAMBURGER MENU
// ==============================

// Create hamburger dynamically
const navbar = document.querySelector('header .navbar');
const ul = navbar.querySelector('ul');

const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;'; // ☰ icon
navbar.appendChild(hamburger);

hamburger.addEventListener('click', ()=>{
    ul.classList.toggle('active');
});

// ==============================
// RESPONSIVE CSS FOR MENU
// ==============================
const style = document.createElement('style');
style.innerHTML = `
.hamburger{
    display:none;
    font-size:28px;
    color:#fff;
    cursor:pointer;
}
header .navbar ul{
    transition: max-height 0.3s ease;
}
header .navbar ul.active{
    display:flex;
    flex-direction:column;
    gap:15px;
}
@media(max-width:768px){
    .hamburger{
        display:block;
    }
    header .navbar ul{
        display:none;
        flex-direction:column;
        width:100%;
        background:rgba(15,23,42,0.95);
        padding:15px 0;
        border-radius:0 0 10px 10px;
    }
    header .navbar ul li{
        margin:0;
    }
}
`;
document.head.appendChild(style);
