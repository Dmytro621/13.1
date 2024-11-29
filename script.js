document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault(); 
    
  const name = document.getElementById('name').value.trim();
  const message = document.getElementById('message').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const email = document.getElementById('email').value.trim();

  clearErrors();

  let isValid = true;

  if (!name) {
    showError('nameError', 'Name is required.');
    isValid = false;
  }

  if (message.length < 5) {
    showError('messageError', 'Message must be at least 5 characters.');
    isValid = false;
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phone)) {
    showError('phoneError', 'Phone number must start with +380 and contain 12 digits.');
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showError('emailError', 'Email must be valid and contain "@" and a domain.');
    isValid = false;
  }

  if (isValid) {
    console.log({
      name,
      message,
      phone,
      email,
    });

    alert('Form submitted successfully!');
  }
});

function showError(fieldId, message) {
  const errorField = document.getElementById(fieldId);
  errorField.textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach((errorField) => {
    errorField.textContent = '';
  });
}
