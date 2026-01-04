import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pyb/")({
  component: PejabatCuti,
});

function PejabatCuti() {
  return (
    <div className="  dark:bg-slate-900 dark:text-white flex justify-center">
      <div className="w-full max-w-4xl rounded-lg shadow border border-gray-400">
        <div className=" text-center font-bold text-xl md:text-2xl py-4 rounded-t-lg">
          PEGAWAI YANG BERWENANG
          <br />
          MEMBERIKAN CUTI BAGI GURU PNS
        </div>
        <div className="p-6">
          <h2 className="font-bold  text-2xl mb-4">DASAR :</h2>

          <p className="mt-2  leading-relaxed">
            SURAT KEPUTUSAN BUPATI BANTUL NOMOR 6 TAHUN 2018 TENTANG
            PENDELEGASIAN WEWENANG PEMBERIAN CUTI BAGI PEGAWAI NEGERI SIPIL DI
            LINGKUNGAN PEMERINTAH KABUPATEN BANTUL.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-3  leading-relaxed">
            <li>
              Guru yang mengajukan cuti diatas 14 hari, pejabat yang berwenang
              memberikan, menangguhkan dan menolak permohonan cuti adalah Kepala
              Dikpora Bantul;
            </li>
            <li>
              Guru yang mengajukan cuti untuk keperluan keluar negeri, pejabat
              yang berwenang memberikan, menangguhkan dan menolak permohonan
              cuti adalah kepala sekolah;
            </li>
            <li>
              Kepala sekolah yang mengajukan cuti baik diatas dan dibawah 14
              hari, kecuali cuti untuk keluar negeri pejabat yang berwenang
              memberikan, menangguhkan dan menolak permohonan cuti adalah kepala
              dikpora bantul;
            </li>
            <li>
              Bupati Bantul berwenang memberikan, mengangugkan dan menolah
              permohonan cuti yang diajukan oleh guru dan kepala sekolah untuk
              keperluan ke luar negeri.
            </li>
          </ul>
        </div>
        <div className="p-6 flex justify-center">
          <a
            href="/pns-negeri/"
            className="hover:bg-secondary  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}
