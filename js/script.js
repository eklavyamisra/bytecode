/*======================================== toggle icon nav bar ========================================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

/*======================================== Scroll Section Avtive Link ========================================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*======================================== Sticky navbar========================================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrolly > 100);

    /*======================================== remove toggle icon and navbar when click navbar link(scroll) ========================================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};


/*======================================== Scroll Reveal ========================================*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*======================================== typed js ========================================*/
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'Youtuber', 'Digital Marketer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.getElementById('myForm').addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    // Collect form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries()); // Convert to JSON object

    try {
        const endpoint = 'https://sheetdb.io/api/v1/al5c0p710m614';

        // Send data to SheetDB
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data), // Directly send the data object
        });

        if (response.ok) {
            alert('Data submitted successfully!');
            e.target.reset(); // Clear the form data
        } else {
            alert('Failed to submit data. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting data:', error);
        alert('An error occurred while submitting data.');
    }
});
