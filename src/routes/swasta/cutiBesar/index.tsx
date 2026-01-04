import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/swasta/cutiBesar/")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <div className="flex justify-center items-start">
      <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  mt-10 mb-10">
        <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2">
          CUTI BESAR
        </h1>
        <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8">
          BAGI PNS DI SEKOLAH SWASTA
        </h2>
        <div className="tracking-wide mt-10 mb-6 p-6">
          <ul className="list-disc space-y-4 pl-6 font-semibold">
            <li>Telah Bekerja Paling Singkat 5 Tahun Secara Terus Menerus.</li>
            <li>Diberikan Paling Lama 3 (TIGA) Bulan.</li>
            <li>Tidak Berhak Atas Cuti Tahunan Pada Tahun YBS.</li>
            <li>Dapat DiTangguhkan.</li>
            <li>Kurang Dari 3 Bulan, Sisa Cuti Besar Dihapus.</li>
            <li>
              Apabila Sudah Mengambil Cuti Besar Maka Tidak Bisa Mengambil Cuti
              Tahunan Di Tahun Tersebut.
            </li>
          </ul>
        </div>

        <div className="tracking-wide mt-10 mb-6 p-6">
          <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2">
            CUTI BESAR
          </h1>
          <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8">
            BAGI PNS
          </h2>
          <ul className="list-disc space-y-4 pl-6 font-semibold">
            <li>
              Cuti Besar Bagi Guru Bisa Diambil Untuk Keperluan Ibadah Haji,
              Pada Saat Mengajukan Cuti Harus Melampirkan Surat Pelimpahan Tugas
              Yang Diketahui Oleh Kepala Sekolah(Format Surat Pelimpahan Tugas
              Bebas).
            </li>
            <li>
              Cuti Besar Bagi Kepala Sekolah Bisa Diambil Untuk Keperluan Ibadah
              Haji, Pelajsaba Harian (PLH) Kepala Sekolah Yang Diketahui Oleh
              Pengawas Pembina Sekolah (Format Surat PLH Bebas), Nantinya Surat
              Tersebut Sebagai Dasar Untuk Dibuatkan SK Pelaksana Haruan (PLH)
              Kepala Dinas DIKPORA Bantul.
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-">
          <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  mt-10">
            <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2">
              ALUR CUTI BESAR
            </h1>
            <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8">
              BAGI PNS DI SEKOLAH SWASTA
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className=" text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-black">
                  1
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Yang Bersangkutan Bisa Download Form Cuti dan Mengisi Form,
                  Silahkan Klik Form Pada Tombol Disamping
                  <a
                    href="https://drive.google.com/drive/folders/1KjCv5WIpeYHDRh-aUs10tH_2VwugK51a?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4  hover:bg-primary text-black font-bold px-4 py-2 rounded shadow"
                  >
                    FORM
                  </a>
                </div>
              </div>
              <div className=" flex items-start gap-4">
                <div className=" text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-black">
                  2
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Berkas Cuti Dikirimkan Ke Bidang PTK Dikpora Rangkap 2 Untuk
                  Diajukan Pengesahan Kepala Dinas, Dengan Melampirkan:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Surat Kenaikan Pangkat Terakhir.</li>
                    <li>
                      Surat Pengantar Dari Sekolah (yang mengajukan Cuti Adalah
                      Guru).
                    </li>
                    <li>
                      Surat Keterangan Dari Kemenag (Haji) / Surat Keterangan
                      umroh dari agen travel umroh.
                    </li>
                    <li>
                      SUrat Pelimpahan Tugas (Yang Mengajukan Cuti Adalah Kepala
                      Sekolah).
                    </li>
                    <li>Berkas Tidak Dijilid Dan Tidak Dibuat Dua Rangkap.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className=" text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-black">
                  3
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Surat Cuti Yang Sudah Jadi Bisa Dicek Melalui Tombol CHECK Dan
                  Diambil Di Bidang PTK
                  <Link
                    to="/ttd-cuti-swasta"
                    className="ml-4  hover:bg-primary text-black font-bold px-4 py-2 rounded shadow"
                  >
                    CHECK
                  </Link>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className=" text-black font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 border-black">
                  4
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Admin Presensi Dinas Bisa Menginput Cuti Di Aplikasi
                  E-Presensi
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/swasta/"
            className=" hover:bg-primary  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}

export default CutiMelahirkan;
