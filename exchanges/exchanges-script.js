document.addEventListener('DOMContentLoaded', function() {
    // Assuming you've already loaded the value of isAdmin from storage
    window.isAdmin = sessionStorage.getItem('isAdmin') === 'true';

    const adminElements = document.querySelectorAll('.admin-only');

    if (window.isAdmin) {
        adminElements.forEach(el => {
            el.style.display = 'flex';
        });
    }
});