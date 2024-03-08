
//@ts-nocheck

// Togle menuIcon

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

console.log(menuIcon);

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// navbar scrolling
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Remove toggle and navbar link when click the link

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};




// profession text amimation
const typed = new Typed('.multi-profession', {
    strings : ['Software Developer', 'Software Engineer', 'Python Developer', 'Django Developer',
    'Web Developer', 'Fullstack Developer', 'Backend Developer'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop: true
});

// console.log(typed);