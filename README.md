# Website CV dan Portofolio: Alang Mulya Lesmana

Astro (statis), dua bahasa (/id/ dan /en/), siap di-deploy ke Cloudflare Workers.

## Menjalankan
```bash
npm install
npm run dev      # buka http://localhost:4321/id/
npm run build    # hasil di folder dist/
```

## Memperbarui isi (cukup edit src/data/content.ts)
| Yang ingin diubah | Bagian di content.ts |
|---|---|
| Sertifikat baru | `certs` |
| Lomba, juara, penghargaan | `achievements`, `leadership` |
| Pekerjaan baru | `experience` (urut otomatis, tanpa `end` = "sekarang") |
| Proyek | `projects` (kosong = bagian disembunyikan) |
| Nama, email, LinkedIn, GitHub | `site` |

### Menambah sertifikat
1. Simpan berkas (PDF/PNG/JPG/WEBP) di `public/certs/`, misalnya `mikrotik-mtcna.pdf`.
2. Pastikan `file: 'mikrotik-mtcna'` (tanpa ekstensi) di entri sertifikat tersebut.
3. Entri baru tanpa berkas tetap tampil dengan label "Berkas menyusul".
Kompres berkas besar lebih dulu agar halaman tetap cepat.

### Menambah proyek (contoh)
```ts
{
  slug: 'absensi-android', title: 'Absensi Android', kind: 'mobile',
  problem: { id: '...', en: '...' }, solution: { id: '...', en: '...' }, result: { id: '...', en: '...' },
  stack: ['Kotlin', 'Room'],
  links: [{ type: 'video', url: 'https://youtube.com/...' }, { type: 'apk', url: '...' }, { type: 'repo', url: '...' }],
}
```
Jenis tautan: demo, video, apk, play, repo, docs, case.

## Deploy ke Cloudflare Workers (via GitHub)
1. Push ke GitHub.
2. Cloudflare Dashboard > Workers & Pages > Create > Import a repository.
3. Build command `npm run build`, deploy command `npx wrangler deploy`.
4. Setelah punya domain, ganti `site` di `astro.config.mjs` dan `site.url` di content.ts.

Berkas yang sebaiknya Anda tambahkan di `public/`: `og.png` (1200x630 px, pratinjau saat tautan dibagikan).
