document.addEventListener("DOMContentLoaded", function () {
    // Toggle Dark Mode
    const themeButton = document.getElementById("toggleTheme");
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Smooth Scrolling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith("#")) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});