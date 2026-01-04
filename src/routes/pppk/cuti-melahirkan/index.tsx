import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pppk/cuti-melahirkan/")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <div className="flex justify-center items-start  min-h-screen">
      <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  ">
        <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 ">
          CUTI MELAHIRKAN
        </h1>
        <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
          BAGI PPPK
        </h2>
        <div className="">
          <ul className="list-disc space-y-1 pl-6 font-semibold ">
            <li>
              Ditujukan Bagi PPPk Yang Memiliki Anak Pertama S.D Ketiga Pada
              Saat Menjadi PNS
            </li>
            <li>
              Untuk kelahiran anak keempat dAN SETERUSNYA, kepada PNS diberikan
              Cuti Besar
            </li>
            <li>permintaan cuti tERSEBUT tidak dapat ditangguhkan</li>
            <li>
              mengesampingkan ketentuan telah bekerja palingsingkat 5 tahun
              secara terus-menerus;
            </li>
            <li>
              lamanya sama dengan lamanya cuti melahirkan YAITU 3 (TIGA) bulan,
              APABILA kurang dari 3 bulan (dALAM hal tertentu, atas permintaan)
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-">
          <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  mt-10 ">
            <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 ">
              ALUR CUTI MELAHIRKAN
            </h1>
            <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
              BAGI PPPK
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  1
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Form Cuti Diisi Melalui Aplikasi E-Cuti (admin sekolah)
                </div>
              </div>
              <div className=" flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  2
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Berkas Cuti Dikirimkan Ke Bidang PTK Dikpora Rangkap 2 Untuk
                  Diajukan Pengesahan Kepala Dinas, Dengan Melampirkan :
                  <ul className="list-disc space-y-2 pl-6 font-semibold ">
                    <li>Surat Pengantar Dari Sekolah.</li>
                    <li>Surat Keterangan Dari Dokter.</li>
                    <li>Surat Pelimpahan atau Pengalihan Tugas.</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  3
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Bagi Yang Mengajukan Ttd Ke Dinas, Bisa Mengetahui Proses
                  Penandatanganan Cuti Melalui tombol Check.
                  <h1>
                    <Link
                      to="/ttd-cuti-swasta"
                      className="ml-4  hover:bg-secondary  font-bold px-4 py-2 rounded shadow"
                    >
                      CHECK
                    </Link>
                  </h1>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                  4
                </div>
                <div className="font-semibold text-lg leading-relaxed ">
                  Admin Presensi Sekolah Bisa Menginput Cuti Di aplikasi
                  E-Presensi.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/pppk/jenis"
            className=" hover:bg-secondary  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}

export default CutiMelahirkan;
