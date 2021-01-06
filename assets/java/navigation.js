//desktop nav
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
//responsive nav
const burgerResponsive = document.querySelector('.burger-responsive');
const navResponsive = document.querySelector('.nav-responsive');
const navRespLink = document.querySelectorAll('.responsive-link');

const mqlNav = window.matchMedia('(min-width: 1023px)');

function screenSizeMatch(){
    if(mqlNav.matches){
        function navSlide(){
            burger.classList.toggle('loaded');
            nav.classList.toggle('loaded');
        }
        function navLinkSlide(){
            navLinks.forEach((link, index) => {
                if(link.style.animation){
                    link.style.animation = '';
                }else{
                    link.style.animation = `navLinkAnime 400ms linear ${index / 8}s`;
                    console.log(index);
                }
            });
        }
        
        burger.addEventListener('click', navSlide);
        burger.addEventListener('click', navLinkSlide);
    }else{
        return;
    }
}//These functions are not called on screen lower than 1023px width, set in const mqlNav! 

function navResponsiveActive() {
    burgerResponsive.classList.toggle('active');
    navResponsive.classList.toggle('active');
    header.classList.toggle('active');
}

screenSizeMatch();
window.addEventListener('resize', screenSizeMatch);

burgerResponsive.addEventListener('click', navResponsiveActive);

for(let i = 0; i < navRespLink.length; i++){
    navRespLink[i].addEventListener('click', () => {
        navResponsive.classList.remove('active');
        burgerResponsive.classList.toggle('active');
    });
}