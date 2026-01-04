import { createFileRoute } from "@tanstack/react-router";
import { AlertCircle, Calendar, Users, BookOpen, MapPin } from "lucide-react";

export const Route = createFileRoute("/pppk/cuti-tahunan/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen bg-linear-to-r  p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="bg-linear-to-r   rounded-2xl shadow-2xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64  opacity-10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48  opacity-10 rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-linear-to-r   p-4 rounded-xl">
                  <Calendar className="w-12 h-12 " />
                </div>
                <div>
                  <h1 className="text-4xl font-bold  mb-2">
                    CUTI TAHUNAN
                  </h1>
                  <p className="text-2xl font-bold  ">BAGI PPPK</p>
                </div>
              </div>
              <div className="hidden md:block">
                <Users className="w-32 h-32  opacity-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r   rounded-xl shadow-lg p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6  mt-1" />
            <p className=" font-semibold text-lg leading-relaxed">
              BAHWA PPPK GURU TIDAK BISA MENGAMBIL CUTI TAHUNAN DI LUAR LIBUR
              KALDIK
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <AlertCircle className="w-6 h-6  mt-1" />
            <p className=" font-semibold text-lg leading-relaxed">
              BAHWA TERKAIT CUTI TAHUNAN UNTUK PPPK DI LINGKUNGAN PEMERINTAH
              KABUPATEN BANTUL
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <p className=" text-lg leading-relaxed mt-2 ml-15">
              BERDASARKAN PERATURAN BADAN KEPEGAWAIAN NEGARA REPUBLIK INDONESIA
              NOMOR 7 TAHUN 2022 TENTANG TATA CARA PEMBERIAN CUTI PEGAWAI
              PEMERINTAH DENGAN PERJANJIAN KERJA PADA :
            </p>
          </div>
        </div>
        <div className="bg-linear-to-r    rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-2 bg-linear-to-r   "></div>

          <div className="p-8">
            <div className=" bg-opacity-10 backdrop-blur-sm rounded-xl p-6 mb-6 border  border-opacity-20">
              <div className="ml-6 space-y-4">
                <div className=" bg-opacity-20 rounded-lg p-4 border-l-4 ">
                  <p className=" font-bold mb-2">
                    ○ PASAL 5 AYAT (1) BERBUNYI BAHWA :
                  </p>
                  <div className="ml-4">
                    <p className=" leading-relaxed">
                      (1) PPPK YANG TELAH BEKERJA PALING SEDIKIT 1 (SATU) TAHUN
                      SECARA TERUS MENERUS BERHAK ATAS CUTI TAHUNAN
                    </p>
                  </div>
                </div>

                <div className=" bg-opacity-20 rounded-lg p-4 border-l-4 ">
                  <p className=" font-bold mb-3">
                    ○ PASAL 10 AYAT (1) DAN AYAT (2) BERBUNYI BAHWA :
                  </p>
                  <div className="ml-4 space-y-3">
                    <div className=" bg-opacity-10 rounded-lg p-4">
                      <p className=" leading-relaxed mb-2">
                        (1) PPPK YANG MENDUDUKI JABATAN GURU PADA SEKOLAH DAN
                        JABATAN DOSEN PADA PERGURUAN TINGGI YANG MENDAPAT
                        LIBURAN MENURUT KETENTUAN PERATURAN PERUNDANG-UNDANGAN,
                        DISAMAKAN DENGAN PPPK YANG TELAH MENGGUNAKAN CUTI
                        TAHUNAN".DAN
                      </p>
                    </div>
                    <div className=" bg-opacity-10 rounded-lg p-4">
                      <p className=" leading-relaxed">
                        (2) LIBURAN SEBAGAIMANA DIMAKSUD PADA AYAT (1) MERUPAKAN
                        LIBURAN PADA SAAT AKHIR SEMESTER DI MASING-MASING
                        SEKOLAH DAN PERGURUAN TINGGI SESUAI DENGAN KALENDER
                        AKADEMIK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-r  rounded-xl p-6 shadow-lg">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-6 h-6   mt-1" />
                <p className=" font-bold text-lg leading-relaxed">
                  UNTUK PPPK YANG MENGALAMI KEDUKAAN DI KELUARGA INTINYA ATAU
                  MELANGSUNGKAN PERNIKAHAN BISA MENGGUNAKAN CUTI TAHUNAN
                  MAKSIMAL 6 HARI KERJA
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-linear-to-r    rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-2 bg-linear-to-r  "></div>

          <div className="p-8">
            <div className=" bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border  border-opacity-20">
              <div className="mb-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className=" w-8 h-8  rounded-full flex items-center justify-center">
                    <span className=" font-bold">1</span>
                  </div>
                  <p className=" text-lg leading-relaxed font-semibold">
                    JIKA PPPK GURU MENJALANKAN IBADAH UMROH DAN DIAMBIL DI SAAT
                    DI LUAR LIBUR KALDIK SEKOLAH, BUKAN CUTI TAHUNAN MELAINKAN
                    IZIN IBADAH KHUSUS UNTUK MENJALANKAN IBADAH UMROH
                  </p>
                </div>
              </div>

              <div>
                <div className="flex items-start space-x-3 mb-4">
                  <div className=" w-8 h-8  rounded-full flex items-center justify-center">
                    <span className=" font-bold">2</span>
                  </div>
                  <p className=" text-lg leading-relaxed font-semibold mb-4">
                    IZIN IBADAH KHUSUS KEAGAMAAN YANG DILAKSANAKAN KE LUAR
                    NEGERI DIBERIKAN OLEH PPK DENGAN KETENTUAN :
                  </p>
                </div>

                <div className="ml-12">
                  <div className=" bg-opacity-20 rounded-lg p-6 border-l-4 ">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-6 h-6   mt-1" />
                      <div>
                        <p className=" text-lg leading-relaxed font-medium">
                          IZIN IBADAH KHUSUS KEAGAMAAN YANG DILAKSANAKAN DI LUAR
                          NEGERI SEBAGAIMANA DIMAKSUD PADA AYAT (1) DIAJUKAN
                          OLEH PPK SECARA BERJENJANG KEPADA PPK MELALUI
                          PERANGKAT DAERAH YANG MEMBIDANGI KEPEGAWAIAN DENGAN
                          MELAMPIRKAN SURAT KETERANGAN DARI INSTANSI YANG
                          MENANGANI IBADAH KEAGAMAAN
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-opacity-10 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
          <div className="h-2 bg-linear-to-r  "></div>

          <div className="p-8">
            <div className="bg-linear-to-r   rounded-xl p-6 mb-6 shadow-lg">
              <p className=" text-xl font-bold leading-relaxed text-center">
                CUTI TAHUNAN DIBERIKAN KEPADA PPPK, APABILA PPPK YANG TELAH
                BEKERJA PALING SEDIKIT 1 (SATU) TAHUN SECARA TERUS MENERUS
                BERHAK ATAS CUTI TAHUNAN.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className=" w-16 h-16 bg-linear-to-r   rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold ">1</span>
                </div>
                <div className="flex-1 bg-linear-to-r   rounded-xl p-5 shadow border-l-4 ">
                  <p className=" text-lg font-semibold leading-relaxed">
                    ADMIN E CUTI SEKOLAH MEMBUATKAN FORM CUTI MELALUI APLIKASI E
                    CUTI (HARUS ATAS PERSETUJUAN KEPALA SEKOLAH)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className=" w-16 h-16 bg-linear-to-r   rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold ">2</span>
                </div>
                <div className="flex-1 bg-linear-to-r   rounded-xl p-5 shadow border-l-4 ">
                  <p className=" text-lg font-semibold leading-relaxed">
                    FORM CUTI DI SETUJUI DAN SAHKAN
                    <br />
                    CUTI GURU : HARUS TTD KS DAN CAP SEKOLAH
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className=" w-16 h-16 bg-linear-to-r   rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold ">3</span>
                </div>
                <div className="flex-1 bg-linear-to-r   rounded-xl p-5 shadow border-l-4 ">
                  <p className=" text-lg font-semibold leading-relaxed">
                    FORMAT CUTI DI BUAT RANGKAP 2 (DUA)
                    <br />
                    GURU : 1 (SATU) UNTUK YBS DAN 1 (SATU) UNTUK SEKOLAH
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-linear-to-r   rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-3xl font-bold ">4</span>
                </div>
                <div className="flex-1 bg-linear-to-r   rounded-xl p-5 shadow border-l-4 ">
                  <p className=" text-lg font-semibold leading-relaxed">
                    ADMIN PRESENSI SEKOLAH BISA MENGINPUT CUTI DI APLIKASI E
                    PRESENSI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="p-6 flex justify-center">
            <a
              href="/pppk/jenis"
              className="hover:bg-secondary font-semibold px-6 py-2 rounded-md shadow transition"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
