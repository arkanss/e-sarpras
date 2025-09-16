# Sarpras SMKN 1 Cibinong — Ionic React + Tailwind + NestJS (Capacitor Ready)

**Sarpras SMKN 1 Cibinong** adalah aplikasi **Sarana dan Prasarana Sekolah** berbasis **Ionic React** yang dapat dijalankan di Android, iOS, dan Web dari satu codebase.  
Aplikasi ini mendukung proses seperti **permintaan barang, peminjaman fasilitas, inventarisasi, hingga pelaporan kerusakan**, dengan akses berdasarkan **role pengguna** (Siswa, Guru, dan Admin Sarpras).

---

## 🚀 Teknologi yang Digunakan

- **Frontend**: [Ionic React](https://ionicframework.com/docs/react)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Routing**: `react-router`  
- **API Communication**: `axios` via `services/`  
- **State Handling**: React State/Context  
- **Native Runtime**: [Capacitor](https://capacitorjs.com/)  
- **Backend (Terpisah)**: [NestJS](https://nestjs.com)  

---

## 📁 Struktur Folder
<pre lang="markdown"> 
src/
├── components/ # Kumpulan komponen UI per role
│   ├── Admin/
│   ├── Guru/
│   └── Siswa/
│   
│
├── pages/ # Halaman utama berdasarkan role
│   ├── Admin/
│   ├── Guru/
│   ├── Siswa/
│   └── Auth/ # Login, Register, Role Selection
│
├── layouts/ # Struktur layout per role (AdminLayout, UserLayout, dsb)
│
├── services/ # Komunikasi API ke backend NestJS
│   ├── api.ts
│   ├── authService.ts
│   └── sarprasService.ts
│
├── hooks/ # Custom React hooks
├── theme/ # Tailwind atau Ionic theme vars
├── routes.tsx # Routing aplikasi berdasarkan role
├── App.tsx # Entry point utama
├── main.tsx # Bootstrap aplikasi
</pre>

---

## ✨ Fitur Utama

- 🔒 Autentikasi berdasarkan role (Siswa, Guru, TU, Wakasek, Admin Sarpras)  
- 📦 Permintaan & Peminjaman Barang  
- 📑 Inventarisasi Barang & Ruangan (KIB & KIR)  
- 🚗 Peminjaman Kendaraan Sekolah  
- 🏫 Pemakaian Fasilitas (Aula, Lapangan, Lab, dll)  
- 🛠️ Pengaduan & Laporan Kerusakan Fasilitas  
- 🔔 Notifikasi status pengajuan (diterima/ditolak/proses)  
- 📱 Multi-platform (Web, Android, iOS)  

---

## 🧪 Cara Menjalankan Aplikasi

1. Clone repo ini:

```bash
git clone https://github.com/kamu/sarpras-smkn1cibinong.git
cd sarpras-smkn1cibinong
