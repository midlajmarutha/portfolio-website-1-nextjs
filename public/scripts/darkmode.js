const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
console.log("file loaded")
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});