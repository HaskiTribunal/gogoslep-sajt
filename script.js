// FADE-IN EFEKAT
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach((fader) => {
    appearOnScroll.observe(fader);
});


// SMANJIVANJE HEADERA PRI SKROLOVANJU
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > 50);
});


// GLATKO PREBACIVANJE ZA CEO MENI
const menuLinks = document.querySelectorAll('header nav a[href^="#"]');

menuLinks.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(!target) return;

        const headerHeight = header.offsetHeight;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.pageYOffset -
            headerHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });

    });

});
// HAMBURGER MENI
const menuToggle = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('header nav');

if (menuToggle && mobileNavigation) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileNavigation.classList.toggle('open');
    });

    // Zatvara meni kada se izabere neka sekcija
    mobileNavigation.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileNavigation.classList.remove('open');
        });
    });
}