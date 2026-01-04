import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/swasta/cuti-melahirkan/")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <div className="flex justify-center items-start">
      <div className="w-full max-w-6xl   dark:bg-slate-900 dark:text-white shadow-2xl rounded-2xl p-8 border-4  mt-10 mb-10">
        <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2">
          CUTI MELAHIRKAN
        </h1>
        <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8">
          BAGI PNS DI SEKOLAH SWASTA
        </h2>
        <div className="">
          <ul className="list-disc space-y-4 pl-6 font-semibold">
            <li>
              Ditujukan Bagi PNS Yang Memiliki Anak Pertama S.D Ketiga Pada Saat
              Menjadi PNS.
            </li>
            <li>
              Untuk Kelahiran Anak Keempat Dan Seterusnya, Kepada PNS Diberikan
              Cuti Besar.
            </li>
            <li>Permintaan Cuti Tahunan Tidak Dapat Ditangguhkan.</li>
            <li>
              Mengesampingkan Ketentuan Telah Bekerja Paling Singkat 5 Tahun
              Secara Terus-Menerus.
            </li>
            <li>
              Lamanya Sama Dengan Lamanya Cuti Melahirkan Yaitu 3 (Tiga) Bulan,
              Apabila Kurang Dari 3 Bulan (Dalam Hal Tertentu, Atas Permintaan).
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-">
          <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  mt-10">
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
                  Yang Bersangkutan Bisa Download Form Cuti dan Mengisi Form,
                  Silahkan Klik Form Pada Tombol Disamping.
                  <div>
                    <a
                      href="https://drive.google.com/drive/folders/1KjCv5WIpeYHDRh-aUs10tH_2VwugK51a?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4  hover:bg-gray-500  font-bold px-4 py-2 rounded shadow"
                    >
                      FORM
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  2
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Berkas Cuti Dikirimkan Ke Bidang PTK Dikpora Bantul Rangkap 2
                  Untuk Diverifikasi Dan Diajukan Pengesahan Kepala Dinas,
                  Dengan Melampirkan:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Surat Pengantar Dari Sekolah</li>
                    <li>Surat Keterangan Dokter</li>
                    <li>Surat Pelimpahan Tugas</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  3
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Surat Cuti Yang Sudah Jadi Bisa Dicheck Melalui Tombol Check
                  Dan Diambil Di Bidang PTK.
                  <div>
                    <Link
                      to="/ttd-cuti-swasta"
                      className="ml-4  hover:bg-primary  font-bold px-4 py-2 rounded shadow"
                    >
                      CHECK
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  4
                </div>
                <div className="font-semibold text-lg leading-relaxed">
                  Admin Presensi Dinas Bisa Menginput Cuti Di Aplikasi
                  E-presensi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/swasta/"
            className=" hover:  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}

export default CutiMelahirkan;
