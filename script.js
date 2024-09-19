// Előre beállított felhasználónév és jelszó
const predefinedUsername = 'DJFerenc';
const predefinedPassword = 'Retro2';

// Tároljuk a felhasználónevet és jelszót a localStorage-ban, ha még nincs tárolva
if (!localStorage.getItem(predefinedUsername)) {
    localStorage.setItem(predefinedUsername, predefinedPassword);
}

// Bejelentkezési logika
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Ellenőrzés, hogy a felhasználónév és jelszó helyes-e
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
