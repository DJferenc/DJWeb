// Bejelentkezés logika
document.getElementById('login').addEventListener('click', function(event) {
    event.preventDefault(); // Megakadályozza az űrlap újratöltését
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ellenőrizd, hogy a felhasználónév és jelszó egyezik-e
    if (username === "DJFerenc" && password === "Retro2") {
        window.location.href = "welcome.html"; // Átirányít a welcome oldalra
    } else {
        alert("Helytelen felhasználónév vagy jelszó!");
    }
});

// Regisztráció logika
document.getElementById('register').addEventListener('click', function(event) {
    event.preventDefault(); // Megakadályozza az űrlap újratöltését
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (newUsername && newPassword) {
        alert("Sikeres regisztráció!");
        window.location.href = "index.html"; // Átirányít vissza a bejelentkezési oldalra
    } else {
        alert("Kérlek, töltsd ki a mezőket!");
    }
});
