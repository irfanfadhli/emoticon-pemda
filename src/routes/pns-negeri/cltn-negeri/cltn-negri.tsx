import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  AlertCircle,
  FileText,
  Calendar,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/pns-negeri/cltn-negeri/cltn-negri")({
  component: Cltn,
});

function Cltn() {
  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-6xl mx-auto ">
        {/* Header */}
        <div className="rounded-2xl shadow-2xl p-8 mb-6 flex items-center justify-between border-4 ">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20  rounded-full flex items-center justify-center border-4  shadow-lg">
              <img
                src={
                  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="45" fill="%23047857"/%3E%3C/svg%3E'
                }
                alt="Logo"
                className="w-12 h-12"
              />
            </div>
            <div>
              <h1 className="text-4xl font-black italic ">
                CLTN BAGI PNS
              </h1>
              <p className="text-sm  font-semibold">
                Cuti di Luar Tanggungan Negara
              </p>
            </div>
          </div>
          <div className=" p-4 rounded-lg border-2  shadow-md">
            <Briefcase className="w-12 h-12 " />
          </div>
        </div>

        {/* Main Info Card */}
        <div className="rounded-2xl shadow-2xl p-8 mb-6  border-4 ">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className=" p-2 rounded-lg">
              <FileText className="w-6 h-6 " />
            </div>
            Pengertian CLTN
          </h2>
          <ul className="space-y-4">
            {[
              "MENGIKUTI ATAU MENDAMPINGI SUAMI/ ISTERI TUGAS NEGARA/TUGAS BELAJAR DI DALAM/LUARNEGERI;",
              "MENDAMPINGI SUAMI/ISTERI BEKERJA DI DALAM/LUARNEGERI;",
              "MENJALANI PROGRAM UNTUK MENDAPATKAN KETURUNAN;",
              "MENDAMPINGI ANAK YANG BERKEBUTUHAN KHUSUS;",
              "MENDAMPINGI SUAMI/ISTERI/ANAK YANG MEMERLUKAN PERAWATAN KHUSUS; DAN/ATAU",
              "MENDAMPINGI/MERAWAT ORANG TUA/MERTUA YANG SAKIT/UZUR.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3 items-start">
                <div className="w-3 h-3  rounded-full mt-2 lg-shrink-0 shadow-md"></div>
                <span className="font-medium ">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Points */}
        <div className="rounded-2xl shadow-2xl p-8 mb-6  border-4 ">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 ">
            <div className=" p-2 rounded-lg">
              <AlertCircle className="w-6 h-6 " />
            </div>
            Poin Penting CLTN
          </h2>
          <div className="space-y-4">
            <div className=" rounded-lg p-4 border-2  backdrop-blur-sm">
              <p className="font-bold flex items-center gap-2 ">
                <CheckCircle className="w-5 h-5 " />
                CLTN diberikan dengan keputusan PPK setelah mendapat persetujuan
                dari Kepala BKN.
              </p>
            </div>
            <div className=" rounded-lg p-4 border-2  backdrop-blur-sm">
              <p className="font-bold flex items-center gap-2 ">
                <Calendar className="w-5 h-5 " />
                Paling lama 3 tahun, dapat diperpanjang paling lama 1 tahun.
              </p>
            </div>
            <div className=" rounded-lg p-4 border-2  backdrop-blur-sm">
              <p className="font-bold flex items-center gap-2 ">
                <XCircle className="w-5 h-5 " />
                Permintaan/permohonan perpanjangan CLTN dapat
                dikabulkan/ditolak.
              </p>
            </div>
            <div className=" rounded-lg p-4 border-2  backdrop-blur-sm">
              <p className="font-bold flex items-center gap-2 ">
                <XCircle className="w-5 h-5 " />
                PPK tidak dapat mendelegasikan kewenangan pemberian CLTN.
              </p>
            </div>
            <div className=" rounded-lg p-4 border-2  backdrop-blur-sm">
              <p className="font-bold ">
                PNS YBS diberhentikan dari jabatannya & jabatan TSB harus diisi,
                tidak menerima penghasilan PNS & tidak diperhitungkan sebagai
                masa kerja PNS.
              </p>
            </div>
          </div>
        </div>

        {/* Flow Chart */}
        <div className=" rounded-2xl shadow-2xl p-8 mb-6 border-4 ">
          <h2 className="text-2xl font-bold mb-6  flex items-center gap-3">
            <ArrowRight className="w-8 h-8 " />
            Alur Cuti CLTN Bagi PNS
          </h2>
          <div className="space-y-4">
            <div className="bg-linear-to-r   rounded-xl p-6  shadow-lg border-2 ">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-linear-to-br    rounded-full flex items-center justify-center font-black text-xl border-3  shadow-md">
                  1
                </div>
                <h3 className="text-xl font-bold">Pengajuan</h3>
              </div>
              <p className="font-semibold ml-15">
                PNS ajukan permintaan/permohonan secara tertulis kepada PPK
              </p>
            </div>

            <div className="bg-linear-to-r   rounded-xl p-6  shadow-lg border-2 ">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-linear-to-br    rounded-full flex items-center justify-center font-black text-xl border-3  shadow-md">
                  2
                </div>
                <h3 className="text-xl font-bold">Persetujuan</h3>
              </div>
              <p className="font-semibold ml-15">
                PPK atau pejabat lain yang ditunjuk mengajukan permintaan
                persetujuan kepada Kepala BKN/Kakanreg BKN untuk perpanjangan
                CLTN keputusan dapat dikabulkan atau ditolak berdasarkan
                pertimbangan PPK
              </p>
            </div>

            <div className="bg-linear-to-r   rounded-xl p-6  shadow-lg border-2 ">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-linear-to-br   rounded-full flex items-center justify-center font-black text-xl border-3  shadow-md">
                  3
                </div>
                <h3 className="text-xl font-bold">Kepala BKN/Kakanreg BKN</h3>
              </div>
              <div className="ml-15 space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 " />
                  <span className="font-semibold">
                    Disetujui → Menandatangani Persetujuan
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 " />
                  <span className="font-semibold">
                    Ditolak → Usul Persetujuan Dikembalikan dengan Alasan
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-2xl shadow-2xl p-8 border-4 ">
          <h2 className="text-2xl font-bold mb-6  flex items-center gap-3">
            <FileText className="w-8 h-8 " />
            Kewajiban Lapor untuk Cuti CLTN Bagi PNS
          </h2>
          <div className=" rounded-xl p-6 mb-4 border-l-4  shadow-md">
            <p className="text-lg font-bold  flex items-center gap-2">
              <Calendar className="w-6 h-6 " />
              Selesai CLTN maka YBS wajib lapor paling lambat 1 bulan
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-linear-to-r   rounded-lg p-6 border-2 ">
              <h3 className="font-bold  mb-3">
                1. PPK wajib mengusulkan persetujuan pengaktifan kembali ke
                Kepala BKN/Kakanreg BKN
              </h3>
              <h3 className="font-bold ">
                2. PPK menetapkan keputusan pengaktifan kembali PNS
              </h3>
            </div>

            <div className="bg-linear-to-r   rounded-lg p-6 border-l-4  shadow-md">
              <h3 className="font-bold  mb-3 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 " />
                PNS yang lapor tetapi tidak dapat dalam jabatan pada instansi
                induknya:
              </h3>
              <div className="ml-8 space-y-2">
                <p className="flex items-center gap-2 ">
                  <ArrowRight className="w-5 h-5 " />
                  Disalurkan pada instansi lain → Koordinasi PPK & Kepala BKN
                </p>
                <p className="flex items-center gap-2 ">
                  <ArrowRight className="w-5 h-5 " />
                  Mengajukan permintaan pengajuan penyaluran pegawai
                </p>
                <p className="flex items-center gap-2 ">
                  <ArrowRight className="w-5 h-5 " />
                  Kepala BKN menyampaikan jabatan yang lowong
                </p>
              </div>
            </div>

            <div className="bg-linear-to-br 0  rounded-xl p-6  border-4  shadow-2xl">
              <div className="flex items-center gap-4">
                <div className=" rounded-lg p-4 shadow-lg">
                  <Calendar className="w-12 h-12 " />
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1 ">
                    PENTING!
                  </p>
                  <p className="text-xl font-black">
                    MAKSIMAL INPUT DI E CUTI PALING LAMBAT TANGGAL 5 DI BULAN
                    BERIKUTNYA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 flex justify-">
          <a
            href="/pns-negeri/jenis-cuti"
            className=" hover:  font-semibold px-6 py-2 rounded-md shadow transition"
          >
            Kembali
          </a>
        </div>
      </div>
    </div>
  );
}
