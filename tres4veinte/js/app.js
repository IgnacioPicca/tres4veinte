const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email');
    if (email.value.match(/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test())) {
        alert('El email es correcto');
    } else {
        alert('El email es incorrecto');
    }
}
);

