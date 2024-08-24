// A regisztrált felhasználó adatai (ezt később bővítheted adatbázissal)
const registeredUser = {
    username: 'admin',
    password: 'password123'
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Alapértelmezett űrlap beküldés leállítása

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Felhasználói adatok ellenőrzése
    if (username === registeredUser.username && password === registeredUser.password) {
        // Adatok tárolása a localStorage-ban, hogy hozzáférjünk a welcome.html oldalon is
        localStorage.setItem('username', username);
        window.location.href = 'welcome.html';  // Továbbirányítás az üdvözlő oldalra
    } else {
        document.getElementById('errorMessage').textContent = 'Helytelen felhasználónév vagy jelszó!';
    }
});
