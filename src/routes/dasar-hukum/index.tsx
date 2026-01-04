import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/dasar-hukum/")({
  component: JenisCutiComponent,
});

function JenisCutiComponent() {
  return (
    <div className="space-y-6">
      <div className="  dark:bg-slate-900 dark:text-white rounded shadow-sm p-4">
        <nav className="text-sm  dark:text-white">
          <span className="hover: dark:hover:text-white cursor-pointer">
            Home
          </span>
          <span className="mx-2">/</span>
          <span className=" dark:text-white font-medium">
            Dasar Hukum
          </span>
        </nav>
        <div className="mt-4  dark:text-white-200 space-y-3">
          {[1, 2, 3].map((num) => (
            <p key={num} className="m-5">
              {getdasarHukum(num.toString())}
            </p>
          ))}
        </div>
      </div>
      <div className="p-6 flex justify-">
        <a
          href="/pns-negeri/"
          className="mt-3 inline-block bg-gray-400  font-semibold px-3 py-2 rounded-md shadow hover:bg-gray-900 hover:text-white transition border-2 border-white"
        >
          Kembali
        </a>
      </div>
    </div>
  );
}

function getdasarHukum(namaJenis: string): string {
  const keterangan: Record<string, string> = {
    "1": "1. Peraturan PP Nomor 11 Tahun 2017 Tentang Manajemen Pegawai Negeri Sipil (Pasal 309 s.d. Pasal 341).",
    "2": "2. Peraturan BKN RI Nomor 24 Tahun 2017 Tentang Tata Cara Pemberian Cuti Pegawai Negeri Sipil.",
    "3": "3. Peraturan Gubernur Daerah Istimewa Yogyakarta Nomor 50 Tahun 2018 tentang Tata Cara Pemberian Cuti Pegawai Negeri Sipil.",
  };
  return keterangan[namaJenis] || "Keterangan tidak tersedia.";
}
