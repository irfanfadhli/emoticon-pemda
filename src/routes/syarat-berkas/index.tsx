import { createFileRoute} from "@tanstack/react-router";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/syarat-berkas/")({
  component: SyaratBerkasComponent,
});

interface SyaratItem {
  kategori: string;
  items: string[];
}

function SyaratBerkasComponent() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const syaratCuti: SyaratItem[] = [
    {
      kategori: "a). Cuti yang dipergunakan untuk ibadah Haji",
      items: [
        "Surat Keterangan pergi haji dari Kemenag, tanda bukti pelunasan BPIH (Biaya Penyelenggaraan Ibadah Haji) dan Jadwal Keberangkatan/Kelompok Peneberangaan yang dikeluarkan oleh instansi yang bertanggung jawab dalam penyelenggaraan haji.",
      ],
    },
    {
      kategori: "b). Cuti untuk kepentingan Agama (umroh, Ziarah keagamaan)",
      items: [
        "Surat keterangan dan jadwal keberangkatan dari Agen/Biro perjalanan.",
      ],
    },
    {
      kategori: "c). Cuti Sakit",
      items: [
        "Surat keterangan dokter, Surat keterangan dokter Tim Penguji Kesehatan yang ditetapkan oleh menteri di Bidang Kesehatan jika cuti sakit telah diberikan selama 1 (satu) tahun.",
      ],
    },
    {
      kategori: "d). Cuti melahirkan",
      items: [
        "Surat keterangan dokter yang menerangkan hari perkiraan kelahiran (HPL).",
      ],
    },
    {
      kategori: "e). Cuti alasan penting",
      items: [
        "- Surat keterangan rawat inap dari Unit Pelayanan Kesehatan jika salah seorang anggota keluarga (ibu/bapak/istri/suami/anak/adik/kakak/mertua/menantu) sakit keras atau istri melahirkan/operasi caesar.",
        "- Surat Keterangan yang paling rendah dikeluarkan oleh Ketua RT apabila Cuti Alasan Penting diberikan kepada PNS yang mengalami musibah kebakaran atau bencana alam.",
      ],
    },
    {
      kategori: "F). Cuti di Luar Tanggungan Negara",
      items: [
        "- Jika mendampingi suami/istri untuk bekerja/tugas negara/tugas belajar melampirkan surat penugasan/pengangkatan/pengangkatan dalam jabatan/tugas belajar dari pejabat yang berwenang.",
        "- Untuk alasan program mendapatkan keturunan/ mendampingi keluarga yang memerlukan perawatan khusus/sakit/uzur melampirkan surat keterangan dokter.",
      ],
    },
  ];

  return (
    <div className="space-y-6">
     <div className="  dark:bg-slate-900 dark:text-white">
        <nav className="text-sm ">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className=" font-medium">
            Syarat dan Kelengkapan Berkas
          </span>
        </nav>
      </div>
      <div className="bg-emerland-900 rounded shadow-sm">
        <div className="px-6 py-4 border-b  border-gray-400">
          <h2 className="text-xl font-semibold ">
            Syarat dan Kelengkapan Berkas
          </h2>
          <p className="text-sm  dark:text-white-600 mt-1">
            Persyaratan dan kelengkapan berkas untuk pengajuan cuti PNS/ASN
          </p>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className=" border-l-4 border-gray-400 p-4 mb-4">
              <h3 className="font-bold  mb-2 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Prosedur Pengajuan Cuti
              </h3>
              <div className="text-sm  dark:text-white-600 space-y-2">
                <p>
                  <strong>1).</strong> PNS mengajukan permohonan cuti dengan
                  mengisi Formulir Permintaan dan Pemberian Cuti sesuai dengan
                  jenis cuti yang akan diambil dan dimintakan pertimbangan
                  atasan langsung (minimal rangkap 2, untuk yang bersangkutan
                  dan arsip kepegawaian instansi). Jika pegawai yang memberikan
                  cuti adalah kewenangan Gubernur/Wakil Gubernur/Sekretaris
                  Daerah maka jumlah menyesuaikan kebutuhan.
                </p>
                <p>
                  <strong>2).</strong> Apabila disetujui oleh atasan langsung,
                  dilanjutkan pengajuan kepada pegawai yang berwenang memberikan
                  cuti melalui Sub Bidang/Bagian Tata Usaha di intansi selaku
                  pengurus kepegawaian.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold  text-lg mb-4">
              Syarat dan Kelengkapan Berkas Berdasarkan Jenis Cuti:
            </h3>

            {syaratCuti.map((syarat, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(syarat.kategori)}
                  className="w-full px-4 py-3  hover:bg-primary transition flex items-center justify-between text-left"
                >
                  <span className="font-semibold ">
                    {syarat.kategori}
                  </span>
                  {expandedSection === syarat.kategori ? (
                    <ChevronUp className="w-5 h-5 " />
                  ) : (
                    <ChevronDown className="w-5 h-5 " />
                  )}
                </button>

                {expandedSection === syarat.kategori && (
                  <div className="px-4 py-4  border-t border-gray-400">
                    <div className="space-y-3">
                      {syarat.items.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className=" mr-2 shrink-0">•</span>
                          <p className=" text-sm leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4  border border-gray-400 rounded">
              <h4 className="font-semibold  mb-2">⚠️ Perhatian</h4>
              <p className="text-sm ">
                Pastikan semua dokumen pendukung sudah lengkap dan sesuai dengan
                jenis cuti yang diajukan untuk mempercepat proses verifikasi.
              </p>
            </div>

            <div className="p-4  border border-gray-400 rounded">
              <h4 className="font-semibold  mb-2">✓ Informasi</h4>
              <p className="text-sm ">
                Dokumen yang diajukan harus asli atau fotokopi yang telah
                dilegalisir oleh pejabat yang berwenang.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex justify-">
        <a
          href="/pns-negeri/"
          className="mt-3 inline-block bg-gray-400  font-semibold px-3 py-2 rounded-md shadow hover:bg-gray-900 hover:text-white transition border-2 border-white"
          
          >
          Kembali
        </a>
      </div>
    </div>
  );
}
