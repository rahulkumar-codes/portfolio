// code for goto page

const brandNameEl = document.getElementById('brandName');
const homeEl = document.getElementById('homeBtn');
const aboutEl = document.getElementById('aboutBtn');
const skillsEl = document.getElementById('skillsBtn');
const contactEl = document.getElementById('contactBtn');


brandNameEl.addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: "smooth" })
});
homeEl.addEventListener('click', () => {
    document.getElementById('home').scrollIntoView({ behavior: "smooth" })
});
aboutEl.addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({ behavior: "smooth" })
});
skillsEl.addEventListener('click', () => {
    document.getElementById('skills').scrollIntoView({ behavior: "smooth" })
});
contactEl.addEventListener('click', () => {
    document.getElementById('contact').scrollIntoView({ behavior: "smooth" })
});




// code for resposive nav bar list items


const btnEl = document.getElementById('btn');
const navMenuEl = document.getElementById('navMenu');
const mainEl = document.querySelectorAll('main');



btnEl.addEventListener('click', () => {
    navMenuEl.classList.toggle('active');
});


mainEl.forEach((e) => {
    e.addEventListener('click', () => {
        navMenuEl.classList.remove('active');

    });

})
