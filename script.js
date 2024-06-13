window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#0a84ee';
    } else {
        navbar.style.backgroundColor = '#093145';
    }
});


