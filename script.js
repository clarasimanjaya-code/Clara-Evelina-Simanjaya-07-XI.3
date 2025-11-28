// GANTI HALAMAN  /* INI BUAT FUNGSI PINDAH2 HALAMAN DI WEBSITE */
function showPage(pageId) {
    const pages = document.querySelectorAll(".page"); /* NGAMBIL SEMUA HALAMAN */
    pages.forEach(p => p.classList.remove("active")); /* SEMUA HALAMAN DIMATIKAN DULU */
    document.getElementById(pageId).classList.add("active"); /* HALAMAN YANG DIKLIK DIBUKA */

    if (pageId === "struk") updateStruk(); /* KALO BUKA HALAMAN STRUK, LANGSUNG UPDATE DATA STRUK */
}

// VARIABEL GLOBAL  /* TEMPAT NYIMPEN TOTAL DAN LIST PESANAN */
let totalHarga = 0;
let daftarPesanan = [];

// TAMBAH PESANAN  /* FUNGSI BUAT NGE-TAMBAH PESANAN MASUK KE LIST */
function tambahPesanan() {
    const menu = document.getElementById("pilihanMenu"); /* NGAMBIL MENU YANG DIPILIH */
    const harga = parseInt(menu.value); /* NGAMBIL HARGA DARI VALUE */
    const namaMenu = menu.options[menu.selectedIndex].text; /* NGAMBIL NAMA MENUNYA */
    const jumlah = parseInt(document.getElementById("jumlah").value); /* NGAMBIL JUMLAH YANG DIISI */

    if (!jumlah || jumlah < 1) { /* KALO JUMLAH NGACO */
        alert("Masukkan jumlah yang benar!"); /* PESAN ERROR */
        return;
    }

    const subtotal = harga * jumlah; /* HITUNG HARGA TOTAL MENU INI */
    totalHarga += subtotal; /* TAMBAHIN KE TOTAL BAYAR KESELURUHAN */
    daftarPesanan.push(`${namaMenu} x ${jumlah} = Rp ${subtotal}`); /* MASUKIN KE LIST YANG AKAN DITAMPILIN */

    document.getElementById("list-pesanan").innerHTML =
        daftarPesanan.map(p => `<li>${p}</li>`).join(""); /* NAMPILIN LISTNYA DI HTML */

    document.getElementById("total").textContent = "Rp " + totalHarga; /* UPDATE TOTAL DI BAWAH LIST */
}

// TAMPILKAN STRUK  /* FUNGSI BUAT NAMPILIN STRUK KALO HALAMANNYA DIBUKA */
function updateStruk() {
    const nama = document.getElementById("nama").value; /* NGAMBIL NAMA PELANGGAN */
    document.getElementById("struk-nama").textContent = nama || "-"; /* KALO KOSONG, ISI "-" */

    document.getElementById("struk-list").innerHTML =
        daftarPesanan.map(p => `<li>${p}</li>`).join(""); /* NAMPILIN LIST PESANAN DI STRUK */

    document.getElementById("struk-total").textContent = totalHarga; /* MASANG TOTAL AKHIR DI STRUK */
}
