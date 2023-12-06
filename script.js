
//BACKGROUND ANIMATION
// Get all section elements
const sections = document.querySelectorAll('.section');

// Add event listeners to change background image on section hover
sections.forEach((section, index) => {
    section.addEventListener('mouseenter', () => {
        document.body.style.backgroundImage = `url('image${index + 1}.jpg')`; // Change background image
    });
});

//REFRESH PAGE

document.getElementById('logo').addEventListener('click', function() {
    location.reload(); // Reloads the page on logo click
});

