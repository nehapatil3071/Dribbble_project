document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  
  // Clear previous error message
  document.getElementById('message').innerHTML = '';

  
  if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
    document.getElementById('message').innerHTML = '<p id="error-message">Please fill out all fields.</p>';
    return;
  }
  
  document.getElementById('message').innerHTML = '<p>Sign up successful!</p>';

});

// Additional function for email validation (if needed)
function isValidEmail(email) {
  // Implement email validation logic here
  return /\S+@\S+\.\S+/.test(email);
}
