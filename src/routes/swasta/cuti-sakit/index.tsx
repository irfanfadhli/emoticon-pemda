import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/swasta/cuti-sakit/")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <div className="flex justify-center items-start   dark:bg-slate-900 dark:text-white min-h-screen">
      <div className="w-full max-w-6xl   dark:bg-slate-900 dark:text-white shadow-2xl rounded-2xl p-8 border-4">
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
                belum sembuh dari penyakitnya → diberhentikan dengan hormat dari
                jabatannya
              </li>
              <li>
                dapat ditambah untuk paling lama 6 bulan → Tim Penguji
                Kesehatan.
              </li>
              <li>
                tidak sembuh dalam jangka waktu tersebut → di ujikembali
                kesehatannya
              </li>
              <li>gugur kandungan → paling lama 1 ½ bulan</li>
              <li>
                mengalami kecelakaan dalam dan oleh karena menjalankan tugas
                kewajibannya → sembuh
              </li>
            </ul>
          </ul>
        </div>
        <div className="p-6 flex justify-">
          <div className="w-full max-w-6xl  dark:bg-slate-900 dark:text-white shadow-2xl rounded-2xl p-8 border-4  mt-10 ">
            <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 ">
              ALUR CUTI SAKIT
            </h1>
            <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
              KURANG DARI 14 HARI BAGI PNS
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-gray-500">
                  1
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Yang Bersangkutan Bisa Download Form Cuti dan Mengisi Form,
                  Silahkan Klik Form Pada Tombol Dibawah ini.
                  <div>
                    <a
                      href="https://drive.google.com/drive/folders/1KjCv5WIpeYHDRh-aUs10tH_2VwugK51a?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4  hover:bg-primary  font-bold px-4 py-2 rounded shadow"
                    >
                      FORM
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-gray-500">
                  2
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Form Cuti Di ajukan Ke bidang PTK Di Setujui, Di Sahkan, Cuti
                  Guru hanya diajukan ke Kepala Sekolah Tanda Tangan Yang
                  Bersangkutan Tidak Di cap Tanda Tangan Atasan Langsung(KABID
                  Dan KADIN). Form Tersebut Dicetak dan diajukan ke Bidang PTK.
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>
                        Bagi Yang Mengajukan Ttd Ke Bidang PTK. Bisa DI cek Hasil
                        penandatanganan cuti melalui tombol check di bawah ini:
                        <div>
                          <Link
                            to="/ttd-cuti-swasta"
                            className="ml-4  hover:bg-gray-500  font-bold px-4 py-2 rounded shadow"
                          >
                            CHECK
                          </Link>
                        </div>
                      </li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-gray-500">
                  3
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Format Cuti Di buat Rangkap 2, Guru dan Ks : 1(satu) untuk
                  Yang bersangkutan 1(satu) dan untuk Bidang PTK
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-gray-500">
                  4
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Admin Presensi Bidang PTK bisa Menginputkan Cuti Di Aplikasi E Presensi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/swasta/"
            className="bg-gray-500 hover:  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}

export default CutiMelahirkan;
