import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/swasta/cuti-tahunan/")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <>
      <div className="p-6 flex justify-center   dark:bg-slate-900 dark:text-white min-h-screen">
        <div className="w-full max-w-6xl   dark:bg-slate-900 dark:text-white shadow-2xl rounded-2xl p-8 border-4 border-gray-400 mt-10 ">
          <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 text-White">
            ALUR CUTI TAHUNAN
          </h1>
          <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
            BAGI PNS
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                1
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                ADMIN E CUTI SEKOLAH MEMBUATKAN Form Cuti MELALUI APLIKASI E
                CUTI (JIKA GURU YANG MENGAJUKAN CUTI MAKA HARUS ATAS PERSETUJUAN
                KEPALA SEKOLAH)
              </div>
            </div>
            <div className=" flex items-start gap-4">
              <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                2
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                Form Cuti DI SETUJUI DAN SAHKAN CUTI GURU : HARUS TTD KS DAN CAP
                SEKOLAH CUTI KS : TTD KS TIDAK DI CAP → TTD ATASAN LANGSUNG
                (KABID DAN KADIN) DIAJUKAN/ DIKIRIM KE BID. PTK DIKPORA BANTUL.
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>
                    BAGI YANG MENGAJUKAN TTD KE DINAS BISA DILIHAT DI HALAMAN BERIKUT INI ATAU KLIK TOMBOL CHECK
                    <div>
                    <Link
                      to="/ttd-cuti-swasta"
                      className="ml-4 hover:bg-primary  font-bold px-4 py-2 rounded shadow"
                    >
                      CHECK
                    </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                3
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                FORMAT CUTI DI BUAT RANGKAP 2 (DUA) guru DAN KS : 1 (satu) untuk
                ybs dan 1 (satu) untuk bidang ptk
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className=" font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                4
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                ADMIN PRESENSI DINAS BISA MENGINPUT CUTI DI APLIKASI E-PRESENSI
              </div>
            </div>
          </div>
          <div className="p-6 flex justify-">
            <a
              href="/swasta/"
              className="hover: font-semibold px-6 py-2 rounded-md shadow transition"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CutiMelahirkan;
