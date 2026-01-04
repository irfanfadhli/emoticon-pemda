import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, ChevronRight,  } from "lucide-react";

export const Route = createFileRoute("/swasta/")({
  component: IndexComponent,
});

const menuItems = [
  { id: "cuti melahirkan", nama: "Cuti Melahirkan", path: "/swasta/cuti-melahirkan" },
  { id: "Cuti Sakit", nama: "Cuti Sakit", path: "/swasta/cuti-sakit" },
  {
    id: "Cuti Tahunan", nama: "Cuti Tahunan", path: "/swasta/cuti-tahunan",
  },
  { id: "Cuti Alasan Penting", nama: "Cuti Alasan Penting", path: "/swasta/cuti-alasan-penting" },
  { id: "CLTN", nama: "Cltn", path: "/swasta/cltn" },
  { id: "Cuti Besar", nama: "Cuti Besar", path: "/swasta/cutiBesar" },
];

function IndexComponent() {
  return (
    <div className="space-y-6  animation-fade-in dark:bg-slate-900 dark:text-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
      <div className="  dark:bg-slate-900 dark:text-whiterounded shadow-sm overflow-hidden border-2 border-gray-400">
        <div className="  dark:bg-slate-900 dark:text-white px-6 py-8  border-b-4 border-gray-400">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 ">
            Daftar Standar Operasional Dinas Pendidikan Kepemudaan dan Olahraga
            Kabupaten Bantul
          </h1>
          <div className="flex items-center text-sm space-x-2 mt-4 ">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <span>/</span>
            <span>Cuti Pegawai Swasta</span>
          </div>
        </div>
      </div>
      <div className=" rounded shadow-sm border-2 border-gray-400 mt-5">
        <div className="px-6 py-4">
          <p className=" italic mb-6">
            Jenis Cuti Bagi PNS di Sekolah Swasta dan Alur Pengajuannya
          </p>
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path as any}
                className="w-full flex items-center justify-between px-4 py-4 border-2 border-gray-400 rounded hover:bg-primary transition group"
              >
                <span className="font-medium  text-left">
                  {item.nama}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-400 transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
