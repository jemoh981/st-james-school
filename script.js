document.addEventListener('DOMContentLoaded', function() {
    const loginIcon = document.getElementById('loginIcon');
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');
    const closeButton = document.getElementById('closeButton');

    loginIcon.addEventListener('click', function() {
        loginForm.style.display = 'block';
    });

    closeButton.addEventListener('click', function() {
        loginForm.style.display = 'none';
    });

    loginButton.addEventListener('click', function() {
        // Here you would add your login logic
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log("Username: " + username + " Password: " + password); //Example
        //In a real application, you'd send these credentials to a server.
        loginForm.style.display = 'none';

    });
});