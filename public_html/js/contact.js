// Function to validate form before submission
function validateForm() {
    const form = document.getElementById('contactForm');
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message', 'experience'];
    let isValid = true;

    requiredFields.forEach(field => {
        const element = document.getElementById(field);
        if (!element.value.trim()) {
            isValid = false;
            element.style.borderColor = 'red';
        } else {
            element.style.borderColor = 'black'; // Reset border color if valid
        }
    });

    if (!isValid) {
        document.getElementById('error-message').style.display = 'block';
        // Prevent form submission if not valid
        return false; 
    } else {
        document.getElementById('error-message').style.display = 'none';
         // Call save function if valid
        saveFormData();
        return true;
    }
}

// Function to save form data to local storage
function saveFormData() {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        contactMethod: document.querySelector('input[name="contact-method"]:checked').value,
        topics: Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(el => el.value),
        interestLevel: document.getElementById('interest-level').value,
        experience: document.getElementById('experience').value
    };

    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Your data has been saved!');
}

// Function to clear form data from local storage
function clearFormData() {
    document.getElementById('contactForm').reset();
    document.getElementById('interest-value').textContent = "5";
    localStorage.removeItem('contactFormData');
    document.getElementById('error-message').style.display = 'none';
}

// interest value slider
function updateInterestValue(value) {
    document.getElementById('interest-value').textContent = value;
}