const navMenu = document.getElementById('nav-mobile-menu');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show');
});

//Dark Mode Functionality
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

//check if darkmode is prefered or previously choosen
const isDarkMode = localStorage.getItem('dark-mode') === 'true';
// set inital mode
if (isDarkMode) {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;
}

// toggle mode
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.style.transition = 'background-color 0.3s, color 0.3s';
    const isDarkMode = body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? `<i class="fa-solid fa-sun"></i>` : '<i class="fa-solid fa-moon"></i>';
    localStorage.setItem('dark-mode', isDarkMode);
});

