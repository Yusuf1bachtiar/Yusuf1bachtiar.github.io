// Contoh interaksi sederhana
document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const jam = new Date().getHours();
    
    let ucapan;
    if (jam < 12) ucapan = "Selamat Pagi!";
    else if (jam < 18) ucapan = "Selamat Siang!";
    else ucapan = "Selamat Malam!";

    console.log(`Log: Page loaded. ${ucapan} Yusuf!`);
    
    // Kamu bisa menambah animasi atau fitur lainnya di sini
});