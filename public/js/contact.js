document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
  
    form.addEventListener('submit', function (event) {
        console.log("helo")
      // Reset error messages
      resetErrors();
  
      let isValid = true;
  
      if (!validateFullname(fullname.value.trim())) {
        showError(fullname, 'Full Name is required.');
        isValid = false;
      }
  
      if (!validateEmail(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
      }
  
      if (!validateMessage(message.value.trim())) {
        showError(message, 'Message is required.');
        isValid = false;
      }
  
      if (!isValid) {
        event.preventDefault();
      }
    });
  
    function validateFullname(fullname) {
      return fullname !== '';
    }
  
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return email !== '' && emailRegex.test(email);
    }
  
    function validateMessage(message) {
      return message !== '';
    }
  
    function showError(input, message) {
      const errorSpan = input.nextElementSibling;
      errorSpan.textContent = message;
      errorSpan.style.display = 'block';
      input.classList.add('error');
    }
  
    function resetErrors() {
      const errorSpans = document.querySelectorAll('.error-message');
      errorSpans.forEach(span => {
        span.textContent = '';
        span.style.display = 'none';
      });
  
      const errorInputs = document.querySelectorAll('.error');
      errorInputs.forEach(input => {
        input.classList.remove('error');
      });
    }
  });
  