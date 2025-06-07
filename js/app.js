
//Dark Mode Toggle
const toggle = document.getElementById('toggle-darkmode');
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.textContent =
    document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});
