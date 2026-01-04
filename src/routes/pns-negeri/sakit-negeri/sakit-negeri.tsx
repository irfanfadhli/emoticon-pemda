import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pns-negeri/sakit-negeri/sakit-negeri")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <div className="flex justify-center items-start  min-h-screen">
      <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  ">
        <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 ">
          CUTI SAKIT
        </h1>
        <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
          BAGI PNS
        </h2>
        <div className="">
          <ul className="list-disc space-y-4 pl-6 font-semibold ">
            <li>
              Permintaan secara tertulis kepada PPK atau Pejabat Yang Memperoleh
              Delegasi Wewenang dilampiri surat keterangan dokter yang memiliki
              izin praktek yang dikeluarkan pejabat/instansi yang berwenang
            </li>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Surat keterangan dokter minimal berisi pernyataan perlunya
                diberikan cuti, lamanya cuti, dan keterangan lain yang
                diperlukan.
              </li>
            </ul>

            <li>Jangka waktu cuti paling lama 1 (satu) tahun, apabila :</li>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                dapat ditambah untuk paling lama 6 bulan → Tim Penguji
                Kesehatan.
              </li>
              <li>
                tidak sembuh dalam jangka waktu tersebut → di ujikembali
                kesehatannya.
              </li>
              <li>
                belum sembuh dari penyakitnya → diberhentikan dengan hormat dari
                jabatannya.
              </li>
              <li>gugur kandungan → paling lama 1 ½ bulan</li>
              <li>
                mengalami kecelakaan dalam dan oleh karena menjalankan tugas
                kewajibannya → sembuh.
              </li>
            </ul>
          </ul>
        </div>
        <div className="p-6 flex justify-">
          <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  mt-10 ">
            <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 ">
              ALUR CUTI SAKIT
            </h1>
            <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
              KURANG DARI 14 HARI BAGI PNS
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  1
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  ADMIN E CUTI SEKOLAH MEMBUATKAN Form Cuti MELALUI APLIKASI E
                  CUTI
                </div>
              </div>
              <div className=" flex items-start gap-4">
                <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  2
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Form Cuti DI SETUJUI, SAHKAN DAN MELAMPIRKAN SURAT KETERANGAN
                  DOKTER CUTI GURU : HARUS TTD KS DAN CAP SEKOLAH CUTI KS : TTD
                  KS TIDAK DI CAP → TTD ATASAN LANGSUNG (KABID DAN KADIN)
                  DIAJUKAN/dikirim KE BID. PTK
                  <li>
                    BAGI YANG MENGAJUKAN TTD KE DINAS BISA MENGETAHUI PROSES
                    PENANDATANGANAN CUTI MELALUI CHECK
                    <Link
                      to="/ttd-cuti-swasta"
                      className="ml-4 bg-primary hover:bg-secondary font-bold px-4 py-2 rounded shadow"
                    >
                      CHECK
                    </Link>
                  </li>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  3
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  FORMAT CUTI DI BUAT RANGKAP 2 (DUA) guru : 1 (SATU) UNTUK YBS
                  DAN 1 (satu) untuk SEKOLAH ks : 1 (satu) untuk ybs dan 1
                  (satu) untuk bidang ptk
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  4
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  ADMIN PRESENSI DINAS BISA MENGINPUT CUTI DI APLIKASI E
                  PRESENSI
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
              href="/pns-negeri/jenis-cuti"
              className=" bg-primary hover:bg-secondary  font-semibold px-6 py-2 rounded-md shadow transition"
            >
              Kembali
            </a>
        </div>
      </div>
    </div>
  );
}

export default CutiMelahirkan;
