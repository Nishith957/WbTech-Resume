document.addEventListener('DOMContentLoaded', function () {
    // active nav link
    document.querySelectorAll('.nav a').forEach(function (a) {
        try {
            const href = a.getAttribute('href');
            if (location.pathname.endsWith(href) || (location.pathname.endsWith('/') && href === 'index.html')) {
                a.classList.add('active');
            }
        } catch (e) { }
    });

    // footer year
    const y = new Date().getFullYear();
    document.getElementById('year')?.textContent = y;
    document.getElementById('year2')?.textContent = y;
    document.getElementById('year3')?.textContent = y;
});
