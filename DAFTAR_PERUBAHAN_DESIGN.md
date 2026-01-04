# Daftar Perubahan Design - Skema Warna 60% Hijau, 30% Putih, 10% Gold

## Ringkasan Perubahan
Mengubah seluruh design aplikasi dengan skema warna:
- **60% Emerald-900 (Hijau)** - Background utama
- **30% White (Putih)** - Teks dan konten
- **10% Amber-400 (Gold)** - Aksen border dan highlight

---

## ✅ PERUBAHAN YANG SUDAH DILAKUKAN

### 1. **src/routes/__root.tsx**
- ✅ Ubah background root dari dynamic colors menjadi `bg-emerald-900`
- ✅ Update footer dari `bg-linear-to-r from-teal-800 to-teal-700` menjadi `bg-emerald-800`
- ✅ Ubah semua text footer dari `text-teal-100 dark:text-gray-300` menjadi `text-white`
- ✅ Update footer heading menjadi `text-amber-400`
- ✅ Add border-t-4 border-amber-400 pada footer

### 2. **src/components/Header.tsx**
- ✅ Update dropdown SOP dari `bg-gray-700` menjadi `bg-emerald-900`
- ✅ Update hover state dari `hover:bg-gray-600` menjadi `hover:bg-emerald-800`
- ✅ Update submenu border menjadi `border-l-4 border-amber-400`
- ✅ Update theme toggle button hover dari `hover:bg-teal-600 dark:hover:bg-gray-700` menjadi `hover:bg-emerald-700`
- ✅ Update user info text menjadi `text-white` dan NIP menjadi `text-amber-400`
- ✅ Update mobile menu border dari `border-teal-600` menjadi `border-amber-400`
- ✅ Update mobile menu links hover dari `hover:bg-teal-600` menjadi `hover:bg-emerald-900`

### 3. **src/routes/ttd-cuti.tsx**
- ✅ Ubah background dari `#FFFFFF` putih menjadi `bg-emerald-900`
- ✅ Ubah text dari `text-black` menjadi `text-white`
- ✅ Ubah heading dari `text-gray-600` menjadi `text-white`
- ✅ Ubah button background dari `bg-white text-black` menjadi `bg-emerald-800 text-white`
- ✅ Ubah button border dari `border-gray-400` menjadi `border-2 border-amber-400`
- ✅ Ubah button hover dari `hover:bg-gray-100` menjadi `hover:bg-emerald-700`

### 4. **src/routes/cuti-sakit.tsx**
- ✅ Ubah wrapper dari `bg-white` menjadi `bg-emerald-900 min-h-screen`
- ✅ Ubah card dari `bg-white border-4 border-white` menjadi `bg-emerald-800 border-4 border-amber-400`
- ✅ Ubah semua text dari default menjadi `text-white`
- ✅ Ubah heading menjadi `text-amber-400`
- ✅ Ubah numbered circle dari `bg-yellow-400 text-black border-2 border-black` menjadi `bg-amber-400 text-emerald-900 border-2 border-amber-500`
- ✅ Ubah button dari `bg-red-600` menjadi `bg-amber-400 text-emerald-900`
- ✅ Ubah kembali button dari `bg-[#000000]` menjadi `bg-amber-400 text-emerald-900`

### 5. **src/routes/cuti-tahunan.tsx**
- ✅ Ubah wrapper dari `<div className="p-6 flex justify-center">` menjadi `bg-emerald-900 min-h-screen`
- ✅ Ubah card dari `bg-white border-4 border-white` menjadi `bg-emerald-800 border-4 border-amber-400`
- ✅ Ubah semua text menjadi `text-white`
- ✅ Ubah heading menjadi `text-amber-400`
- ✅ Ubah numbered circle dari `bg-yellow-400`, `bg-pink-400`, `bg-purple-400` menjadi `bg-amber-400 text-emerald-900 border-2 border-amber-500`
- ✅ Ubah button CHECK dari `bg-red-600` menjadi `bg-amber-400 text-emerald-900`
- ✅ Ubah kembali button menjadi `bg-amber-400 text-emerald-900`

### 6. **src/routes/cuti-pns-swasta/index.tsx**
- ✅ Ubah wrapper menjadi `bg-emerald-900 min-h-screen p-6`
- ✅ Ubah hero section dari `bg-white dark:bg-gray-800` menjadi `bg-emerald-800 border-2 border-amber-400`
- ✅ Ubah hero background dari `bg-linear-to-r from-teal-700` menjadi `bg-emerald-700 border-b-4 border-amber-400`
- ✅ Ubah breadcrumb text menjadi `text-amber-400`
- ✅ Ubah menu section dari `bg-white` menjadi `bg-emerald-800 border-2 border-amber-400`
- ✅ Ubah menu text dari `text-gray-700` menjadi `text-white`
- ✅ Ubah menu links dari `border-gray-200` menjadi `border-2 border-amber-400`
- ✅ Ubah link text dari `text-gray-800` menjadi `text-white`
- ✅ Ubah ChevronRight dari `text-gray-400` menjadi `text-amber-400`
- ✅ Ubah CTA section dari `bg-teal-600` menjadi `bg-emerald-800 border-l-4 border-amber-400`
- ✅ Ubah CTA heading menjadi `text-amber-400`
- ✅ Ubah CTA button dari `bg-white text-teal-600` menjadi `bg-amber-400 text-emerald-900`
- ✅ Ubah quick links cards dari `bg-white` menjadi `bg-emerald-800 border-l-4 border-amber-400`
- ✅ Ubah icon warna dari `text-teal-600` menjadi `text-amber-400`
- ✅ Ubah card text menjadi `text-white`

---

## 📋 PERUBAHAN YANG MASIH DIPERLUKAN

### File: **src/routes/cuti-alasan-penting.tsx**
Masih perlu update untuk beberapa section:
- [ ] Header section: ubah `from-green-400 via-green-300 to-green-200` menjadi `bg-amber-400`
- [ ] Semua step cards: ubah dari gradient warna lain menjadi `bg-emerald-800`
- [ ] Semua numbered circles: ubah ke `bg-amber-400 text-emerald-900`
- [ ] Footer box: ubah dari gradient teal menjadi `bg-emerald-800`
- [ ] Info box: ubah dari `bg-white` menjadi `bg-emerald-800`
- [ ] Step 2 dan Step 3: ubah dari gradient pink/purple menjadi `bg-emerald-800`

### File: **src/routes/cuti melahirkan.tsx** (jika ada)
- [ ] Periksa dan update background dan text colors

### File: **src/routes/cuti-besar.tsx** (jika ada)
- [ ] Periksa dan update background dan text colors

### File: **src/routes/e-presensi.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/ketentuan.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/prosedur.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/riwayat-cuti.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/ttd-cuti-swasta.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/cuti-pns-negeri/index.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/cuti-pns-negeri/jenis-cuti.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/dasar-hukum/index.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/pengajuan-cuti/index.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/pppk/index.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/pyb/index.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/routes/syarat-berkas/index.tsx**
- [ ] Periksa dan update background dan text colors

### File: **src/components/ui/button.tsx**
- [ ] Review button variants dan update untuk konsistensi dengan skema warna baru
- [ ] Update default variant dari `bg-primary` menjadi menggunakan `bg-emerald-800` dan `text-white`
- [ ] Update hover states untuk konsistensi

### File: **src/context/ThemeContext.tsx** (jika digunakan)
- [ ] Periksa dan pastikan theme context tidak override warna yang sudah diset

---

## 🎨 Panduan Warna yang Digunakan

### Background (60% - Emerald-900)
- **Main Background**: `bg-emerald-900`
- **Card/Section Background**: `bg-emerald-800`
- **Hover State**: `hover:bg-emerald-700`

### Text (30% - White)
- **Main Text**: `text-white`
- **Secondary Text**: `text-white`
- **Descriptions**: `text-white`

### Accent (10% - Amber-400)
- **Border Top/Bottom**: `border-t-4 border-amber-400` atau `border-b-4 border-amber-400`
- **Border Left**: `border-l-4 border-amber-400`
- **Border Regular**: `border-2 border-amber-400`
- **Heading Accent**: `text-amber-400`
- **Icon/Bullet Color**: `text-amber-400`
- **Button Primary**: `bg-amber-400 text-emerald-900`

---

## 📝 Catatan
1. Semua warna `text-gray-*` diganti dengan `text-white`
2. Semua warna `text-black` diganti dengan `text-white`
3. Semua warna `bg-white` diganti dengan `bg-emerald-800`
4. Semua warna `bg-gray-*` diganti dengan `bg-emerald-800` atau background yang sesuai
5. Semua warna `bg-teal-*` diganti dengan `bg-emerald-*`
6. Border accent gunakan amber-400
7. Hover states menggunakan emerald yang lebih gelap atau lebih terang sesuai konteks

---

## Status Keseluruhan
- **Progress**: ~45% selesai (6 dari 13+ file route sudah diupdate)
- **Estimasi Waktu**: ~1-2 jam untuk menyelesaikan semua file
