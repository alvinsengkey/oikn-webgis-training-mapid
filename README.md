# OIKN WebGIS Training - MAPID

- **Nama:** Alvin Sengkey
- **Jabatan:** Analis Data Ilmiah Ahli Pertama
- **Institusi:** Otorita Ibu Kota Nusantara, 
            Kedeputian Bidang Transformasi Hijau dan Digital, 
            Direktorat Data dan Kecerdasan Buatan.

Repository ini merupakan tugas pelatihan WebGIS yang diselenggarakan oleh MapID untuk Otorita Ibu Kota Nusantara (OIKN). Project ini membangun infrastruktur WebGIS lengkap menggunakan Docker, yang terdiri dari database spasial PostGIS, server peta GeoServer, dan frontend peta interaktif berbasis MapLibre. Data yang digunakan untuk ditampilkan pada peta WebGIS ini adalah data sebaran lokasi Cagar Budaya yang ada di tiap daerah di Indonesia.

## Teknologi yang Digunakan

- **PostGIS** — Ekstensi spasial PostgreSQL untuk menyimpan dan mengolah data geospasial
- **GeoServer** — Server open source untuk berbagi data geospasial melalui standar OGC (WMS, WFS, WMTS)
- **MapLibre GL JS** — Library JavaScript untuk menampilkan peta interaktif di browser
- **Vite** — Build tool untuk pengembangan frontend
- **QGIS** — Digunakan untuk persiapan dan styling data geospasial
- **Docker Compose** — Orkestrasi container untuk menjalankan seluruh stack

## Struktur Repository

```
├── frontend/          # Aplikasi web MapLibre + Vite
│   ├── src/
│   │   ├── main.js    # Entry point aplikasi
│   │   ├── map/       # Konfigurasi peta
│   │   ├── controls/  # Kontrol navigasi peta
│   │   ├── markers/   # Marker lokasi (Nusantara, Jakarta, dan Lokasi saat ini)
│   │   ├── events/    # Map events (click, mouseenter, touchstart)
│   │   ├── popups/    # Pop-up ketika ada events yang dijalankan pada layer titik Cagar Budaya dan marker lokasi pada peta
│   │   └── sources/   # Layers dan sumbernya yang diambil dari GeoServer (Cagar Budaya, District, Province)
│   └── index.html
├── data/              # Data dan konfigurasi GeoServer
│   ├── workspaces/    # Workspace GeoServer (ne, tata_ruang, tugas_vin, dll.) - Data Cagar Budaya disimpan dalam workspace tugas_vin
│   ├── styles/        # File SLD untuk styling layer
│   ├── qgis/          # Project QGIS dan data sumber (GDB, shapefile, GeoJSON, GeoPackage)
│   └── ...
├── data_postgis/      # Volume data PostGIS
├── docker-compose.yml # Konfigurasi Docker untuk PostGIS & GeoServer
├── LICENSE            # MIT License
└── README.md
```

## Prasyarat

- [Docker](https://docs.docker.com/get-docker/) dan Docker Compose
- [Node.js](https://nodejs.org/) (untuk pengembangan frontend)

## Cara Menjalankan

### 1. Jalankan PostGIS dan GeoServer

```bash
docker compose up -d
```

Layanan yang akan berjalan:

| Layanan    | URL / Port                      | Keterangan                             |
| ---------- | ------------------------------- | -------------------------------------- |
| PostGIS    | `localhost:5433`                | Database PostgreSQL + ekstensi PostGIS |
| GeoServer  | http://localhost:8081/geoserver | Panel admin GeoServer                  |

Kredensial default PostGIS:
- Database: `oikn_mapid`
- User: `postgres`
- Password: `1323537`

### 2. Jalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

Aplikasi frontend akan berjalan di `http://localhost:5173` (default Vite).

## Data Geospasial

Project ini menggunakan beberapa dataset, antara lain:

- **QGIS Project**
    File project QGIS (`webgis-mapid-tugas.qgz`) beserta data sumber dalam format: 
    — GeoPackage (untuk data GADM Indonesia), dan 
    — GDB (untuk data Sebaran Cagar Budaya di Indonesia)

## Lisensi

[MIT License](LICENSE) — Alvin Sengkey

## Preview Project

![Screenshot Project WebGIS 1](./frontend/screenshot/WebGis%20ss-1.png)

![Screenshot Project WebGIS 2](./frontend/screenshot/WebGis%20ss-2.png)

![Screenshot Project WebGIS 3](./frontend/screenshot/WebGis%20ss-3.png)

![Screenshot Project WebGIS 4](./frontend/screenshot/WebGis%20ss-4.png)
