// Bejelentkezési logika
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ellenőrizzük, hogy a felhasználó létezik-e a LocalStorage-ban
    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        // Ha a bejelentkezés sikeres
        window.location.href = 'welcome.html';
    } else {
        document.getElementById('login-message').textContent = 'Hibás felhasználónév vagy jelszó!';
    }
});

// Regisztrációs logika
document.getElementById('register-btn').addEventListener('click', function() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Ellenőrizzük, hogy a felhasználónév nincs-e már használatban
    if (localStorage.getItem(newUsername)) {
        document.getElementById('register-message').textContent = 'A felhasználónév már foglalt!';
    } else {
        // Felhasználó mentése a LocalStorage-ba
        localStorage.setItem(newUsername, newPassword);
        document.getElementById('register-message').textContent = 'Sikeres regisztráció!';
        setTimeout(function() {
            window.location.href = 'index.html'; // Átirányít bejelentkezéshez
        }, 2000);
    }
});
