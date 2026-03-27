// JavaScript functionality for Mehfil 2026 website

// DOM Elements
const loader = document.getElementById('loader');
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const registrationForm = document.getElementById('registration-form');
const successMessage = document.getElementById('success-message');

// 🔥 Event perf optimizations
const eventsGrid = document.querySelector('.events-grid');
const eventCards = document.querySelectorAll('.event-card');

// Dynamic will-change management
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};


// Countdown Timer Elements
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const countdownMessage = document.getElementById('countdown-message');
const progressBar = document.getElementById('progress-bar');
const countdownContainer = document.querySelector('.countdown-container');

// Event Data
const eventsData = {
    'painting': {
        title: 'Painting',
        description: 'Unleash your creativity and express ideas through colors. Participants will create artwork based on a given theme within the time limit.',
        icon: '🎨',
        timing: '9:00 AM - 10:00 AM',
        rules: [
            'Individual participation only',
            'Theme will be given on the spot',
            'Time limit: 2 hours',
            'Canvas size: A4 (210 x 297mm)',
            'Materials provided: Basic art supplies',
            'Original work only - no tracing',
            'Judging based on creativity, technique, and theme relevance',
            'No pre-drawn sketches or reference images allowed'
        ]
    },
    'form-from-waste': {
        title: 'Best Out of Waste',
        description: 'Turn trash into treasure! Showcase your innovation by creating useful or decorative items from waste materials.',
        icon: '♻️',
        timing: '9:00 AM - 10:00 AM',
        rules: [
            'Individual or team participation (max 2 members)',
            'Use only waste/recycled materials',
            'Items must be functional or decorative',
            'Time limit: 1.5 hours',
            'Bring your own basic tools',
            'Explanation of the product concept required',
            'Judging based on creativity, utility, and eco-friendliness',
            'Originality and sustainability focus'
        ]
    },
    'kutty-story': {
        title: 'Kutty Story',
        description: 'A short and impactful skit performance that delivers a message creatively.',
        icon: '📖',
        timing: '10:00 AM - 10:30 AM',
        rules: [
            'Team event (3–6 members)',
            'Duration: 3-5 minutes',
            'Theme: Social message or awareness',
            'Props allowed: Minimal setup',
            'Original script required',
            'No offensive or vulgar content',
            'Judging based on content, delivery, and team coordination',
            'Clear message and impactful storytelling essential'
        ]
    },
    'illogical-marketing': {
        title: 'Illogical Reasoning',
        description: 'Think out of the box! Give funny, creative, and illogical answers to questions.',
        icon: '🤯',
        timing: '11:30 AM - 12:30 PM',
        rules: [
            'Individual participation',
            'Questions will be given on the spot',
            'Duration: 2-3 minutes per round',
            'Most creative and humorous answer wins',
            'No offensive or inappropriate content',
            'Quick thinking and wit required',
            'Judging based on humor, creativity, and originality',
            'Confidence and stage presence important'
        ]
    },
    'photography': {
        title: 'Photography',
        description: 'Capture the world through your lens based on a given theme.',
        icon: '📸',
        timing: '9:00 AM - 1:00 PM',
        rules: [
            'Individual event',
            'Photos must be taken during the event',
            'Theme will be announced on spot',
            'Basic editing allowed (no heavy manipulation)',
            'Submit within the deadline',
            'Judging based on creativity, clarity, and theme relevance',
            'Original shots only - no stock images',
            'Technical quality and composition considered'
        ]
    },
    'shipwreck': {
        title: 'Shipwreck',
        description: 'A survival game where participants defend their character and convince why they should survive.',
        icon: '🚢',
        timing: '11:30 AM - 12:30 PM',
        rules: [
            'Individual event',
            'Character will be assigned or chosen',
            'Duration: 1–2 minutes per participant',
            'Elimination rounds based on performance',
            'Judging based on persuasion, creativity, and confidence',
            'Logical reasoning and emotional appeal valued',
            'No offensive content allowed',
            'Quick thinking and articulate speech essential'
        ]
    },
    'sudoku': {
        title: 'Sudoku',
        description: 'Test your logical thinking by solving Sudoku puzzles.',
        icon: '🔢',
        timing: '12:30 PM - 1:00 PM',
        rules: [
            'Individual participation',
            'Time-based competition',
            'No electronic devices or calculators allowed',
            'Puzzle difficulty levels provided',
            'First correct completion wins',
            'No assistance from others permitted',
            'Clean workspace required',
            'Puzzle must be completed within time limit'
        ]
    },
    'rubiks-cube': {
        title: 'Rubik\'s Cube',
        description: 'Speed and skill challenge to solve the Rubik\'s Cube.',
        icon: '🧊',
        timing: '12:30 PM - 1:00 PM',
        rules: [
            'Individual event',
            'Standard 3x3 cube only',
            'Timer-based competition',
            'Cube scrambling done by organizers',
            'No lubrication or modifications allowed',
            'Fastest solve wins',
            'Participants must bring their own cube',
            'Fair play and sportsmanship expected'
        ]
    },
    'mono-acting': {
        title: 'Mono Acting / Drama',
        description: 'Perform a powerful solo act showcasing emotions and storytelling.',
        icon: '🎭',
        timing: '10:00 AM - 11:30 AM',
        rules: [
            'Individual event',
            'Duration: 3–5 minutes',
            'Props allowed',
            'No vulgar or offensive content',
            'Original performance preferred',
            'Judging based on expression, creativity, and impact',
            'Clear voice projection required',
            'Emotional range and character development valued'
        ]
    },
    'mime': {
        title: 'Mime',
        description: 'Tell a story without words using only expressions and movements.',
        icon: '🤐',
        timing: '10:30 AM - 11:30 AM',
        rules: [
            'Individual event',
            'Duration: 3–5 minutes',
            'No props or sound effects allowed',
            'No spoken words or music',
            'Judging based on expression and storytelling',
            'Clear gestures and facial expressions essential',
            'Story must be easily understandable',
            'Creativity and originality encouraged'
        ]
    },
    'solo-dance': {
        title: 'Solo Dance',
        description: 'Express yourself through dance and rhythm.',
        icon: '💃',
        timing: '2:00 PM - 2:30 PM',
        rules: [
            'Individual event',
            'Duration: 3–5 minutes',
            'Any dance style allowed',
            'Music track must be submitted in advance',
            'Appropriate attire required',
            'Judging based on energy, choreography, and expression',
            'No props or elaborate costumes',
            'Performance must be self-choreographed'
        ]
    },
    'solo-singing': {
        title: 'Solo Singing',
        description: 'Showcase your vocal talent with a song of your choice.',
        icon: '🎤',
        timing: '1:30 PM - 2:00 PM',
        rules: [
            'Individual event',
            'Duration: 3–4 minutes',
            'Karaoke allowed',
            'No inappropriate or offensive lyrics',
            'Song choice must be submitted in advance',
            'Judging based on vocal quality and performance',
            'No lip-syncing allowed',
            'Stage presence and confidence valued'
        ]
    },
    'group-dance': {
        title: 'Group Dance',
        description: 'Perform synchronized dance with your team.',
        icon: '👯',
        timing: '2:30 PM - 3:15 PM',
        rules: [
            'Team of 4–10 members',
            'Duration: 5–7 minutes',
            'Theme-based performance preferred',
            'Music track must be submitted in advance',
            'Synchronization and coordination essential',
            'Judging based on teamwork, energy, and choreography',
            'Appropriate costumes required',
            'Original choreography encouraged'
        ]
    },
    'corporate-walk': {
        title: 'Corporate Walk',
        description: 'Walk the ramp with confidence and professionalism. Show your corporate personality and communication skills.',
        icon: '🕴️',
        timing: '3:15 PM - 3:45 PM',
        rules: [
            'Individual event',
            'Formal business attire mandatory',
            'Participants may be asked questions',
            'Judging based on confidence, attire, and communication',
            'Professional demeanor expected',
            'Posture and walking style evaluated',
            'Quick thinking and articulate responses valued',
            'Corporate personality and presence assessed'
        ]
    },
    'heritage-of-india': {
        title: 'Heritage of India',
        description: 'Present India\'s culture, traditions, and diversity through performance.',
        icon: '👑',
        timing: '3:15 PM - 3:45 PM',
        rules: [
            'Team event',
            'Duration: 5–8 minutes',
            'Use of music, props, and costumes allowed',
            'Traditional attire encouraged',
            'Judging based on cultural representation and creativity',
            'Authentic cultural elements valued',
            'Team coordination and presentation important',
            'Educational and entertaining content preferred'
        ]
    }
};

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    // Initialize countdown timer
    initializeCountdown();
    
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

    // 🔥 OPTIMIZED Observer (single query)
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
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


    // 🔥 OPTIMIZED Filter buttons (Firefox 60fps)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventsGrid = document.querySelector('.events-grid');
    let filterTimeout = null;

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // RAF throttle (16ms = 60fps)
            if (filterTimeout) cancelAnimationFrame(filterTimeout);
            filterTimeout = requestAnimationFrame(() => {
                // Active state
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');
                const eventCards = eventsGrid.querySelectorAll('.event-card');

                eventCards.forEach((card, index) => {
                    const matches = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
                    
                    if (matches) {
                        card.style.transform = 'translateX(0) scale(1)';
                        card.style.opacity = '1';
                        card.style.visibility = 'visible';
                        card.style.position = 'static';
                        card.style.animationDelay = `${index * 0.05}s`;
                    } else {
                        card.style.transform = 'translateX(100%)';
                        card.style.opacity = '0';
                        card.style.visibility = 'hidden';
                        card.style.position = 'absolute';
                        card.style.width = card.offsetWidth + 'px';
                    }
                });
                
                filterTimeout = null;
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

});


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

// Throttled parallax effect for hero section using requestAnimationFrame
(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    let latestKnownScrollY = 0;
    let ticking = false;

    function onScroll() {
        latestKnownScrollY = window.pageYOffset || document.documentElement.scrollTop;
        requestTick();
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(update);
        }
        ticking = true;
    }

    function update() {
        // Use a small multiplier to reduce heavy repaints on low-end devices
        const translateY = latestKnownScrollY * 0.12;
        hero.style.transform = `translateY(${translateY}px)`;
        ticking = false;
    }

    // Add listeners
    window.addEventListener('scroll', onScroll, { passive: true });
    // Hint to browser for smoother transforms
    hero.style.willChange = 'transform';
})();

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
    // make confetti animation finite to avoid continuous CPU usage
    const duration = (Math.random() * 3 + 2).toFixed(2);
    confetti.style.animation = `fall ${duration}s linear`;
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

    // get selected events
    const selected = Array.from(document.getElementById("event").selectedOptions)
        .map(opt => opt.value);

    formData.set("event", selected.join(", "));

    // fetch("https://script.google.com/macros/s/AKfycbwLAREDeHhc99UVZEscZNwaRt0LAcfpK59edp9ciaknByt2ykF1hMm-QEBphkBGjAohbg/exec", {
    fetch("https://script.google.com/macros/s/AKfycbyXCiEUl_soBviriSpGKlDtrYtBesotcPoeHUlFlWFQrPMeYFyUnw_fL4zPHv9CztQq/exec", {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(() => {
        alert("Registered Successfully!");
        form.reset();
    })
    .catch(() => {
        alert("Error!");
    });
});



// Countdown Timer Functions
function initializeCountdown() {
    // Set target date: April 2 at 9:00 AM (local time)
    const targetDate = new Date();
    targetDate.setMonth(3); // April is month 3 (0-indexed)
    targetDate.setDate(2);
    targetDate.setHours(9, 0, 0, 0); // 9:00 AM
    
    // If the date has already passed this year, set it for next year
    const currentDate = new Date();
    if (targetDate < currentDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    // Calculate total duration in milliseconds
    const totalDuration = targetDate - new Date();
    
    // Initialize progress bar
    updateProgressBar(100);

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate.getTime() - now;

        // Check if countdown has ended
        if (distance <= 0) {
            clearInterval(countdownInterval);
            showCountdownEnded();
            return;
        }

        // Calculate time remaining
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update display with mechanical flip animation
        updateFlipClockDisplay(days, hours, minutes, seconds);
        
        // Update progress bar
        const progress = (distance / totalDuration) * 100;
        updateProgressBar(progress);
        
        // Check for last minute warning
        if (distance <= 60000) { // Last 1 minute
            countdownContainer.classList.add('warning');
        }
    }, 1000);

    // Initial display update
    updateFlipClockDisplay(0, 0, 0, 0);
}

function updateFlipClockDisplay(days, hours, minutes, seconds) {
    // Format numbers with leading zeros
    const formatNumber = (num) => num.toString().padStart(2, '0');

    // Update each flip clock unit
    updateFlipClockUnit('flip-days', formatNumber(days));
    updateFlipClockUnit('flip-hours', formatNumber(hours));
    updateFlipClockUnit('flip-minutes', formatNumber(minutes));
    updateFlipClockUnit('flip-seconds', formatNumber(seconds));
}

function updateFlipClockUnit(unitId, newValue) {
    const unit = document.getElementById(unitId);
    if (!unit) return;

    // Get current value
    const currentValue = unit.querySelector('.flip-clock-front').textContent;
    
    // Only animate if value changed
    if (currentValue !== newValue) {
        // Set the back face to new value
        unit.querySelector('.flip-clock-back').textContent = newValue;
        
        // Add flipping animation class
        unit.classList.add('flipping');
        
        // Remove animation class after transition completes
        setTimeout(() => {
            unit.classList.remove('flipping');
            
            // Update front face to new value
            unit.querySelector('.flip-clock-front').textContent = newValue;
            
            // Reset back face
            unit.querySelector('.flip-clock-back').textContent = currentValue;
        }, 500); // Match CSS transition duration
    }
}

function updateProgressBar(progress) {
    progressBar.style.width = `${progress}%`;
}

function showCountdownEnded() {
    // Hide timer elements
    document.getElementById('countdown-timer').style.display = 'none';
    
    // Show end message
    countdownMessage.style.display = 'block';
    
    // Add celebration effect
    createConfetti();
    
    // Play sound alert (optional enhancement)
    playSoundAlert();
    
    // Remove warning class
    countdownContainer.classList.remove('warning');
}

function playSoundAlert() {
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.5);
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Fallback if Web Audio API is not supported
        console.log('Sound alert not supported in this browser');
    }
}

new TomSelect("#event", {
    plugins: ['remove_button'],
    placeholder: "Select multiple events...",
    maxItems: null, // unlimited selection
});


function closeAd() {
    document.getElementById("ad-popup").style.display = "none";
}

/* Optional: show only once per session */
if(sessionStorage.getItem("adShown")){
    document.getElementById("ad-popup").style.display = "none";
}else{
    sessionStorage.setItem("adShown", "true");
}




const eventTimes = {
    "Painting": "10AM",
    "Kutty Story": "10AM",
    "Photography": "11AM",
    "Illogical Marketing": "11AM",
    "Shipwreck": "12PM",
    "Sudoku": "12PM",
    "Form from Waste": "1PM",
    "Mime": "1PM"
};



document.addEventListener("DOMContentLoaded", function () {

    const select = document.getElementById("event");

    // 🔥 get existing Tom Select instance
    const tom = select.tomselect;

    tom.on("item_add", function(value) {

        const selected = tom.getValue();
        const newTime = eventTimes[value];

        const conflict = selected.some(item =>
            item !== value && eventTimes[item] === newTime
        );

        if (conflict) {
            showConflictPopup(value);

            // 🔥 REMOVE CONFLICT ITEM
            setTimeout(() => {
                tom.removeItem(value);
            }, 0);
        }
    });

});



function showConflictPopup(eventName) {
    document.getElementById("conflict-text").innerText =
        eventName + " has a time clash with another event.";

    document.getElementById("conflict-popup").style.display = "flex";
}

function closeConflict() {
    document.getElementById("conflict-popup").style.display = "none";
}
