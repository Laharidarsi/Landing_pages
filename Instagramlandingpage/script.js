function login() {
    const username = document.querySelector('input[type="text"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Add your login logic here (this is just a basic example)
    if (username === 'demo' && password === 'demo') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

function forgotPassword() {
    const username = prompt('Enter your username to reset password:');
    
    // Add your forgot password logic here (this is just a basic example)
    if (username) {
        alert(Password reset instructions sent to ${username}'s email.);
    } else {
        alert('Please enter a valid username.');
    }
}
