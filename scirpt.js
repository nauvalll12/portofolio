// script.js

// Pastikan DOM sudah sepenuhnya dimuat sebelum menjalankan script
window.addEventListener('scroll', () => {
    AOS.init
    const reveals = document.querySelectorAll('.reveal');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150; // Sesuaikan titik pemicu
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active'); // Opsi: hilangkan saat scroll ke atas
      }
    }
  });
  // Pilih semua tautan navigasi di dalam elemen <nav> <ul> <li>
  const navLinks = document.querySelectorAll('nav ul li a');

  // Iterasi setiap tautan navigasi
  navLinks.forEach(link => {
      // Tambahkan event listener 'click' ke setiap tautan
      link.addEventListener('click', function(e) {
          // Mencegah perilaku default tautan (yaitu melompat langsung ke ID)
          e.preventDefault();

          // Ambil ID target dari atribut href (misal: dari "#home" menjadi "home")
          const targetId = this.getAttribute('href').substring(1);
          // Dapatkan elemen bagian (section) yang memiliki ID tersebut
          const targetSection = document.getElementById(targetId);

          // Periksa apakah elemen target ditemukan
          if (targetSection) {
              // Hitung offset agar konten tidak tertutup oleh header sticky
              // Jika ada header, ambil tingginya; jika tidak, set 0.
              const headerOffset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;
              // Hitung posisi scroll yang benar
              const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - headerOffset;

              // Lakukan smooth scroll ke posisi yang dihitung
              window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth' // Properti ini yang membuat animasi smooth
              });
          }
      });
  });