document.getElementById('register-link').addEventListener('click', function() {
    document.querySelector('.login-container').style.display = 'none';
    document.querySelector('.registration-container').style.display = 'block';
});

document.getElementById('login-link').addEventListener('click', function() {
    document.querySelector('.registration-container').style.display = 'none';
    document.querySelector('.login-container').style.display = 'block';
});

// Bejelentkezés logika
document.getElementById('login').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "DJFerenc" && password === "Retro2") {
        window.location.href = "welcome.html"; // Irányítás a welcome oldalra
    } else {
        alert("Helytelen felhasználónév vagy jelszó!");
    }
});

// Regisztráció logika
document.getElementById('register').addEventListener('click', function() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    // Egyszerű regisztrációs logika
    if (newUsername && newPassword) {
        alert("Sikeres regisztráció!");
        // További regisztrációs logika itt
    } else {
        alert("Kérlek, töltsd ki a mezőket!");
    }
});
