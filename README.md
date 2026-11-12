# Collaborative Academic Information System (CAIS) - Kelompok 1
Repository proyek pengembangan prototype frontend sistem informasi akademik kampus secara paralel dan kolaboratif untuk evaluasi UTS CAIS Kelas A Semester 7.

---

## 📖 Deskripsi Aplikasi
**CAIS (Campus Academic Information System)** adalah prototipe portal akademik terpadu berbasis web yang dirancang untuk memfasilitasi mahasiswa dan staf akademik dalam mengakses informasi perkuliahan. 

### Fitur Utama:
1. **Beranda (`index.html`)**: Halaman utama dengan pengenalan sistem, navigasi responsif, modul layanan, dan profil pengembang.
2. **Form Login Sederhana (`pages/login.html`)**: Form autentikasi mahasiswa/pengguna dilengkapi validasi client-side menggunakan JavaScript terpisah.
3. **Dashboard Akademik (`pages/dashboard.html`)**: Ringkasan data akademik (Total Mahasiswa, Jumlah SKS, IPK rata-rata, Mata Kuliah), pengumuman akademik terbaru, dan jadwal kuliah harian.
4. **Tabel Data Mahasiswa (`pages/mahasiswa.html`)**: Direktori data mahasiswa aktif dengan fitur filter/pencarian interaktif real-time.
5. **Modularitas CSS & JS**: Pemisahan berkas styling terpusat (`css/style.css`) dan skrip logika interaktif (`js/app.js`).

---

## 👥 Anggota Kelompok & Pembagian Modul
Pengembangan antarmuka dibagi secara paralel antar anggota kelompok sebagai berikut:

| No | Nama Anggota | NIM | Modul / Tanggung Jawab |
| :--- | :--- | :--- | :--- |
| 1 | **Agiel Ramadhan Putra** | 11523001 | Halaman Utama (`index.html`), Integrasi Navigasi & Konfigurasi Git |
| 2 | **Muhammad Faiz Hanifah** | 11523066 | Modul Autentikasi & Form Login (`pages/login.html`) |
| 3 | **Muhamad Yusuf** | 11523009 | Modul Dashboard Informasi Akademik (`pages/dashboard.html`) |
| 4 | **Muhamad Rizki Saputra** | 11523051 | Styling Global (`css/style.css`), Interaktivitas & Validasi (`js/app.js`) |

---

## 📁 Struktur Berkas Proyek
```text
UTS-CAIS-A-SEMESTER7-KELOMPOK-1/
├── css/
│   └── style.css            # Styling global terpusat (layout, navbar, card, tabel, form)
├── js/
│   └── app.js               # Logika JavaScript terpisah (validasi login, filter tabel, navbar aktif)
├── pages/
│   ├── dashboard.html       # Modul ringkasan statistik & informasi akademik
│   ├── login.html           # Modul form login
│   └── mahasiswa.html       # Modul tabel data mahasiswa aktif
├── index.html               # Halaman Beranda utama (entry point)
├── login.html               # Entry point alternatif untuk modul login
└── README.md                # Dokumentasi proyek & pembagian kerja
```

---

## 🚀 Cara Menjalankan Proyek
1. Buka folder repositori di editor (misalnya VS Code).
2. Buka berkas `index.html` langsung di browser atau gunakan ekstensi *Live Server*.
3. Navigasi dapat digunakan secara penuh antar halaman (`Beranda` &harr; `Login` &harr; `Dashboard` &harr; `Data Mahasiswa`).

---

## 🌿 Alur Kolaborasi Git (Workflow Paralel)
1. Tarik pembaruan terbaru dari branch `main`:
   ```bash
   git pull origin main
   ```
2. Buat branch fitur masing-masing anggota:
   ```bash
   git checkout -b feature-nama-modul
   ```
3. Lakukan commit perubahan:
   ```bash
   git add .
   git commit -m "feat: deskripsi perubahan modul"
   ```
4. Push branch ke GitHub dan buat *Pull Request* (PR) ke `main`:
   ```bash
   git push origin feature-nama-modul
   ```
5. Review & integrasikan (merge) branch ke `main`.
