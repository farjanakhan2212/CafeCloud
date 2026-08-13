const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.topbar a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle.checked) {
            navToggle.checked = false;
        }
    });
});
