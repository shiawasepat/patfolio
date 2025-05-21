document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    const darkModeIcon = document.getElementById('darkModeIcon');
    const mainContent = document.querySelector('main'); // Add this line

    darkModeToggle.addEventListener('click', function() {
        html.classList.toggle('dark');
        
        // Update the icon
        darkModeIcon.textContent = html.classList.contains('dark') ? '☀️' : '🌙';
        
        // DOM manipulation examples
        if (html.classList.contains('dark')) {
            mainContent.style.transition = 'all 0.3s';
            mainContent.style.transform = 'scale(1.02)';
        } else {
            mainContent.style.transform = 'scale(1)';
        }
        
        // You can also add/remove classes
        document.body.classList.toggle('dark-mode-active');
    });
});
