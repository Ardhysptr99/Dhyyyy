

document.getElementById('login-Form').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

   
    if (username === 'ardhysptr' && password === 'Nurmiaty1') {
        errorMessage.style.display = 'none'; // Sembunyikan pesan error
    } else {
        event.preventDefault(); // Mencegah pengiriman form
        errorMessage.textContent = 'Username atau password salah!';
        errorMessage.style.display = 'block'; // Tampilkan pesan error
    }
});
