document.getElementById('register-link').addEventListener('click', function() {
    alert("Regisztrációs felület még nem készült el."); // Placeholder
});

// Bejelentkezési logika, ha szükséges
document.getElementById('login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Egyszerű bejelentkezési logika például
    if (username === "DJFerenc" && password === "Retro2") {
        window.location.href = "welcome.html"; // Irányítás a welcome oldalra
    } else {
        alert("Helytelen felhasználónév vagy jelszó!");
    }
});
