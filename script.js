// JavaScript functionality for Mehfil 2026 website

// DOM Elements
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const registrationForm = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');
const eventModal = document.getElementById('event-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalIcon = document.getElementById('modal-icon');
const closeBtn = document.querySelector('.close-btn');

// Event Data
const eventsData = {
    'painting': {
        title: 'Painting',
        description: 'Unleash your creativity and express ideas through colors. Participants will create artwork based on a given theme within the time limit.\n\nRules:\n• Individual participation only\n• Theme will be given on the spot\n• Time limit: 1 hour\n• Participants must bring their own materials\n• No pre-drawn sketches allowed\n• Judging based on creativity, relevance, and presentation',
        icon: '🎨'
    },
    'form-from-waste': {
        title: 'Best Out of Waste',
        description: 'Turn trash into treasure! Showcase your innovation by creating useful or decorative items from waste materials.\n\nRules:\n• Individual or team (max 2 members)\n• Materials should be waste/recycled items\n• Time limit: 1 hour\n• Basic tools allowed\n• Explanation of the product is required\n• Judging based on creativity and utility',
        icon: '♻️'
    },
    'kutty-story': {
        title: 'Kutty Skit',
        description: 'A short and impactful skit performance that delivers a message creatively.\n\nRules:\n• Team event (3–6 members)\n• Time limit: 5–8 minutes\n• No offensive content allowed\n• Props allowed but minimal setup time\n• Judging based on acting, message, and coordination',
        icon: '📖'
    },
    'illogical-marketing': {
        title: 'Illogical Reasoning',
        description: 'Think out of the box! Give funny, creative, and illogical answers to questions.\n\nRules:\n• Individual participation\n• Questions will be given on the spot\n• Time limit per question\n• Judging based on creativity and humor',
        icon: '🤯'
    },
    'photography': {
        title: 'Photography',
        description: 'Capture the world through your lens based on a given theme.\n\nRules:\n• Individual event\n• Photos must be taken during the event\n• Basic editing allowed (no heavy manipulation)\n• Submit within the deadline\n• Judging based on creativity, clarity, and theme relevance',
        icon: '📸'
    },
    'shipwreck': {
        title: 'Shipwreck',
        description: 'A survival game where participants defend their character and convince why they should survive.\n\nRules:\n• Individual event\n• Character will be assigned or chosen\n• Speak for 1–2 minutes\n• Elimination rounds based on performance\n• Judging based on persuasion and creativity',
        icon: '🚢'
    },
    'sudoku': {
        title: 'Sudoku',
        description: 'Test your logical thinking by solving Sudoku puzzles.\n\nRules:\n• Individual participation\n• Time-based competition\n• No electronic devices allowed\n• First correct completion wins',
        icon: '🔢'
    },
    'rubiks-cube': {
        title: 'Rubik\'s Cube',
        description: 'Speed and skill challenge to solve the Rubik\'s Cube.\n\nRules:\n• Individual event\n• Standard 3x3 cube only\n• Timer-based competition\n• Fastest solve wins',
        icon: '🧊'
    },
    'mono-acting': {
        title: 'Mono Acting / Drama',
        description: 'Perform a powerful solo act showcasing emotions and storytelling.\n\nRules:\n• Individual event\n• Time limit: 3–5 minutes\n• Props allowed\n• No vulgar or offensive content\n• Judging based on expression, creativity, and impact',
        icon: '🎭'
    },
    'mime': {
        title: 'Mime',
        description: 'Tell a story without words using only expressions and movements.\n\nRules:\n• Individual event\n• Time limit: 3–5 minutes\n• No props or sound effects\n• Judging based on expression and storytelling',
        icon: '🤐'
    },
    'solo-dance': {
        title: 'Solo Dance',
        description: 'Express yourself through dance and rhythm.\n\nRules:\n• Individual event\n• Time limit: 3–5 minutes\n• Any style allowed\n• Judging based on energy and choreography',
        icon: '💃'
    },
    'solo-singing': {
        title: 'Solo Singing',
        description: 'Showcase your vocal talent with a song of your choice.\n\nRules:\n• Individual event\n• Time limit: 3–4 minutes\n• Karaoke allowed\n• No inappropriate lyrics',
        icon: '🎤'
    },
    'group-dance': {
        title: 'Group Dance',
        description: 'Perform synchronized dance with your team.\n\nRules:\n• Team of 4–10 members\n• Time limit: 5–7 minutes\n• Theme-based performance preferred\n• Judging based on coordination and energy',
        icon: '👯'
    },
    'corporate-walk': {
        title: 'Corporate Walk',
        description: 'Walk the ramp with confidence and professionalism. Show your corporate personality and communication skills.\n\nRules:\n• Individual event\n• Formal attire is mandatory\n• Participants may be asked questions\n• Judging based on confidence, attire, and communication',
        icon: '🕴️'
    },
    'heritage-of-india': {
        title: 'Heritage of India',
        description: 'Present India\'s culture, traditions, and diversity through performance.\n\nRules:\n• Team event\n• Time limit: 5–8 minutes\n• Use of music, props, and costumes allowed\n• Judging based on cultural representation and creativity',
        icon: '👑'
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader after 2 seconds
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);


    // Add scroll animation to header
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Add staggered animation delay
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.setProperty('--i', index);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    document.querySelectorAll('.fade-in').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });


    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter cards
            eventCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex';
                    card.style.animationDelay = '0s'; // Reset animation delay
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Registration form handling
    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(registrationForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            event: formData.get('event'),
            timestamp: new Date().toISOString()
        };

        // Save to localStorage
        let registrations = JSON.parse(localStorage.getItem('registrations')) || [];
        registrations.push(data);
        localStorage.setItem('registrations', JSON.stringify(registrations));

        // Show success message
        successMessage.style.display = 'flex';
        registrationForm.reset();

        // Hide success message after 3 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 3000);
    });

    // Event modal functionality
    closeBtn.addEventListener('click', closeEventModal);
    eventModal.addEventListener('click', (e) => {
        if (e.target === eventModal) {
            closeEventModal();
        }
    });

    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeEventModal();
        }
    });
});

// Event Modal Functions
function openEventModal(eventId) {
    const event = eventsData[eventId];
    if (!event) return;

    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
    modalIcon.textContent = event.icon;

    eventModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeEventModal() {
    eventModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add confetti effect on successful registration (optional enhancement)
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#ff0080', '#00f5ff', '#ec4899'];
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);


document.getElementById("registration-form").addEventListener("submit", function(e){
    e.preventDefault();

    const form = this;
    const formData = new FormData(form);

    // Get selected values
    const select = document.getElementById("event");
    const selected = Array.from(select.selectedOptions).map(opt => opt.value);

    formData.set("event", selected.join(", "));

    fetch("https://script.google.com/macros/s/AKfycbx-LX0EGMhcl9rY1a4n8z0zhOJ5V9FNEMWoAXg8X4hwsLgt65GG5DbCNzv4Shwnk1UheQ/exec", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(() => {
        document.getElementById("success-message").style.display = "block";
        form.reset();
    })
    .catch(() => {
        alert("Error!");
    });
});



new TomSelect("#event", {
    plugins: ['remove_button'],
    placeholder: "Select multiple events...",
    maxItems: null, // unlimited selection
});
