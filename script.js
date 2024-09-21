// Adminisztrátori felhasználó adatok
const adminUser = {
    username: "DJFerenc",
    password: "Retro2"
};

// Bejelentkezési logika
function login(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    if (usernameInput === adminUser.username && passwordInput === adminUser.password) {
        localStorage.setItem('username', usernameInput);
        window.location.href = 'welcome.html';
    } else {
        alert('Helytelen felhasználónév vagy jelszó!');
    }
}

// Regisztrációs logika
function register(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    // Ellenőrizd, hogy a felhasználónév már létezik-e
    if (localStorage.getItem(newUsername)) {
        document.getElementById('message').textContent = 'A felhasználónév már foglalt!';
    } else {
        // Új felhasználónév és jelszó mentése a LocalStorage-ba
        localStorage.setItem(newUsername, newPassword);
        document.getElementById('message').textContent = 'Sikeres regisztráció!';
    }
}

// Felhasználónév megjelenítése a welcome oldalon
document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('userName');

    const username = localStorage.getItem('username');
    if (username) {
        userNameElement.textContent = username;
    } else {
        window.location.href = 'index.html';
    }
});

// Kijelentkezés
function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}
