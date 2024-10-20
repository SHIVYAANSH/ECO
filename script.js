const webAppUrl = 'YOUR_WEB_APP_URL';  // Replace with your Google Apps Script Web App URL

// Sign In Form Handler
document.getElementById('signinForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signinUsername').value;
    const password = document.getElementById('signinPassword').value;

    fetch(`${webAppUrl}?action=signin&username=${username}&password=${password}`, {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('signinResult').innerText = data;
    })
    .catch(error => console.error('Error:', error));
});

// Sign Up Form Handler
document.getElementById('signupForm')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const password = document.getElementById('signupPassword').value;
    const email = document.getElementById('signupEmail').value;
    const fullName = document.getElementById('signupFullName').value;

    fetch(`${webAppUrl}?action=signup&username=${username}&password=${password}&email=${email}&fullName=${fullName}`, {
        method: 'POST'
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('signupResult').innerText = data;
    })
    .catch(error => console.error('Error:', error));
});
