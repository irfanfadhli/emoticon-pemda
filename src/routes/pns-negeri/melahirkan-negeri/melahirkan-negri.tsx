import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/pns-negeri/melahirkan-negeri/melahirkan-negri"
)({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <div className="flex justify-center items-start">
      <div className="w-full max-w-6xl shadow-2xl rounded-2xl p-8 border-4 mt-10 mb-10">
        <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2">
          CUTI MELAHIRKAN
        </h1>
        <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8">
          BAGI PNS DI SEKOLAH NEGERI
        </h2>
        <div className="">
          <ul className="list-disc space-y-4 pl-6 font-semibold">
            <li>
              DITUJUKAN BAGI PNS YANG MEMILIKI ANAK PERTAMA S.D KETIGA PADA SAAT
              MENJADI PNS
            </li>
            <li>
              UNTUK KELAHIRAN ANAK KEEMPAT DAN SETERUSNYA, KEPADA PNS DIBERIKAN
              CUTI BESAR
            </li>
            <li>PERMINTAAN CUTI TERSEBUT TIDAK DAPAT DITANGGUHKAN</li>
            <li>
              MENGESAMPINGKAN KETENTUAN TELAH BEKERJA PALINGSINGKAT 5 TAHUN
              SECARA TERUS-MENERUS
            </li>
            <li>
              LAMANYA SAMA DENGAN LAMANYA CUTI MELAHIRKAN YAITU 3 (TIGA) BULAN,
              APABILA KURANG DARI 3 BULAN (DALAM HAL TERTENTU, ATAS PERMINTAAN)
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-">
          <div className="w-full max-w-6xl shadow-2xl rounded-2xl p-8 border-4 mt-10">
            <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2">
              ALUR CUTI MELAHIRKAN
            </h1>
            <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8">
              BAGI PNS DI SEKOLAH SWASTA
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  1
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Form Cuti DIISI MELALUI APLIKASI ECUTI (ADMIN SEKOLAH)
                </div>
              </div>
              <div className=" flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  2
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  BERKAS CUTI DIKIRIMKAN KE BIDANG PTK DIKPORA RANGKAP 2 UNTUK
                  DIVERIFIKASI DAN DIAJUKAN PENGESAHAN KEPALA DINAS, DENGAN
                  MELAMPIRKAN:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>SURAT PENGANTAR DARI SEKOLAH</li>
                    <li>SURAT KETERANGAN DOKTER</li>
                    <li>SURAT PELIMPAHAN TUGAS</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  3
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  SURAT CUTI YANG SUDAH JADI BISA DICEK MELALUI TOMBOL CHECK DAN
                  DIAMBIL DI BIDANG PTK
                  <Link
                    to="/ttd-cuti-swasta"
                    className="ml-4 bg-primary hover:bg-secondary  font-bold px-4 py-2 rounded shadow"
                  >
                    CHECK
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  4
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  ADMIN PRESENSI DINAS BISA MENGINPUT CUTI DI APLIKASI
                  E-PRESENSI
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/pns-negeri/jenis-cuti"
            className="bg-primary hover:bg-secondary font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}

export default CutiMelahirkan;
