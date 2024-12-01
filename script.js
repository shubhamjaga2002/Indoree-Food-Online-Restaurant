/*---=====menu hide & show=====---*/
const iconDiv = document.querySelector('.menu-icon');
iconDiv.onclick = function toggleMenu() {
    const navbarSelect = document.querySelector('.nav-div');
    let menuIcon = document.querySelector('.menu-icon');    
    if(navbarSelect.style.display === 'flex'){
        navbarSelect.style.display = "none";
        menuIcon.innerHTML = "&#9776;";//menu icon
    }

    else{
        navbarSelect.style.display = "flex";
        menuIcon.innerHTML = "&#10006;";//close icon
    }
};
/*---=====menu hide & show end=====---*/


