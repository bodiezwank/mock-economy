document.addEventListener('DOMContentLoaded', function() {
    window.isAdmin = sessionStorage.getItem('isAdmin') === 'true';

    const adminElements = document.querySelectorAll('.admin-only');

    if (window.isAdmin) {
        adminElements.forEach(el => {
            el.style.display = 'flex';
        });
    }
});