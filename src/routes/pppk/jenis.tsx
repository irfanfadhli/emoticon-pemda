import { createFileRoute, Link } from "@tanstack/react-router";
import { Home, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/pppk/jenis")({
  component: IndexComponent,
});

const menuItems = [
  {
    id: "cuti melahirkan",
    nama: "Cuti Melahirkan",
    path: "/pppk/cuti-melahirkan/",
  },
  { id: "Cuti Sakit", nama: "Cuti Sakit", path: "/pppk/cuti-sakit/" },
  {
    id: "Cuti Tahunan",
    nama: "Cuti Tahunan",
    path: "/pppk/cuti-tahunan/",
  },
];

function IndexComponent() {
  return (
    <div className="space-y-6  min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <div className=" dark: rounded shadow-sm overflow-hidden border-2 border-primary">
          <div className=" px-6 py-8  border-b-4 border-secondary">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 ">
              Daftar Standar Operasional Dinas Pendidikan Kepemudaan dan
              Olahraga Kabupaten Bantul
            </h1>
            <div className="flex items-center text-sm space-x-2 mt-4 ">
              <Home className="w-4 h-4" />
              <span>Home</span>
              <span>/</span>
              <span>Cuti Pegawai Negeri</span>
            </div>
          </div>
        </div>
        <div className=" rounded shadow-sm border-2  mt-5">
          <div className="px-6 py-4">
            <p className=" italic mb-6">
              JENIS CUTI BAGI PNS DI SEKOLAH NEGERI DAN ALUR PENGAJUANNYA
            </p>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path as any}
                  className="w-full flex items-center justify-between px-4 py-4 border-2  rounded hover:bg-secondary transition group"
                >
                  <span className="font-medium  text-left">
                    {item.nama}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-400  transition" />
                </Link>
              ))}
            </div>
            <div className="p-6 flex justify-">
              <a
                href="/pppk/"
                className="hover:bg-secondary font-semibold px-6 py-2 rounded-md shadow transition"
              >
                Kembali
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
