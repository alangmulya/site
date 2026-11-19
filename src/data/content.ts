// =====================================================================
// FILE UTAMA UNTUK MEMPERBARUI WEBSITE.
// Bagian yang paling sering Anda ubah ada di paling atas:
//   certs (sertifikat), achievements (pencapaian), experience (pengalaman)
// Setiap teks punya versi Indonesia (id) dan Inggris (en).
// Tanggal memakai format 'TAHUN-BULAN', contoh '2026-11'.
// =====================================================================

export type Lang = 'id' | 'en';
export type L = Record<Lang, string>;
export const langs: Lang[] = ['id', 'en'];
export const fmt = (d: string, lang: Lang) =>
  new Date(+d.slice(0, 4), +d.slice(5, 7) - 1, 1).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { month: 'short', year: 'numeric' });

// ---------- SERTIFIKAT ----------
// `file` = nama berkas di public/certs/ TANPA ekstensi (pdf/png/jpg/webp otomatis terdeteksi).
export type Cert = { title: string; issuer: string; date: string; note?: L; file: string };
export const certs: Cert[] = [
  { title: 'Pemrograman Mobile Android', issuer: 'Google Indonesia', date: '2017-08', note: { id: 'Level Basic', en: 'Basic level' }, file: 'google-android-basic' },
  { title: 'Perekayasa Jaringan Lokal', issuer: 'BNSP', date: '2018-06', note: { id: 'Administrator Jaringan', en: 'Network Administrator' }, file: 'bnsp-jaringan-lokal' },
  { title: 'Pemrograman dan Pengembangan Perangkat Lunak', issuer: 'BNSP', date: '2019-08', note: { id: 'Junior Web Programmer', en: 'Junior Web Programmer' }, file: 'bnsp-web-programmer' },
  { title: 'Pemrograman Mobile', issuer: 'BNSP', date: '2019-12', note: { id: 'Junior Mobile Programmer', en: 'Junior Mobile Programmer' }, file: 'bnsp-mobile-programmer' },
  { title: 'MTCNA', issuer: 'MikroTik', date: '2023-03', note: { id: 'MikroTik Certified Network Associate', en: 'MikroTik Certified Network Associate' }, file: 'mikrotik-mtcna' },
  { title: 'TOEFL', issuer: 'Central Course', date: '2023-04', note: { id: 'Skor 560 dari 677', en: 'Score 560 out of 677' }, file: 'toefl-central-course' },
  { title: 'LKS ITNSA Teknik Komputer Jaringan', issuer: 'MGMP TKJ Bekasi', date: '2025-02', note: { id: 'Pembimbing', en: 'Coach / supervisor' }, file: 'lks-itnsa-pembimbing' },
];

// ---------- PENCAPAIAN ----------
export const achievements: { date: string; title: L; desc: L }[] = [
  { date: '2017-08', title: { id: 'Siswa terbaik kedua, kelas Android KEJAR', en: 'Second-best student, Android KEJAR class' }, desc: { id: 'Kelompok Belajar (KEJAR), Cikarang.', en: 'Learning group (KEJAR), Cikarang.' } },
  { date: '2017-11', title: { id: 'Juara 2 Lomba IT Comsphere', en: '2nd place, IT Comsphere competition' }, desc: { id: 'President University, Jababeka.', en: 'President University, Jababeka.' } },
  { date: '2026-04', title: { id: 'Pembimbing LKS ITNSA, peringkat 3', en: 'LKS ITNSA coach, 3rd place' }, desc: { id: 'Tingkat Kabupaten dan Kota Bekasi, bidang Teknik Komputer Jaringan.', en: 'Bekasi Regency and City level, Computer and Network Engineering.' } },
  { date: '2026-11', title: { id: 'Pembimbing AI Vision Challenge, Juara 2', en: 'AI Vision Challenge coach, 2nd place' }, desc: { id: 'Instar Education Robotic Coding Competition (daring).', en: 'Instar Education Robotic Coding Competition (online).' } },
  { date: '2026-11', title: { id: 'Pembimbing Virtual Robot Soccer, Juara Harapan 1', en: 'Virtual Robot Soccer coach, 1st runner-up (Harapan 1)' }, desc: { id: 'Instar Education Robotic Coding Competition (daring).', en: 'Instar Education Robotic Coding Competition (online).' } },
];

export const leadership: { period: L; title: L; org: string; desc: L }[] = [
  { period: { id: 'Jan 2024 – sekarang', en: 'Jan 2024 – present' }, title: { id: 'Penanggung Jawab LKS ITNSA', en: 'Person in charge, LKS ITNSA' }, org: 'Teknik Komputer Jaringan, Bekasi',
    desc: { id: 'Mengantarkan siswa meraih peringkat 3, 4, dan 5 tingkat Kabupaten pada lomba ITNSA (IT Network Systems Administration).', en: 'Guided students to 3rd, 4th, and 5th place at regency level in ITNSA (IT Network Systems Administration).' } },
  { period: { id: 'Agu – Jun 2022', en: 'Aug – Jun 2022' }, title: { id: 'Kepala Divisi Software', en: 'Head of Software Division' }, org: 'Laboratorium Komputer, Universitas Singaperbangsa Karawang',
    desc: { id: 'Mengarahkan rekan divisi software dalam instalasi dan persiapan software di lab komputer.', en: 'Led the software division in installing and preparing software in the computer lab.' } },
  { period: { id: 'Jan – Mar 2018', en: 'Jan – Mar 2018' }, title: { id: 'Kepala Divisi Software', en: 'Head of Software Division' }, org: 'Laboratorium Komputer, SMKN 1 Cikarang Selatan',
    desc: { id: 'Mengarahkan divisi software dan menginstal sistem operasi Windows untuk kebutuhan praktikum.', en: 'Led the software division and installed Windows for practical classes.' } },
];

// ---------- PENGALAMAN (urut otomatis dari yang terbaru; end kosong = sekarang) ----------
export const experience: { role: L; org: string; place?: string; start: string; end?: string; bullets: L[] }[] = [
  {
    // PEKERJAAN SAAT INI (tanpa `end` = sekarang). Pastikan bulan mulai di bawah sudah benar,
    // lalu isi `bullets` dengan tugas dan pencapaian Anda.
    role: { id: 'IT Support', en: 'IT Support' }, org: 'PT Sarana Dinamika Pratama', start: '2026-06',
    bullets: [],
  },
  {
    role: { id: 'IT Staff', en: 'IT Staff' }, org: 'PT Toso Industry Indonesia', place: 'Cikarang', start: '2025-08', end: '2026-05',
    bullets: [
      { id: 'Merawat web internal dan antivirus.', en: 'Maintained the internal website and antivirus.' },
      { id: 'Membuat dan merawat program/aplikasi web internal.', en: 'Built and maintained internal web applications.' },
      { id: 'Instalasi, perbaikan, dan perawatan hardware dan software komputer, CCTV, dan printer.', en: 'Installed, repaired, and maintained computer hardware and software, CCTV, and printers.' },
      { id: 'Memantau jaringan internet dan suhu ruang server.', en: 'Monitored the internet network and server room temperature.' },
      { id: 'Menjalankan workplan, membuat Kaizen, serta membuat, memeriksa, dan memperbarui dokumen SE.', en: 'Carried out the workplan, wrote Kaizen reports, and created, reviewed, and updated SE documents.' },
    ],
  },
  {
    role: { id: 'Guru Produktif / Kepala Laboratorium Software', en: 'Vocational Teacher / Head of Software Laboratory' }, org: 'SMK Bintang Harapan', place: 'Cibarusah', start: '2023-01', end: '2025-06',
    bullets: [
      { id: 'Mengajar Administrasi Infrastruktur Jaringan: topologi, LAN, routing, CCTV, dan MikroTik.', en: 'Taught Network Infrastructure Administration: topology, LAN, routing, CCTV, and MikroTik.' },
      { id: 'Mengajar Administrasi Sistem Jaringan: web server, DNS server, dan database server di Linux Debian.', en: 'Taught Network System Administration: web, DNS, and database servers on Linux Debian.' },
    ],
  },
  {
    role: { id: 'Guru Produktif / Kepala Program Studi', en: 'Vocational Teacher / Head of Study Program' }, org: 'SMK Almanar Islamic School', place: 'Cibarusah', start: '2022-10', end: '2025-05',
    bullets: [
      { id: 'Mengajar Administrasi Infrastruktur Jaringan: topologi, LAN, routing, dan MikroTik.', en: 'Taught Network Infrastructure Administration: topology, LAN, routing, and MikroTik.' },
      { id: 'Mengajar Administrasi Sistem Jaringan: web server dengan HTML, CSS, dan PHP.', en: 'Taught Network System Administration: web servers with HTML, CSS, and PHP.' },
    ],
  },
  {
    role: { id: 'Asisten Laboratorium', en: 'Laboratory Assistant' }, org: 'Universitas Singaperbangsa Karawang', place: 'Karawang', start: '2020-08', end: '2022-07',
    bullets: [
      { id: 'Membantu praktikum Mobile Programming (Android) untuk Informatika dan Sistem Informasi.', en: 'Assisted Mobile Programming (Android) labs for Informatics and Information Systems.' },
      { id: 'Membantu praktikum Sistem Operasi (Linux Debian) untuk Informatika.', en: 'Assisted Operating Systems (Linux Debian) labs for Informatics.' },
    ],
  },
];

export const education: { title: L; org: string; start: string; end: string; note: L }[] = [
  { title: { id: 'S1 Informatika, Fakultas Ilmu Komputer', en: 'B.Sc. in Informatics, Faculty of Computer Science' }, org: 'Universitas Singaperbangsa Karawang', start: '2018-09', end: '2025-06',
    note: { id: 'IPK 3,7 dari 4,00. Penghargaan: Cum laude.', en: 'GPA 3.7 out of 4.00. Honors: Cum laude.' } },
  { title: { id: 'Teknik Komputer Jaringan', en: 'Computer and Network Engineering' }, org: 'SMKN 1 Cikarang Selatan', start: '2015-08', end: '2018-07',
    note: { id: 'Nilai Sertifikat Kompetensi 97,78 dari 100.', en: 'Competency certificate score 97.78 out of 100.' } },
];

// ---------- PROYEK (kosong = bagian ini otomatis disembunyikan) ----------
// Tambahkan proyek Android/web/jaringan Anda di sini, contoh di README.md.
export type Kind = 'web' | 'mobile' | 'api' | 'cli' | 'data';
export type LinkType = 'demo' | 'video' | 'apk' | 'play' | 'repo' | 'docs' | 'case';
export type Project = {
  slug: string; title: string; kind: Kind; problem: L; solution: L; result: L;
  stack: string[]; links: { type: LinkType; url: string }[];
};
export const projects: Project[] = [];

export const kinds: Record<Kind, L> = {
  web: { id: 'Web', en: 'Web' }, mobile: { id: 'Android', en: 'Android' }, api: { id: 'API', en: 'API' },
  cli: { id: 'CLI', en: 'CLI' }, data: { id: 'Data / AI', en: 'Data / AI' },
};
export const linkLabels: Record<LinkType, L> = {
  demo: { id: 'Live demo', en: 'Live demo' }, video: { id: 'Video demo', en: 'Video demo' },
  apk: { id: 'Unduh APK', en: 'Download APK' }, play: { id: 'Google Play', en: 'Google Play' },
  repo: { id: 'Source code', en: 'Source code' }, docs: { id: 'Dokumentasi API', en: 'API docs' }, case: { id: 'Studi kasus', en: 'Case study' },
};

// ---------- PROFIL ----------
export const site = {
  url: 'https://web.alangmulya.workers.dev', // ganti dengan domain Anda
  name: 'Alang Mulya Lesmana',
  role: { id: 'Administrator Jaringan & Developer Android/Web', en: 'Network Administrator & Android/Web Developer' } as L,
  email: 'alangmulya11@gmail.com',
  linkedin: 'https://www.linkedin.com/in/alangmulya/',
  github: '', // isi jika ada, contoh: 'https://github.com/username'
  cv: '/cv-alang-mulya-lesmana.pdf',
  location: 'Cibarusah, Bekasi',
  education: 'S1 Informatika (cum laude)',
  stack: ['MikroTik', 'Linux Debian', 'Android', 'Web'],
  // true = tampil "Terbuka untuk peluang baru". false = tampil pekerjaan Anda saat ini.
  openToWork: false,
  gothic: 'L', // huruf awal kata yang memakai font gothic di judul hero (kosongkan '' untuk mematikan)
  formAction: '', // isi endpoint Formspree/Web3Forms jika ingin formulir kontak
};

export const profile = {
  pitch: {
    id: 'Lulusan Informatika dengan pengalaman di administrasi jaringan, perawatan sistem, pengembangan Android dan web, serta membimbing siswa hingga juara lomba.',
    en: 'Informatics graduate with experience in network administration, systems maintenance, Android and web development, and coaching students to competition wins.',
  } as L,
  about: [
    { id: 'Saya lulusan Informatika Universitas Singaperbangsa Karawang (IPK 3,7, cum laude) yang bekerja di dua sisi dunia IT: infrastruktur jaringan dan pengembangan perangkat lunak.', en: 'I graduated in Informatics from Universitas Singaperbangsa Karawang (GPA 3.7, cum laude) and work on two sides of IT: network infrastructure and software development.' },
    { id: 'Saat ini saya bekerja sebagai IT Support di PT Sarana Dinamika Pratama. Sebelumnya saya IT Staff di PT Toso Industry Indonesia, mengajar jaringan dan sistem di dua SMK, serta menjadi asisten laboratorium pemrograman Android dan sistem operasi.', en: 'I currently work as IT Support at PT Sarana Dinamika Pratama. Previously I was IT Staff at PT Toso Industry Indonesia, taught networking and systems at two vocational schools, and served as a lab assistant for Android programming and operating systems.' },
    { id: 'Saya senang menyederhanakan hal teknis, lewat aplikasi yang saya buat maupun lewat mengajar. Siswa yang saya bimbing sudah meraih peringkat di lomba tingkat kabupaten dan kompetisi robotik.', en: 'I enjoy making technical things simple, through the applications I build and through teaching. Students I coached have placed in regency-level contests and robotics competitions.' },
  ] as L[],
  facts: [
    { id: 'Cibarusah, Kabupaten Bekasi', en: 'Cibarusah, Bekasi Regency' },
    { id: 'S1 Informatika, UNSIKA', en: 'B.Sc. Informatics, UNSIKA' },
    { id: 'Indonesia, Inggris (TOEFL 560)', en: 'Indonesian, English (TOEFL 560)' },
    { id: 'Jarak jauh, hibrida, atau di lokasi', en: 'Remote, hybrid, or on-site' },
  ] as L[],
};

// ---------- BIDANG KEAHLIAN ----------
export const areas: { glyph: string; color: string; title: L; desc: L; chips: string[] }[] = [
  { glyph: 'net', color: 'sky', title: { id: 'Jaringan dan infrastruktur', en: 'Networking and infrastructure' },
    desc: { id: 'Pengalaman di topologi, LAN, routing, MikroTik, dan CCTV, sebagai pengajar maupun IT Staff, ditambah pemantauan koneksi internet.', en: 'Experience with topology, LAN, routing, MikroTik, and CCTV as a teacher and IT staff, plus internet connection monitoring.' },
    chips: ['MikroTik (MTCNA)', 'LAN', 'Routing', 'DNS Server', 'CCTV'] },
  { glyph: '$_', color: 'amber', title: { id: 'Sistem dan server Linux', en: 'Linux systems and servers' },
    desc: { id: 'Administrasi Linux Debian: web server, DNS server, dan database server, serta perawatan hardware dan software komputer.', en: 'Linux Debian administration: web, DNS, and database servers, plus computer hardware and software maintenance.' },
    chips: ['Linux Debian', 'Web Server', 'Database Server', 'Instalasi Windows'] },
  { glyph: 'apk', color: 'green', title: { id: 'Pemrograman Android', en: 'Android programming' },
    desc: { id: 'Android Studio dengan Kotlin dan Java. Bersertifikat Google Indonesia dan BNSP, serta pernah menjadi asisten laboratorium Mobile Programming.', en: 'Android Studio with Kotlin and Java. Certified by Google Indonesia and BNSP, and a former Mobile Programming lab assistant.' },
    chips: ['Android Studio', 'Kotlin', 'Java'] },
  { glyph: '</>', color: 'violet', title: { id: 'Pengembangan web', en: 'Web development' },
    desc: { id: 'HTML, CSS, PHP, dan Bootstrap, termasuk membuat dan merawat aplikasi web internal perusahaan.', en: 'HTML, CSS, PHP, and Bootstrap, including building and maintaining internal company web apps.' },
    chips: ['HTML', 'CSS', 'PHP', 'Bootstrap'] },
  { glyph: 'edu', color: 'pink', title: { id: 'Mengajar dan membimbing', en: 'Teaching and coaching' },
    desc: { id: 'Mengajar mata pelajaran produktif TKJ di dua SMK dan membimbing siswa di LKS ITNSA serta kompetisi robotik dan AI.', en: 'Taught vocational networking subjects at two schools and coached students in LKS ITNSA and robotics and AI competitions.' },
    chips: ['Kurikulum TKJ', 'Pembimbing lomba', 'Praktikum'] },
];

export const skills: { name: L; color: string; items: string[] }[] = [
  { name: { id: 'Bahasa pemrograman', en: 'Programming languages' }, color: 'primary', items: ['HTML', 'CSS', 'PHP', 'C++', 'C#', 'Java', 'Kotlin'] },
  { name: { id: 'Perangkat kantor', en: 'Office tools' }, color: 'teal', items: ['Ms. Word', 'Ms. Excel', 'Ms. PowerPoint'] },
  { name: { id: 'Operasional IT', en: 'IT operations' }, color: 'amber', items: ['Perawatan hardware', 'Monitoring jaringan', 'Kaizen', 'Dokumen SE'] },
  { name: { id: 'Bahasa', en: 'Languages' }, color: 'pink', items: ['Bahasa Indonesia', 'English (TOEFL 560/677)'] },
];

export const ui = {
  id: {
    title: 'Alang Mulya Lesmana – Administrator Jaringan & Developer Android/Web',
    desc: 'Portofolio dan CV Alang Mulya Lesmana: administrasi jaringan (MikroTik, Linux Debian), pengembangan Android dan web, serta pembimbing siswa SMK.',
    skip: 'Lewati ke konten', theme: 'Tema', present: 'sekarang',
    nav: [['about', 'Tentang'], ['expertise', 'Keahlian'], ['projects', 'Proyek'], ['experience', 'Pengalaman'], ['certs', 'Sertifikat'], ['achievements', 'Pencapaian'], ['education', 'Pendidikan'], ['contact', 'Kontak']],
    status: 'Terbuka untuk peluang baru',
    nowAs: 'Saat ini bekerja sebagai',
    contactMe: 'Hubungi saya', downloadCv: 'Unduh CV (PDF)',
    about: 'Tentang saya', facts: ['Lokasi', 'Pendidikan', 'Bahasa', 'Cara kerja'],
    expertise: 'Bidang keahlian', projects: 'Proyek', problem: 'Masalah', solution: 'Solusi', result: 'Hasil',
    experience: 'Pengalaman kerja', certs: 'Sertifikat', certsHint: 'Klik Pratinjau untuk melihat sertifikat langsung di halaman ini.',
    preview: 'Pratinjau', download: 'Unduh', openTab: 'Buka di tab baru', close: 'Tutup', soon: 'Berkas menyusul',
    achievements: 'Pencapaian', leadership: 'Kepemimpinan', education: 'Pendidikan',
    contact: 'Mari terhubung', contactText: 'Ada peluang kerja, kolaborasi, atau pertanyaan seputar jaringan dan pemrograman? Silakan kirim pesan.',
    contactTextBusy: 'Ada kolaborasi, pertanyaan seputar jaringan dan pemrograman, atau sekadar ingin berdiskusi? Silakan kirim pesan.',
    name: 'Nama', message: 'Pesan', send: 'Kirim pesan', built: 'Dibuat dengan Astro, di-hosting di Cloudflare',
  },
  en: {
    title: 'Alang Mulya Lesmana – Network Administrator & Android/Web Developer',
    desc: 'Portfolio and CV of Alang Mulya Lesmana: network administration (MikroTik, Linux Debian), Android and web development, and vocational school coach.',
    skip: 'Skip to content', theme: 'Theme', present: 'present',
    nav: [['about', 'About'], ['expertise', 'Expertise'], ['projects', 'Projects'], ['experience', 'Experience'], ['certs', 'Certificates'], ['achievements', 'Achievements'], ['education', 'Education'], ['contact', 'Contact']],
    status: 'Open to new opportunities',
    nowAs: 'Currently working as',
    contactMe: 'Contact me', downloadCv: 'Download CV (PDF)',
    about: 'About me', facts: ['Location', 'Education', 'Languages', 'Work mode'],
    expertise: 'Areas of expertise', projects: 'Projects', problem: 'Problem', solution: 'Solution', result: 'Result',
    experience: 'Work experience', certs: 'Certificates', certsHint: 'Click Preview to view a certificate right on this page.',
    preview: 'Preview', download: 'Download', openTab: 'Open in new tab', close: 'Close', soon: 'File coming soon',
    achievements: 'Achievements', leadership: 'Leadership', education: 'Education',
    contact: 'Let’s connect', contactText: 'Have a job opportunity, a collaboration, or a question about networking and programming? Send a message.',
    contactTextBusy: 'Have a collaboration, a question about networking and programming, or just want to talk? Send a message.',
    name: 'Name', message: 'Message', send: 'Send message', built: 'Built with Astro, hosted on Cloudflare',
  },
};
