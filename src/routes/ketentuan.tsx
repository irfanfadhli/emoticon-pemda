import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ketentuan")({
  component: JenisCutiComponent,
});

function JenisCutiComponent() {
  return (
    <div className="space-y-6">
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white rounded shadow-sm p-4">
        <nav className="text-sm text-black dark:text-white">
          <span className="hover:text-black dark:hover:text-white cursor-pointer">
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-black dark:text-white font-medium">
            Ketentuan
          </span>
        </nav>
        <div className="mt-4 text-black dark:text-white space-y-3">
          {["CT, CB, CAP & C Bersama", "CT, CB, CS, CM, CAP", "CLTN"].map(
            (jenis, index) => (
              <p key={index} className="m-5">
                {getdasarHukum(jenis)}
              </p>
            )
          )}
        </div>
      </div>
      <div className="p-6 flex justify-">
        <a
          href="/pns-negeri/"
          className="bg-gray-400 hover:text-white text-black font-semibold px-6 py-2 rounded-md shadow transition"
        >
          Kembali
        </a>
      </div>
    </div>
  );
}

function getdasarHukum(namaJenis: string): string {
  const normalized = namaJenis.toLowerCase().replace(/[\s,.&]+/g, "");

  const keterangan: Record<string, string> = {
    ctcbcapcbersama:
      "• Dapat dipanggil kembali bekerja apabila kepentingan dinas mendesak.\n" +
      "• Jangka waktu cuti yang belum dijalankan tetap menjadi hak PNS yang bersangkutan.",

    ctcbcscmcap:
      "• Diluar negeri → PPK dapat berikan kuasa kepada pejabat lain di lingkungannya.\n" +
      "• Dalam keadaan mendesak, pejabat tertinggi di tempat PNS bekerja dapat memberikan izin sementara secara tertulis yang segera diberitahukan kepada PPK/pejabat yang diberikan kuasa.\n" +
      "• CS, CM, & CAP juga berlaku untuk Calon PNS.",

    cltn:
      "• Wajib melaporkan diri secara tertulis kepada instansi induknya → paling lama 1 bulan.\n" +
      "• Cuti tahunan dapat diberikan setelah bekerja terus-menerus paling singkat 1 tahun sejak diaktifkan kembali.",
  };

  return keterangan[normalized] || "Keterangan tidak tersedia.";
}
