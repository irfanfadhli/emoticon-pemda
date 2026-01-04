import { createFileRoute, Link } from '@tanstack/react-router';
import { Home, ChevronRight,  } from 'lucide-react';


export const Route = createFileRoute("/pns-negeri/")({
  component: IndexComponent,
});

const menuItems = [
  { id: 'jenis', nama: 'Jenis Cuti', path: '/pns-negeri/jenis-cuti' },
  { id: 'dasar', nama: 'Dasar Hukum', path: '/dasar-hukum/' },
  { id: 'syarat', nama: 'Syarat dan Kelengkapan Berkas', path: '/syarat-berkas/' },
  { id: 'prosedur', nama: 'Tutorial Penggunaan E-cuti', path: '/prosedur' },
  { id: 'pyb', nama: 'PYB Memberikan Cuti', path: '/pyb/' },
  { id: 'penggunaan e-presensi', nama: 'Tutorial Penggunaan E-Presensi', path: '/e-presensi' },
  { id: 'ketentuan lainnya', nama: 'Ketentuan lainnya', path: '/ketentuan' },
  { id: 'check pengajuan ttd cuti', nama: 'Check Pengajuan TTD Cuti', path: '/ttd-cuti' }
];

function IndexComponent() {
  return (
    <div className="space-y-6 animation-fade-in min-h-screen p-6">
      {/* Hero Section */}
      <div className="rounded shadow-sm overflow-hidden">
        <div className=" px-6 py-8  border-b-4 border-gray-400">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 ">
            Daftar Standar Operasional Dinas Pendidikan Kepemudaan dan Olahraga  Kabupaten Bantul
          </h1>
          <div className="flex items-center text-sm space-x-2 mt-4">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <span>/</span>
            <span>Cuti Pegawai</span>
          </div>
        </div>
      </div>
      <div className="rounded shadow-sm">
        <div className="px-6 py-4 border-b-2 border-gray-400">
          <p className=" italic mb-6">
            Detail layanan Cuti Pegawai Negeri adalah sebagai berikut:
          </p>
          <div className="space-y-2">
            {menuItems.map(item => (
              <Link
                key={item.id}
                to={item.path as any}
                className="w-full flex items-center justify-between px-4 py-4 border-l-4 rounded hover:bg-secondary transition group"
              >
                <span className="font-medium  dark:text-gray-100 text-left">{item.nama}</span>
                <ChevronRight className="w-5 h-5  transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 flex justify-">
            <Link
              to="/"
              className="mt-3 inline-block hover:bg-secondary  font-semibold px-3 py-2 rounded-md shadow "
            >
              Kembali
            </Link>
          </div>
    </div>
  );
}