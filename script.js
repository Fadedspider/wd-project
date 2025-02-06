const menuBtn = document.querySelector('.fa-bars'); // Select the menu button
const crossBtn = document.querySelector('.fa-xmark'); // Select the close button
const sidebar = document.querySelector('.menu-items'); // Select the sidebar menu

// Function to show the sidebar
function showsidebar() {
    sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hidesidebar() {
    sidebar.style.display = 'none';
}

// Add event listeners to buttons
if (menuBtn) {
    menuBtn.addEventListener("click", showsidebar);
}

if (crossBtn) {
    crossBtn.addEventListener("click", hidesidebar);
}


const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = slides.length;

function updateSlidePosition() {
    sliderContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateDots();    
}

function updateDots() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlidePosition();
}

function showPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

nextButton.addEventListener('click', showNextSlide);
prevButton.addEventListener('click', showPrevSlide);
dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentSlide = parseInt(e.target.dataset.slide);
        updateSlidePosition();
    });
});

setInterval(showNextSlide, 5000);

const icon1 = document.getElementsByClassName('fa-fort-awesome')[0];
const icon2 = document.getElementsByClassName('fa-hard-drive')[0];
const icon3 = document.getElementsByClassName('fa-music')[0];
const icon4 = document.getElementsByClassName('fa-building-columns')[0];
const icon5 = document.getElementsByClassName('fa-atom')[0];
const icon6 = document.getElementsByClassName('fa-paintbrush')[0];
const icon7 = document.getElementsByClassName('fa-gopuram')[0];
const icon8 = document.getElementsByClassName('fa-book-open')[0];
const icon9 = document.getElementsByClassName('fa-person')[0];
const icon10 = document.getElementsByClassName('fa-newspaper')[0];
const icon11 = document.getElementsByClassName('fa-gift')[0];
const icon12 = document.getElementsByClassName('fa-cloud-sun-rain')[0];

const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const h7 = document.getElementById('h7');
const h8 = document.getElementById('h8');
const h9 = document.getElementById('h9');
const h10 = document.getElementById('h10');
const h11 = document.getElementById('h11');
const h12 = document.getElementById('h12');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

const changeText = [
    {
        "button text": ["World Heritage", "Archive", "Music and Dance", "Museums and Antiques", 
            "Science", "Visual Arts", "Built Heritage", "Literature & Folklore", "Anthropology", 
            "Libraries&Manuscripts", "Festivals", "Project Mausam"],
        icon: [
            "fa-brands fa-fort-awesome",
            "fa-solid fa-hard-drive",
            "fa-solid fa-music",
            "fa-solid fa-building-columns",
            "fa-solid fa-atom",
            "fa-solid fa-paintbrush",
            "fa-solid fa-gopuram",
            "fa-solid fa-book-open",
            "fa-solid fa-person",
            "fa-solid fa-newspaper",
            "fa-solid fa-gift",
            "fa-solid fa-cloud-sun-rain"
        ]
    },
    {
        "button text": ['Upcoming Events',
            'Notifications',
            'Updates',
            'Policies and Guidelines',
            'Meeting Minutes',
            'Announcements'],
        icon: [
            "fa-regular fa-calendar-days",
            "fa-solid fa-bell",
            "fa-solid fa-circle",
            "fa-solid fa-viruses",
            "fa-regular fa-clipboard",
            "fa-solid fa-bullhorn"
        ]
    }
]

function updateContent(setIndex) {
    const texts = changeText[setIndex]["button text"];
    const icons = changeText[setIndex]["icon"];

    // Array of all divs containing the icons and text
    const divs = [
        icon1.parentElement,
        icon2.parentElement,
        icon3.parentElement,
        icon4.parentElement,
        icon5.parentElement,
        icon6.parentElement,
        icon7.parentElement,
        icon8.parentElement,
        icon9.parentElement,
        icon10.parentElement,
        icon11.parentElement,
        icon12.parentElement
    ];

    // Loop through each div to update or hide it
    for (let i = 0; i < divs.length; i++) {
        if (texts[i] && icons[i]) {
            // Update text and icons for existing elements
            divs[i].style.display = "block"; // Show the div
            divs[i].querySelector("h3").innerHTML = texts[i]; // Update the text
            divs[i].querySelector("i").className = icons[i]; // Update the icon
        } else {
            // Hide div if no corresponding text or icon
            divs[i].style.display = "none";
        }
    }
}

// Attach function to buttons
btn1.addEventListener("click", () => updateContent(0));
btn2.addEventListener("click", () => updateContent(1));
