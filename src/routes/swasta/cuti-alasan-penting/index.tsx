import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/swasta/cuti-alasan-penting/"
)({
  component: CutiPNSInfo,
});

export default function CutiPNSInfo() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center  ">
      <div className="max-w-7xl mx-auto p-8">
        <div className="rounded-3xl shadow-2xl p-8 border-b-2 ">
          <div className="rounded-3xl shadow-xl p-8 mb-8 flex items-center justify-between border-b-2 ">
            <div className="text-center flex-1">
              <h1 className="text-5xl font-black  mb-2 italic">
                CUTI ALASAN
              </h1>
              <h2 className="text-4xl font-black  italic">
                PENTING BAGI PNS
              </h2>
            </div>
          </div>

          {/* Content Section 1 */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-4">
              <div className="rounded-3xl shadow-xl p-8 h-full flex items-center justify-center border-2 ">
                <div className="text-center">
                  <h3 className="text-3xl font-black  leading-tight">
                    PNS
                    <br />
                    BERHAK ATAS
                    <br />
                    CAP
                    <br />
                    APABILA:
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="rounded-3xl shadow-xl p-8 border-t-4 ">
                <ul className="space-y-4 ">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      IBU, BAPAK, ISTERI ATAU SUAMI, ANAK, ADIK, KAKAK, MERTUA,
                      ATAU MENANTU SAKIT KERAS ATAU MENINGGAL DUNIA;
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      SALAH SEORANG ANGGOTA KELUARGA YANG DIMAKSUD DIATAS
                      MENINGGAL DUNIA
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      DAN MENURUT PERATURAN PERUNDANG-UNDANGAN PNS YBS HARUS
                      MENGURUS HAK-HAK DARI ANGGOTA KELUARGANYA YANG MENINGGAL
                      DUNIA ATAU MELANGSUNGKAN PERNIKAHAN.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-4">
              <div className="rounded-3xl shadow-xl p-8 h-full flex items-center justify-center border-2 ">
                <div className="text-center">
                  <h3 className="text-3xl font-black  leading-tight">
                    CAP JUGA DAPAT
                    <br />
                    DIBERIKAN BAGI:
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="rounded-3xl shadow-xl p-8 border-t-4 ">
                <ul className="space-y-4 ">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      PNS LAKI-LAKI YANG ISTERINYA MELAHIRKAN/OPERASI CAESAR
                      DENGAN MELAMPIRKAN SURAT KETERANGAN RAWAT INAP DARI UNIT
                      PELAYANAN KESEHATAN.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      PNS MENGALAMI MUSIBAH KEBAKARAN RUMAH ATAU BENCANA ALAM
                      DENGAN MELAMPIRKAN SURAT KETERANGAN PALING RENDAH DARI
                      KETUA RT.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      PNS YANG DITEMPATKAN PADA PERWAKILAN RI YANG RAWAN
                      DAN/ATAU BERBAHAYA GUNA MEMULIHKAN KONDISI KEJIWAAN PNS
                      YBS.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-4">
              <div className="rounded-3xl shadow-xl p-8 h-full flex items-center justify-center border-2 ">
                <div className="text-center">
                  <h3 className="text-3xl font-black  leading-tight">
                    PEMBERIAN IZIN
                    <br />
                    SEMENTARA
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-span-8">
              <div className="rounded-3xl shadow-xl p-8 border-t-4 ">
                <ul className="space-y-4 ">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      TIDAK DAPAT MENUNGGU KEPUTUSAN DARI PPK
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      DIBERIKAN OLEH PEJABAT YANG TERTINGGI DI TEMPAT PNS YBS
                      BEKERJA
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-xl mt-1">
                      •
                    </span>
                    <span className="font-semibold text-lg leading-relaxed">
                      HARUS SEGERA DIBERITAHUKAN KEPADA PPK
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br   rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-4xl font-black ">
              • MAKSIMAL CUTI 2 BULAN DALAM 1 TAHUN •
            </h3>
          </div>
          <div className="mt-8">
            <div className="bg-linear-to-br from-emerland-900  rounded-3xl shadow-xl p-6 mb-6 flex items-center justify-between">
              <div className="text-center flex-1">
                <h2
                  className="text-4xl font-black text-whiite"
                  style={{ fontStyle: "italic" }}
                >
                  ALUR CUTI ALASAN PENTING
                </h2>
                <p
                  className="text-2xl font-black  mt-2"
                  style={{ fontStyle: "italic" }}
                >
                  &lt;14 HARI BAGI PNS
                </p>
              </div>
            </div>
            <div className="bg-emerland-900 rounded-3xl shadow-xl p-6 mb-4 flex items-center gap-4">
              <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg shrink-0">
                <span className="text-3xl font-black ">1</span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold text white">
                  ADMIN E CUTI SEKOLAH MEMBUATKAN FORM CUTI MELALUI APLIKASI E
                  CUTI DAN DENGAN PERSETUJUAN KS
                </p>
              </div>
            </div>
            <div className="bg-linear-to-br   rounded-3xl shadow-xl p-6 mb-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg shrink-0">
                  <span className="text-3xl font-black ">2</span>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-bold  mb-3">
                    FORM CUTI DI SETUJUI DAN SAHKAN
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="font-bold ">
                        CUTI GURU : HARUS TTD KEPALA SEKOLAH DAN CAP SEKOLAH
                      </span>
                    </p>
                    <p className="text-lg">
                      <span className="font-bold ">CUTI KS : </span>
                      <span className="font-bold ">
                        TTD KS TIDAK DI CAP →{" "}
                      </span>
                      <span className="font-bold ">
                        TTD ATASAN LANGSUNG (KABID DAN KADIN)
                        DIAJUKAN/DIKIRIMKAN KE BID. PTK DINAS DIKPORA
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-emerland-900 rounded-3xl shadow-xl p-6 mb-4 flex items-start gap-4">
              <div className="flex-1">
                <p className="text-lg font-bold ">
                  BAGI <span className="">KS</span> YANG MENGAJUKAN
                  TTD KE DINAS BISA MENGETAHUI PROSES PENANDATANGANAN CUTI
                  MELALUI CHECK
                </p>
              </div>
              <div className="hover-bg-secondary rounded-xl shadow-lg shrink-0">
                <Link
                  to="/ttd-cuti-swasta"
                  className="  hover:bg-secondary font-bold px-4 py-2 rounded shadow"
                >
                  CHECK
                </Link>
              </div>
            </div>
            <div className="bg-linear-to-br   rounded-3xl shadow-xl p-6 mb-4">
              <div className="flex items-start gap-4">
                <div className="rounded-full w-16 h-16 flex items-center justify-center shadow-lg shrink-0">
                  <span className="text-3xl font-black ">3</span>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-bold  mb-3">
                    FORMAT CUTI DI BUAT RANGKAP 2 (DUA)
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg font-bold ">
                      GURU : 1 (SATU) UNTUK YBS DAN 1 (SATU) UNTUK SEKOLAH
                    </p>
                    <p className="text-lg font-bold ">
                      KS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 1 (SATU) UNTUK
                      YBS DAN 1 (SATU) UNTUK BIDANG PTK
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-emerland-900 rounded-3xl shadow-xl p-6 flex items-center gap-4">
              <div className=" rounded-full w-16 h-16 flex items-center justify-center shadow-lg shrink-0">
                <span className="text-3xl font-black ">4</span>
              </div>
              <div className="flex-1">
                <p className="text-xl font-bold ">
                  ADMIN PRESENSI SEKOLAH MENGINPUT CUTI DI APLIKASI E PRESENSI
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/swasta/"
            className=" hover:bg-secondary  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}
