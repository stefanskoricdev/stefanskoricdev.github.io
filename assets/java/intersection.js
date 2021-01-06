const homePage = document.querySelector('.home-page-wrapper');
const hpMainPage = document.querySelector('.main-wrapper');
const aboutPage = document.querySelector('.about-page-wrapper');
const portfolioPage = document.querySelector('.portfolio-page-wrapper');
const contactPage = document.querySelector('.contact-page-wrapper');
const header = document.querySelector('header');

const mql = window.matchMedia('(min-width: 1000px)');

const options = {
    threshold: 1,
    rootMargin: "0px 0px 800px 0px"
};
const headerOptions = {
    threshold: 0,
    rootMargin: "0px 0px -900px 0px"
};

function screenSizeMatch() {
    if (mql.matches) {
        const homePageObserver = new IntersectionObserver(function (
                entries
            ) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("loaded");
                    }
                });
            },
            options);

        const pagesObserver = new IntersectionObserver(function (entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("loaded");
                }
            });
        }, options);

        const headerObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    header.classList.add('header-active');
                }else{
                    header.classList.remove('header-active');
                }
            });
        }, headerOptions);

        homePageObserver.observe(hpMainPage);
        pagesObserver.observe(aboutPage);
        pagesObserver.observe(portfolioPage);
        pagesObserver.observe(contactPage);
        headerObserver.observe(homePage);
    } else {
        return;
    }
}//These functions are not called on screen lower than 1000px width, set in const mqlNav!
screenSizeMatch();
window.addEventListener('resize', screenSizeMatch);









