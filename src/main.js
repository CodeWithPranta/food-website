const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(url => 
    url.addEventListener('click', () => {
        navMenu.classList.add('hidden')
    })
)

hamburger.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
})

closeIcon.addEventListener('click', () => {
    navMenu.classList.add('hidden')
})

/** ========================== Tabs ====================== */
const tabs = document.querySelectorAll(".tabs_wrap ul li");

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
    })
})



