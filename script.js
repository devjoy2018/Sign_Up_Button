document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;

    emailError.textContent = '';
    passwordError.textContent = '';

    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      return;
    }

    if (!passwordPattern.test(password)) {
      passwordError.textContent =
        'Password must contain at least 8 characters, one uppercase letter, one special character, and one number';
      return;
    }

    // If everything is valid, you can proceed with the sign-up process
    // For demonstration purpose, let's just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);
  });

document
  .getElementById('toggle-password')
  .addEventListener('click', function () {
    var passwordInput = document.getElementById('password');
    var passwordToggleBtn = document.getElementById('toggle-password');

    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      passwordToggleBtn.textContent = 'Hide Password';
    } else {
      passwordInput.type = 'password';
      passwordToggleBtn.textContent = 'Show Password';
    }

    passwordInput.style.width = '92%';
    passwordInput.style.padding = '10px';
    passwordInput.style.border = '1px solid #ccc';
  });
