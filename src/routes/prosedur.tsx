import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { FileText, CheckSquare, UserCheck, Calendar } from "lucide-react";

export const Route = createFileRoute("/prosedur")({
  component: ProsedurComponent,
});

const prosedurSteps = [
  {
    number: 1,
    title: "Pengajuan",
    description:
      "Pegawai mengajukan permohonan cuti melalui sistem atau secara manual dengan mengisi formulir yang telah disediakan.",
    icon: FileText,
    details: [
      "Isi formulir pengajuan cuti",
      "Lengkapi dokumen pendukung",
      "Submit permohonan ke sistem",
    ],
  },
  {
    number: 2,
    title: "Verifikasi",
    description:
      "Atasan langsung memverifikasi permohonan cuti yang diajukan oleh pegawai.",
    icon: CheckSquare,
    details: [
      "Atasan memeriksa kelengkapan dokumen",
      "Verifikasi kesesuaian jadwal",
      "Memberikan catatan jika diperlukan",
    ],
  },
  {
    number: 3,
    title: "Persetujuan",
    description:
      "Pegawai yang berwenang memberikan persetujuan atau penolakan terhadap permohonan cuti.",
    icon: UserCheck,
    details: [
      "Pegawai meninjau permohonan",
      "Memberikan keputusan (setuju/tolak)",
      "Menandatangani surat persetujuan",
    ],
  },
  {
    number: 4,
    title: "Pelaksanaan",
    description:
      "Pegawai melaksanakan cuti sesuai dengan periode yang telah disetujui.",
    icon: Calendar,
    details: [
      "Menerima surat persetujuan cuti",
      "Melaksanakan cuti sesuai jadwal",
      "Kembali bekerja sesuai tanggal yang ditentukan",
    ],
  },
];

function ProsedurComponent() {
  return (
    <div className="  dark:bg-slate-900 ">
      <div className="rounded shadow-sm p-4 border-b-2 border-gray-400">
        <nav className="text-sm ">
          <span className="hover:bg-secondary cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className=" font-medium">Prosedur</span>
        </nav>
      </div>

      <video
        src="/videos/asn-tutorial.mp4"
        controls
        className="w-full rounded lg shadow-md mt-6"
      ></video>

      <div className="my-8 text-center">
        <Button
          asChild
          size="lg"
          className="mt-6 bg-gray-400 hover:bg-gray-500  font-semibold"
        >
          <a
            href="https://asn.bantulkab.go.id/administrator"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login ke Sistem ASN Bantul
          </a>
        </Button>
      </div>

      {/* Content */}
      <div className="rounded shadow-sm">
        <div className="px-6 py-4 border-b border-gray-400 ">
          <h2 className="text-xl font-semibold ">
            Prosedur Pengajuan Cuti
          </h2>
          <p className="text-sm  mt-1">
            Tahapan pengajuan cuti PNS/ASN dari awal hingga pelaksanaan
          </p>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            {prosedurSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative">
                  {index < prosedurSteps.length - 1 && (
                    <div className="absolute left-6 top-16 w-0.5 h-full bg-gray-400 -z-10" />
                  )}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-gray-400  rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg p-5 hover:shadow-md transition border-t-4 border-gray-400">
                      <div className="flex items-center mb-3">
                        <Icon className="w-6 h-6 text-gray-400 mr-2" />
                        <h3 className="font-bold  text-lg">
                          {step.title}
                        </h3>
                      </div>

                      <p className=" mb-4">{step.description}</p>

                      <div className="border-l-4 border-gray-400 pl-4">
                        <p className="text-sm font-semibold   mb-2">
                          Detail Proses:
                        </p>
                        <ul className="space-y-1">
                          {step.details.map((detail, idx) => (
                            <li
                              key={idx}
                              className="text-sm   flex items-start"
                            >
                              <span className="text-gray-400 dark:text-gray-400 mr-2">
                                •
                              </span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border-t-4 border-gray-400 rounded">
              <h4 className="font-semibold  mb-2">Waktu Proses</h4>
              <p className="text-sm ">
                Proses persetujuan cuti biasanya memakan waktu 3-5 hari kerja
                sejak pengajuan dilakukan.
              </p>
            </div>

            <div className="p-4 border-t-4 border-gray-400 rounded">
              <h4 className="font-semibold  mb-2">Perhatian</h4>
              <p className="text-sm ">
                Ajukan cuti minimal 7 hari sebelum tanggal pelaksanaan untuk
                memastikan proses verifikasi berjalan lancar.
              </p>
            </div>
          </div>
          <div className="p-6 flex justify-">
            <a
              href="/pns-negeri/"
              className="hover:bg-secondary  font-semibold px-3 py-3 rounded-md shadow transition"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
