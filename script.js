document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.container h1, .container h2, .container h3, .container p');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
        element.classList.add('fade-in');
    });
});
