// Adminisztrátori felhasználó adatok (fix felhasználónév és jelszó)
const adminUser = {
    username: "DJFerenc",
    password: "Retro2"
};

// Bejelentkezési logika
function login(event) {
    event.preventDefault(); // Megakadályozza az űrlap alapértelmezett elküldését

    // Beviteli mezők értékeinek lekérése
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Ellenőrizzük, hogy a felhasználónév és jelszó helyes-e
    if (usernameInput === adminUser.username && passwordInput === adminUser.password) {
        // Felhasználónév tárolása LocalStorage-ban
        localStorage.setItem('username', usernameInput);

        // Átirányítás a welcome.html oldalra
        window.location.href = 'welcome.html';
    } else {
        // Hibaüzenet, ha a bejelentkezési adatok helytelenek
        alert('Helytelen felhasználónév vagy jelszó!');
    }
}

// Felhasználónév megjelenítése a welcome oldalon
document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('userName'); // Az elem, ahol a felhasználónév megjelenik

    // Felhasználónév lekérése a LocalStorage-ból
    const username = localStorage.getItem('username');

    if (username) {
        // Ha a felhasználó be van jelentkezve, megjelenítjük a nevét
        userNameElement.textContent = username;
    } else {
        // Ha nincs bejelentkezve, visszairányítjuk a bejelentkezési oldalra
        window.location.href = 'index.html';
    }
});

// Kijelentkezési funkció
function logout() {
    // Felhasználónév eltávolítása a LocalStorage-ból
    localStorage.removeItem('username');

    // Átirányítás a bejelentkezési oldalra
    window.location.href = 'index.html';
}
