function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Add your authentication logic here
    if (username === 'demo' && password === 'demo') {
        errorMessage.innerText = '';
        alert('Login successful!');
    } else {
        errorMessage.innerText = 'Invalid username or password. Please try again.';
    }
}

