// Regisztrációs logika
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Az oldal újratöltésének megakadályozása

        const username = document.getElementById('newUsername').value.trim();
        const password = document.getElementById('newPassword').value.trim();

        // Ellenőrizzük, hogy a felhasználónév már létezik-e
        if (localStorage.getItem(username)) {
            alert('Ez a felhasználónév már létezik!');
        } else {
            // Felhasználónév és jelszó tárolása a localStorage-ban
            localStorage.setItem(username, password);
            alert('Sikeres regisztráció! Most már bejelentkezhetsz.');
            window.location.href = 'index.html'; // Átirányítás a bejelentkezési oldalra
        }
    });
}

// Bejelentkezési logika
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Az oldal újratöltésének megakadályozása

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Ellenőrizzük a felhasználónév és jelszó helyességét
        const storedPassword = localStorage.getItem(username);
        if (storedPassword && storedPassword === password) {
            alert('Sikeres bejelentkezés!');
            localStorage.setItem('username', username); // Aktuális felhasználó tárolása
            window.location.href = 'welcome.html'; // Átirányítás a welcome oldalra
        } else {
            alert('Helytelen felhasználónév vagy jelszó!');
        }
    });
}

