$(document).ready(function(){
    
    const themeStylesheet = document.getElementById('theme');
    const toggleDark = () => themeStylesheet.href = './B-css/Dark-Theme.css';
    const toggleLight = () => themeStylesheet.href = './B-css/Light-Theme.css';
    
    const toggleTheme = (event) => {
        if (event.type === 'click' || (event.type === 'keydown' && event.keyCode === 13)) {
            // if it's light -> go dark
            if(themeStylesheet.href.includes('Light')){
                toggleDark();
                localStorage.setItem('themeColor', 'dark');
                // themeToggle.innerText = 'Switch to light mode';
            } else {
                // if it's dark -> go light
                toggleLight();
                localStorage.setItem('themeColor', 'light');
                // themeToggle.innerText = 'Switch to dark mode';
            }
        }
    };
    
    const toggle = document.getElementById('Switch-BG','Switch-Toggle');
    toggle.addEventListener('click', toggleTheme);
    toggle.addEventListener('keydown', toggleTheme);

    const savedThemeColor = localStorage.getItem('themeColor');
    if(!savedThemeColor) {
        const thehours = new Date().getHours();    

        if (thehours >= 7 && thehours < 17) {
            toggleLight();
        } else {
            toggleDark();
        }
    } else {
        savedThemeColor === 'light' ? toggleLight() : toggleDark();
    }

    const changeOpacity = () => {
        // We're showing the header background only after a certain distance to the Top SectionContainer! 🦜🦜
        const topNavBottom = document.getElementsByClassName("TopNav-Background")[0].getBoundingClientRect().bottom;
        const sectionContainer = document.getElementsByClassName("SectionContainer")[0];
        const checkpoint = sectionContainer.getBoundingClientRect().top;
        const goldenRatio = 1 - ((checkpoint - topNavBottom) / (checkpoint + window.scrollY - topNavBottom));
        if (goldenRatio < 1) {
            opacity = goldenRatio;
        } else {
            opacity = 1;
        }
        document.querySelector(".TopNav-Background").style.opacity = opacity;
    }
    
    window.addEventListener("scroll", () => {
        changeOpacity();
    });
    changeOpacity();





//__________*_*_*_*_*_*_*_*_*_*__DOCUMENT READY CLOSING TAG__*_*_*_*_*_*_*_*_*_*__________
});