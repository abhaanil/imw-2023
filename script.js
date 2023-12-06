
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

// Add an event listener to the element with the class 'logoo'
document.querySelector('.logoo').addEventListener('click', function() {
    location.reload(); // Reloads the page on logo click
});

//CONTACT FORM

// Function to toggle display of the contact form
function toggleContactForm() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.style.display = (contactForm.style.display === 'none') ? 'block' : 'none';
}

// Add event listener to the contact icon to toggle the contact form
document.querySelector('.contact-icon').addEventListener('click', function() {
    toggleContactForm();
});

// Function to handle form submission
document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    
    // Fetch form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Send email (This is a simplified example using JavaScript; server-side processing is usually done with a backend)
    // This part won't work in a simple client-side environment due to security restrictions
    const mailtoLink = `mailto:abhapatil@ocadu.ca?subject=Contact%20from%20${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AReply%20to:%20${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;

    // You might also consider using a server-side solution to handle sending emails
});


