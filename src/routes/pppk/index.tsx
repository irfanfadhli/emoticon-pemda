import { createFileRoute, Link } from '@tanstack/react-router';
import { Home, ChevronRight,  } from 'lucide-react';

export const Route = createFileRoute('/pppk/')({
  component: IndexComponent,
});

const menuItems = [
  { id: 'jenis', nama: 'Jenis Cuti', path: '/pppk/jenis' },
  { id: 'dasar', nama: 'Dasar Hukum', path: '/dasar-hukum/' },
  { id: 'syarat', nama: 'Syarat dan Kelengkapan Berkas', path: '/syarat-berkas/' },
  { id: 'prosedur', nama: 'Tutorial penggunaan E-cuti', path: '/prosedur' },
  { id: 'pyb', nama: 'PYB Memberikan Cuti', path: '/pyb/' },
  { id: 'e-presensi', nama: 'Tutorial Penggunaan E-Presensi', path: '/e-presensi' }  
];

function IndexComponent() {
  return (
    <div className="space-y-6 animation-fade-in">
      <div className=" rounded shadow-sm overflow-hidden">
        <div className="bg-linear-to-r   px-6 py-8 ">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Daftar Standar Operasional Dinas Pendidikan Kepemudaan dan Olahraga Kabupaten Bantul
          </h1>
          <div className="flex items-center text-sm space-x-2 mt-4">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <span>/</span>
            <span>Cuti Pegawai PPPK</span>
          </div>
        </div>
      </div>
      <div className="  rounded shadow-sm">
        <div className="px-6 py-4">
          <p className=" dark: italic mb-6">
            Detail layanan Cuti Pegawai PPPK adalah sebagai berikut:
          </p>
          <div className="space-y-2">
            {menuItems.map(item => (
              <Link
                key={item.id}
                to={item.path as any}
                className="w-full flex items-center justify-between px-4 py-4 border  rounded hover:bg-primary dtransition group"
              >
                <span className="font-medium  dark: text-left">{item.nama}</span>
                <ChevronRight className="w-5 h-5  dark:  dark:group-hover:text-emerald-900 transition" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}