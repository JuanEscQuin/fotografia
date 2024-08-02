// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            const contentId = toggle.getAttribute('href').substring(1);
            const content = document.getElementById(contentId);
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                document.querySelectorAll('.content').forEach(section => section.style.display = 'none');
                content.style.display = 'block';
            }
        });
    });
});
