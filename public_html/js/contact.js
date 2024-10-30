// Function to validate form before submission
function validateForm() {
    // Select the form by its ID
    const form = document.getElementById('contactForm');

    // Define an array of required field IDs for validation
    const requiredFields = ['name', 'email', 'phone', 'subject', 'message', 'experience'];

    // Set a boolean flag to track if the form is valid; assume true initially
    let isValid = true;

    // Iterate over each field in the requiredFields array to validate it
    requiredFields.forEach(field => {
        // Get the specific input element by its ID
        const element = document.getElementById(field);

        // Check if the input value is empty after trimming whitespace
        if (!element.value.trim()) {
            // If empty, set isValid flag to false and change border color to red to indicate error
            isValid = false;
            element.style.borderColor = 'red';
        } else {
            // If the input has a value, reset the border color to black to show it's valid
            element.style.borderColor = 'black';
        }
    });

    // If any field is invalid (isValid is false), show an error message and prevent submission
    if (!isValid) {
        document.getElementById('error-message').style.display = 'block';
        // Return false to prevent form submission if validation fails
        return false; 
    } else {
        // If all fields are valid, hide the error message
        document.getElementById('error-message').style.display = 'none';

        // Call the saveFormData function to store the data in local storage
        saveFormData();

        // Return true to allow form submission
        return true;
    }
}

// Function to save form data to local storage
function saveFormData() {
    // Collect form data by selecting each element by its ID and storing its value
    const formData = {
        name: document.getElementById('name').value,                  // User's name
        email: document.getElementById('email').value,                // User's email
        phone: document.getElementById('phone').value,                // User's phone number
        subject: document.getElementById('subject').value,            // Subject of the message
        message: document.getElementById('message').value,            // Message content
        contactMethod: document.querySelector('input[name="contact-method"]:checked').value, // Preferred contact method (radio button selection)
        topics: Array.from(document.querySelectorAll('input[name="topics"]:checked')).map(el => el.value), // Array of selected topics of interest (checkboxes)
        interestLevel: document.getElementById('interest-level').value, // Interest level (slider value)
        experience: document.getElementById('experience').value       // User's experience level (dropdown selection)
    };

    // Convert the formData object to a JSON string and store it in local storage with the key 'contactFormData'
    localStorage.setItem('contactFormData', JSON.stringify(formData));

    // Display an alert to the user indicating that data has been saved
    alert('Your data has been saved!');
}

// Function to clear form data from local storage
function clearFormData() {
    // Reset the form, clearing all input fields and resetting their values
    document.getElementById('contactForm').reset();

    // Reset the displayed interest level value to the default (5) on the slider
    document.getElementById('interest-value').textContent = "5";

    // Remove the saved data from local storage under the key 'contactFormData'
    localStorage.removeItem('contactFormData');

    // Hide the error message if it was displayed previously
    document.getElementById('error-message').style.display = 'none';
}

// Function to update the displayed value of the interest level slider
function updateInterestValue(value) {
    // Set the text content of the interest-value span element to the current slider value
    document.getElementById('interest-value').textContent = value;
}
