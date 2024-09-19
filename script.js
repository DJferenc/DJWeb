document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Megakadályozza az alapértelmezett form elküldést

    // Minta felhasználónév és jelszó
    const correctUsername = 'DJFerenc';
    const correctPassword = 'Retro2';

    // Beírt felhasználónév és jelszó lekérése
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ellenőrzés
    if (username === correctUsername && password === correctPassword) {
        alert('Sikeres bejelentkezés!');
        // Itt irányíthatod a felhasználót egy másik oldalra
        window.location.href = 'welcome.html'; // Például egy üdvözlő oldalra
    } else {
        document.getElementById('error-message').textContent = 'Hibás felhasználónév vagy jelszó!';
    }
});
