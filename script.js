// Bejelentkezés logika
document.getElementById('login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "DJFerenc" && password === "Retro2") {
        window.location.href = "welcome.html"; // Átirányítás a welcome oldalra
    } else {
        alert("Helytelen felhasználónév vagy jelszó!");
    }
});

// Regisztráció logika
document.getElementById('register').addEventListener('click', function() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert("Sikeres regisztráció!");
        // Itt további regisztrációs logika, ha szükséges
        window.location.href = "index.html"; // Vissza a bejelentkezési oldalra
    } else {
        alert("Kérlek, töltsd ki a mezőket!");
    }
});
