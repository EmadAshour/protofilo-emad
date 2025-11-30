
// إظهار وإخفاء المعلومات الإضافية في قسم "Who am I"
document.querySelector('.who-am-i-btn').addEventListener('click', function () {
    const extraInfo = document.querySelector('.extra-info');
    extraInfo.classList.toggle('active');
});

// زر العودة إلى الأعلى (Back to Top)
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.textContent = '↑ Top';
backToTopButton.style.display = 'none';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.backgroundColor = '#3a6cf4';
backToTopButton.style.color = 'white';
backToTopButton.style.padding = '10px 15px';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '5px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
backToTopButton.style.transition = 'transform 0.3s ease, background-color 0.3s ease';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
// Dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('dark-mode');
    });
    document.querySelector('.footer').classList.toggle('dark-mode');
});


