/**
 * CAIS (Campus Academic Information System) - Main Application Script
 * Modul: Validasi dan Logika Interaktif Frontend (js/app.js)
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Highlight Active Navigation Item
    highlightActiveNav();

    // 2. Setup Login Form Handler (if present)
    setupLoginForm();

    // 3. Setup Table Search / Filter (if present)
    setupTableSearch();

    // 4. Update Dynamic Academic Greeting
    updateGreeting();
});

/**
 * Otomatis menandai menu navigasi yang sedang aktif berdasarkan URL halaman
 */
function highlightActiveNav() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href) return;

        // Cek jika halaman saat ini cocok dengan tautan navigasi
        if (
            currentPath.endsWith(href) ||
            (href.endsWith("index.html") && (currentPath.endsWith("/") || currentPath.endsWith("index.html"))) ||
            (href.includes("dashboard.html") && currentPath.includes("dashboard.html")) ||
            (href.includes("mahasiswa.html") && currentPath.includes("mahasiswa.html")) ||
            (href.includes("login.html") && currentPath.includes("login.html"))
        ) {
            link.classList.add("active");
        }
    });
}

/**
 * Validasi dan simulasi proses login
 */
function setupLoginForm() {
    const loginForm = document.getElementById("loginForm");
    const alertBox = document.getElementById("loginAlert");

    if (!loginForm) return;

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const usernameInput = document.getElementById("username");
        const passwordInput = document.getElementById("password");

        const username = usernameInput ? usernameInput.value.trim() : "";
        const password = passwordInput ? passwordInput.value.trim() : "";

        if (!alertBox) return;

        // Validasi input kosong
        if (!username || !password) {
            alertBox.className = "alert-box alert-error";
            alertBox.textContent = "Mohon isi NIM/Email dan Password Anda!";
            return;
        }

        // Validasi panjang password minimal 4 karakter
        if (password.length < 4) {
            alertBox.className = "alert-box alert-error";
            alertBox.textContent = "Password minimal terdiri dari 4 karakter!";
            return;
        }

        // Simulasi Login Sukses
        alertBox.className = "alert-box alert-success";
        alertBox.textContent = `Login berhasil! Selamat datang, ${username}. Mengarahkan ke Dashboard...`;

        // Nonaktifkan tombol sementara
        const submitBtn = loginForm.querySelector("button[type='submit']");
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Memproses...";
        }

        // Arahkan ke halaman dashboard
        setTimeout(() => {
            // Cek apakah form login berada di dalam folder pages/ atau di root
            if (window.location.pathname.includes("/pages/")) {
                window.location.href = "dashboard.html";
            } else {
                window.location.href = "pages/dashboard.html";
            }
        }, 1200);
    });
}

/**
 * Fitur pencarian/filter data pada tabel mahasiswa
 */
function setupTableSearch() {
    const searchInput = document.getElementById("searchMahasiswa");
    const tableBody = document.querySelector(".data-table tbody");

    if (!searchInput || !tableBody) return;

    searchInput.addEventListener("keyup", function () {
        const filter = searchInput.value.toLowerCase();
        const rows = tableBody.getElementsByTagName("tr");

        for (let i = 0; i < rows.length; i++) {
            const textContent = rows[i].textContent.toLowerCase();
            if (textContent.indexOf(filter) > -1) {
                rows[i].style.display = "";
            } else {
                rows[i].style.display = "none";
            }
        }
    });
}

/**
 * Menampilkan salam waktu otomatis (Pagi, Siang, Sore, Malam)
 */
function updateGreeting() {
    const greetingEl = document.getElementById("greetingText");
    if (!greetingEl) return;

    const hour = new Date().getHours();
    let salam = "Selamat Datang";

    if (hour >= 4 && hour < 11) {
        salam = "Selamat Pagi";
    } else if (hour >= 11 && hour < 15) {
        salam = "Selamat Siang";
    } else if (hour >= 15 && hour < 18) {
        salam = "Selamat Sore";
    } else {
        salam = "Selamat Malam";
    }

    greetingEl.textContent = salam;
}
