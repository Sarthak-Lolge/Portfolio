// Dynamic interactions for Sarthak Sanjay Lolge's Portfolio

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTypewriter();
    initScrollReveal();
    initProjectFilter();
    initContactForm();
    initMobileMenu();
    initActiveNavHighlight();
    initBackToTop();
    initImageLoader();
});

/* ==========================================================================
   Image Fallback Loader (Highly Resilient)
   ========================================================================== */
function initImageLoader() {
    const fallbacks = {
        'avatar-img': {
            artifact: 'file:///C:/Users/DELL/.gemini/antigravity/brain/bed13bd9-553b-440c-a763-59a870575845/developer_avatar_1781687409235.png',
            svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%236366f1"/><stop offset="100%" stop-color="%2306b6d4"/></linearGradient></defs><rect width="100" height="100" rx="50" fill="url(%23g)"/><circle cx="50" cy="40" r="18" fill="%230b1120"/><path d="M20 78c0-15 12-25 30-25s30 10 30 25z" fill="%230b1120"/><circle cx="50" cy="50" r="46" fill="none" stroke="%23ffffff" stroke-width="2" stroke-dasharray="4,4"/></svg>`
        },
        'proj-img-aroskope': {
            artifact: 'file:///C:/Users/DELL/.gemini/antigravity/brain/bed13bd9-553b-440c-a763-59a870575845/aroskope_mockup_1781687367857.png',
            svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%"><rect width="100%" height="100%" fill="%230b1120"/><rect x="20" y="20" width="360" height="200" rx="10" fill="%231e293b"/><rect x="35" y="35" width="80" height="170" rx="5" fill="%230f172a"/><circle cx="55" cy="55" r="8" fill="%236366f1"/><circle cx="55" cy="80" r="8" fill="%2306b6d4"/><circle cx="55" cy="105" r="8" fill="%239ca3af"/><rect x="135" y="35" width="230" height="50" rx="5" fill="%230f172a"/><rect x="150" y="45" width="100" height="10" rx="2" fill="%236366f1"/><rect x="150" y="65" width="150" height="8" rx="2" fill="%239ca3af"/><rect x="135" y="100" width="230" height="105" rx="5" fill="%230f172a"/><path d="M150 170 q 30 -40 60 -10 t 60 -30 t 60 20" fill="none" stroke="%2306b6d4" stroke-width="3"/></svg>`
        },
        'proj-img-cyclist': {
            artifact: 'file:///C:/Users/DELL/.gemini/antigravity/brain/bed13bd9-553b-440c-a763-59a870575845/cyclist_foundation_1781687799807.png',
            svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%"><rect width="100%" height="100%" fill="%230b1120"/><rect x="20" y="20" width="220" height="200" rx="10" fill="%231e293b"/><rect x="260" y="20" width="120" height="200" rx="15" fill="%231e293b" stroke="%236366f1" stroke-width="2"/><circle cx="320" cy="180" r="12" fill="%230f172a"/><path d="M280 40 h 80" stroke="%239ca3af" stroke-width="2"/><rect x="280" y="60" width="80" height="80" rx="5" fill="%230f172a"/><path d="M290 100 l 15 -15 l 10 10 l 20 -20" stroke="%2306b6d4" stroke-width="2" fill="none"/><rect x="35" y="35" width="190" height="30" rx="5" fill="%230f172a"/><circle cx="50" cy="50" r="5" fill="%236366f1"/></svg>`
        },
        'proj-img-evenza': {
            artifact: 'file:///C:/Users/DELL/.gemini/antigravity/brain/bed13bd9-553b-440c-a763-59a870575845/evenza_mockup_1781687822187.png',
            svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%"><rect width="100%" height="100%" fill="%230b1120"/><rect x="20" y="20" width="360" height="200" rx="10" fill="%231e293b"/><rect x="40" y="40" width="320" height="40" rx="5" fill="%230f172a"/><circle cx="60" cy="60" r="8" fill="%236366f1"/><circle cx="80" cy="60" r="8" fill="%2306b6d4"/><rect x="110" y="55" width="120" height="10" rx="2" fill="%239ca3af"/><rect x="40" y="95" width="90" height="110" rx="5" fill="%230f172a"/><rect x="145" y="95" width="215" height="110" rx="5" fill="%230f172a"/><circle cx="85" cy="130" r="25" fill="%231e293b" stroke="%2306b6d4" stroke-width="3"/></svg>`
        },
        'proj-img-bottle': {
            artifact: 'file:///C:/Users/DELL/.gemini/antigravity/brain/bed13bd9-553b-440c-a763-59a870575845/bottle_defect_mockup_1781687388097.png',
            svg: `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" width="100%" height="100%"><rect width="100%" height="100%" fill="%230b1120"/><rect x="20" y="20" width="360" height="200" rx="10" fill="%231e293b"/><circle cx="200" cy="110" r="50" fill="%230f172a" stroke="%23ef4444" stroke-width="4"/><line x1="130" y1="110" x2="270" y2="110" stroke="%2306b6d4" stroke-width="2" stroke-dasharray="5,5"/><rect x="160" y="180" width="80" height="25" rx="5" fill="%23ef4444"/><text x="172" y="197" fill="white" font-family="sans-serif" font-size="12" font-weight="bold">DEFECT: 98%</text></svg>`
        }
    };

    Object.keys(fallbacks).forEach(imgId => {
        const img = document.getElementById(imgId);
        if (img) {
            img.addEventListener('error', function handleImgError() {
                // Remove error listener to avoid infinite loop if fallback fails
                img.removeEventListener('error', handleImgError);
                
                console.log(`Failed to load primary asset for ${imgId}. Trying artifact fallback...`);
                img.src = fallbacks[imgId].artifact;
                
                // Set secondary listener for when local file:// access is blocked (e.g. localhost)
                img.addEventListener('error', function handleArtifactError() {
                    img.removeEventListener('error', handleArtifactError);
                    console.log(`Failed to load artifact for ${imgId} (likely security block). Rendering custom tech SVG...`);
                    img.src = fallbacks[imgId].svg;
                });
            });
            
            // Force reload to trigger error events if images are cached in broken state
            const currentSrc = img.src;
            img.src = '';
            img.src = currentSrc;
        }
    });
}

/* ==========================================================================
   Theme Manager (Dark / Light Mode)
   ========================================================================== */
function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    
    // Check saved theme or preference
    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-theme', savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        // Dynamic transitions
        htmlElement.style.setProperty('--transition-speed', '0.6s');
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        setTimeout(() => {
            htmlElement.style.setProperty('--transition-speed', '0.4s');
        }, 600);
    });
}

/* ==========================================================================
   Typewriter Animation (Hero Tagline)
   ========================================================================== */
function initTypewriter() {
    const words = [
        'Full Stack Developer',
        'AI / Machine Learning Engineer',
        'Computer Vision Specialist',
        'Computer Engineering Student'
    ];
    
    const typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) return;
    
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Erase faster
        } else {
            typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100; // Normal typing speed
        }
        
        // Word completed
        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000; // Wait before erasing
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 500; // Wait before typing next word
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Start typing after initial delay
    setTimeout(type, 1000);
}

/* ==========================================================================
   Scroll Reveal Animations
   ========================================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Animates once
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

/* ==========================================================================
   Project Filter functionality
   ========================================================================== */
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                // Grid layout transition
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8) translateY(20px)';
                
                setTimeout(() => {
                    const cardCategory = card.getAttribute('data-category');
                    if (filterValue === 'all' || cardCategory === filterValue) {
                        card.style.display = 'flex';
                        // Trigger reflow
                        card.offsetHeight;
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                    } else {
                        card.style.display = 'none';
                    }
                }, 300);
            });
        });
    });
}

/* ==========================================================================
   Mobile Nav Menu Toggle
   ========================================================================== */
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('open')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close menu when clicking link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}

/* ==========================================================================
   Scroll Active Nav Link Highlighter
   ========================================================================== */
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 200; // offset
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

/* ==========================================================================
   Back To Top Button
   ========================================================================== */
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/* ==========================================================================
   Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('btn-submit');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        submitBtn.disabled = true;
        const origText = submitBtn.innerHTML;
        submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
        
        // Simulate API call
        setTimeout(() => {
            // Mock success feedback
            formStatus.className = 'form-status success';
            formStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your message has been sent successfully.';
            
            // Clear status and reset form after timeout
            contactForm.reset();
            submitBtn.disabled = false;
            submitBtn.innerHTML = origText;
            
            setTimeout(() => {
                formStatus.style.opacity = '0';
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.style.opacity = '1';
                }, 500);
            }, 5000);
            
        }, 1500);
    });
}
