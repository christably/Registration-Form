// Toggle password visibility
function togglePassword(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const toggleIcon = passwordField.nextElementSibling.querySelector('i');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Password strength checker
const passwordInput = document.getElementById('password');
const passwordStrength = document.getElementById('passwordStrength');
const confirmPassword = document.getElementById('confirmPassword');
const passwordMatch = document.getElementById('passwordMatch');

passwordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    let strength = 0;
    let message = '';
    
    // Check length
    if (password.length >= 6) {
        strength += 1;
    }
    
    // Check for letters
    if (/[a-zA-Z]/.test(password)) {
        strength += 1;
    }
    
    // Check for numbers
    if (/[0-9]/.test(password)) {
        strength += 1;
    }
    
    // Check for special characters
    if (/[^a-zA-Z0-9]/.test(password)) {
        strength += 1;
    }
    
    // Display strength message
    if (password.length === 0) {
        passwordStrength.textContent = '';
        passwordStrength.className = 'password-strength';
    } else if (strength < 2) {
        message = 'Weak password';
        passwordStrength.className = 'password-strength weak';
        passwordStrength.style.color = '#e53935';
    } else if (strength < 4) {
        message = 'Medium password';
        passwordStrength.className = 'password-strength medium';
        passwordStrength.style.color = '#ffb300';
    } else {
        message = 'Strong password';
        passwordStrength.className = 'password-strength strong';
        passwordStrength.style.color = '#43a047';
    }
    
    passwordStrength.textContent = message;
    
    // Check if passwords match
    if (confirmPassword.value) {
        checkPasswordMatch();
    }
});

// Check if passwords match
confirmPassword.addEventListener('input', checkPasswordMatch);

function checkPasswordMatch() {
    if (confirmPassword.value === '') {
        passwordMatch.textContent = '';
        return;
    }
    
    if (passwordInput.value === confirmPassword.value) {
        passwordMatch.textContent = 'Passwords match';
        passwordMatch.style.color = '#43a047';
    } else {
        passwordMatch.textContent = 'Passwords do not match';
        passwordMatch.style.color = '#e53935';
    }
}

// Form submission handling
const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Perform additional validation
    if (passwordInput.value !== confirmPassword.value) {
        alert('Passwords do not match!');
        return;
    }
    
    // Here you would typically send the form data to your backend
    alert('Registration successful! Form would be submitted to the server.');
    
    // Optional: reset the form
    // form.reset();
});

// Animation for social buttons
const socialButtons = document.querySelectorAll('.social-login button');

socialButtons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
});
