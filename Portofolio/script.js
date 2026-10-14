// Interaksi 1: Filter Kategori Proyek & Pengalaman
function filterCards(category, event) {
    const cards = document.querySelectorAll('.item-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Menghapus kelas 'active' dari semua tombol filter
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Menambahkan kelas 'active' pada tombol yang sedang diklik
    if (event) {
        event.target.classList.add('active');
    }

    // Menampilkan atau menyembunyikan kartu proyek berdasarkan kategori
    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Interaksi 2: Validasi Formulir Pesan Kontak
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            const nameError = document.getElementById("nameError");
            const emailError = document.getElementById("emailError");
            const msgError = document.getElementById("msgError");
            const successMsg = document.getElementById("successMsg");

            let isValid = true;

            // Validasi input nama
            if (name === "") {
                nameError.style.display = "block";
                isValid = false;
            } else {
                nameError.style.display = "none";
            }

            // Validasi input email sederhana
            if (!email.includes("@") || !email.includes(".")) {
                emailError.style.display = "block";
                isValid = false;
            } else {
                emailError.style.display = "none";
            }

            // Validasi input pesan
            if (message === "") {
                msgError.style.display = "block";
                isValid = false;
            } else {
                msgError.style.display = "none";
            }

            // Jika semua input valid
            if (isValid) {
                successMsg.style.display = "block";
                form.reset();
                setTimeout(() => {
                    successMsg.style.display = "none";
                }, 4000);
            }
        });
    }
});