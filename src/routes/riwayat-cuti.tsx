import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Clock, CheckCircle, XCircle, Calendar } from 'lucide-react';
import { initialPengajuan, getStatusColor, type Pengajuan } from '../lib/utils';


export const Route = createFileRoute('/riwayat-cuti')({
  component: RiwayatCutiComponent,
});
function RiwayatCutiComponent() {
  const [pengajuan] = useState<Pengajuan[]>(initialPengajuan);
  const [filter, setFilter] = useState<string>('Semua');

  const filteredPengajuan = filter === 'Semua' 
    ? pengajuan 
    : pengajuan.filter(p => p.status === filter);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Disetujui':
        return <CheckCircle className="w-4 h-4" />;
      case 'Ditolak':
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const stats = {
    total: pengajuan.length,
    menunggu: pengajuan.filter(p => p.status === 'Menunggu').length,
    disetujui: pengajuan.filter(p => p.status === 'Disetujui').length,
    ditolak: pengajuan.filter(p => p.status === 'Ditolak').length,
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-4">
        <nav className="text-sm text-gray-600 dark:text-gray-400\">
          <span className="hover:text-teal-600 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-teal-600 font-medium">Riwayat Cuti</span>
        </nav>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Pengajuan</p>
              <p className="text-2xl font-bold text-gray-800 mt-1">{stats.total}</p>
            </div>
            <Calendar className="w-10 h-10 text-gray-400" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Menunggu</p>
              <p className="text-2xl font-bold text-yellow-600 mt-1">{stats.menunggu}</p>
            </div>
            <Clock className="w-10 h-10 text-yellow-400" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Disetujui</p>
              <p className="text-2xl font-bold text-green-600 mt-1">{stats.disetujui}</p>
            </div>
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded shadow-sm p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Ditolak</p>
              <p className="text-2xl font-bold text-red-600 mt-1">{stats.ditolak}</p>
            </div>
            <XCircle className="w-10 h-10 text-red-400" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded shadow-sm">
        <div className="px-6 py-4 border-b flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white\">Riwayat Pengajuan Cuti</h2>
            <p className="text-sm text-gray-600 mt-1">
              Daftar semua pengajuan cuti yang pernah diajukan
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm text-gray-600 dark:text-gray-400\">Filter:</label>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="Semua">Semua</option>
              <option value="Menunggu">Menunggu</option>
              <option value="Disetujui">Disetujui</option>
              <option value="Ditolak">Ditolak</option>
            </select>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700\">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Tanggal Pengajuan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Jenis Cuti
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Periode
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Lama
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Alasan
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredPengajuan.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500 dark:text-gray-400\">
                    Tidak ada data pengajuan
                  </td>
                </tr>
              ) : (
                filteredPengajuan.map(item => (
                  <tr key={item.id} className="hover:bg-gray-50 dark:bg-gray-700\">
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white\">
                      {item.tanggalPengajuan}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white\">
                      {item.jenisCuti}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white\">
                      {item.tanggalMulai} s/d {item.tanggalSelesai}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white\">
                      {item.jumlahHari} hari
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white\">
                      <div className="max-w-xs truncate" title={item.alasan}>
                        {item.alasan}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        <span>{item.status}</span>
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
