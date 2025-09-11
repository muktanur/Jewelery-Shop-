function createParticles() {
            const container = document.getElementById('particles');
            const particleCount = 50;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (15 + Math.random() * 10) + 's';
                container.appendChild(particle);
            }
        }
        
        createParticles();
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when link is clicked
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
        
        // Form validation
        const form = document.getElementById('contactForm');
        const successMessage = document.getElementById('successMessage');
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset previous errors
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });
            
            let isValid = true;
            
            // Validate name
            const name = document.getElementById('name');
            if (name.value.trim() === '') {
                name.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                email.parentElement.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message');
            if (message.value.trim() === '') {
                message.parentElement.classList.add('error');
                isValid = false;
            }
            
            // If valid, show success message
            if (isValid) {
                form.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Reset form after 3 seconds
                setTimeout(() => {
                    form.reset();
                    form.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 3000);
            }
        });
        
        // Remove error class on input
        document.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', function() {
                if (this.parentElement.classList.contains('error')) {
                    this.parentElement.classList.remove('error');
                }
            });
        });