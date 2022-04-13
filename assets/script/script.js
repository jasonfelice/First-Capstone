const mobileNavLinks = document.querySelectorAll('.mobile-nav ul a');

document.querySelector('.menu-button').addEventListener('click', () =>{
    document.querySelector('.menu-button').classList.toggle('close-cross');
    document.querySelector('.menu-button').classList.toggle('fix-position');
    document.querySelector('.mobile-nav').classList.toggle('appear-block');
})

mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-button').classList.toggle('close-cross');
        document.querySelector('.menu-button').classList.toggle('fix-position');
        document.querySelector('.mobile-nav').classList.toggle('appear-block');
    });
});