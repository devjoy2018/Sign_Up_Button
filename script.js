document
  .getElementById('signup-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // using regular expressions

    emailError.textContent = '';
    passwordError.textContent = '';

    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address';
      return;
    }

    if (password.length < 8) {
      passwordError.textContent = 'Password must be at least 8 characters long';
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
  });
