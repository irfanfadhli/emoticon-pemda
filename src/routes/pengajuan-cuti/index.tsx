import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { jenisCuti, hitungHariKerja, type FormData } from '../../lib/utils';

export const Route = createFileRoute('/pengajuan-cuti/')({
  component: PengajuanCutiComponent,
});

function PengajuanCutiComponent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    jenisCuti: '',
    tanggalMulai: '',
    tanggalSelesai: '',
    alasan: '',
    alamatCuti: '',
    noTelp: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (!formData.jenisCuti || !formData.tanggalMulai || !formData.tanggalSelesai || 
        !formData.alasan || !formData.alamatCuti || !formData.noTelp) {
      alert('Mohon lengkapi semua field yang wajib diisi');
      return;
    }
        alert('Pengajuan cuti berhasil diajukan! Data akan diverifikasi oleh atasan.');
        navigate({ to: '/riwayat-cuti' as any });
  };

  return (
    <div className="space-y-6 bg-emerald-900 min-h-screen p-6">
      <div className="rounded shadow-sm p-4 border-b-2 border-amber-400">
        <nav className="text-sm text-white">
          <span className="hover:text-amber-400 cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-amber-400 font-medium">Pengajuan Cuti</span>
        </nav>
      </div>
      <div className="rounded shadow-sm">
        <div className="px-6 py-4 border-b border-amber-400 text-white">
          <h2 className="text-xl font-semibold text-amber-400">Form Pengajuan Cuti</h2>
          <p className="text-sm text-white mt-1">
            Lengkapi formulir di bawah ini untuk mengajukan permohonan cuti
          </p>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Cuti <span className="text-red-500">*</span>
                </label>
                <select
                  name="jenisCuti"
                  value={formData.jenisCuti}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="">Pilih Jenis Cuti</option>
                  {jenisCuti.map(jenis => (
                    <option key={jenis.id} value={jenis.nama}>
                      {jenis.nama} {jenis.maxHari && `(Max ${jenis.maxHari} hari)`}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  No. Telepon <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="noTelp"
                  value={formData.noTelp}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Mulai <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="tanggalMulai"
                  value={formData.tanggalMulai}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tanggal Selesai <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="tanggalSelesai"
                  value={formData.tanggalSelesai}
                  onChange={handleInputChange}
                  className="w-full border border-amber-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-emerald-800 text-white"
                />
              </div>
            </div>

            {formData.tanggalMulai && formData.tanggalSelesai && (
              <div className="border-t-4 border-amber-400 rounded p-4">
                <p className="text-sm text-white">
                  <strong>Jumlah hari kerja:</strong>{' '}
                  {hitungHariKerja(formData.tanggalMulai, formData.tanggalSelesai)} hari
                </p>
                <p className="text-xs text-teal-600 mt-1">
                  * Tidak termasuk Sabtu dan Minggu
                </p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alamat Selama Cuti <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="alamatCuti"
                value={formData.alamatCuti}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Alamat lengkap yang dapat dihubungi"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Alasan Cuti <span className="text-red-500">*</span>
              </label>
              <textarea
                name="alasan"
                value={formData.alasan}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Jelaskan alasan pengajuan cuti secara detail"
              />
            </div>

            <div className="border-t-4 border-amber-400 rounded p-4">
              <p className="text-sm text-white">
                <strong>Catatan:</strong> Pastikan semua data yang Anda masukkan sudah benar. 
                Pengajuan cuti akan diverifikasi oleh atasan langsung.
              </p>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-amber-400">
              <button
                onClick={handleSubmit}
                className="bg-amber-400 text-emerald-900 px-6 py-2 rounded hover:bg-amber-500 transition font-medium"
              >
                Ajukan Cuti
              </button>
              <button
                onClick={() => navigate({ to: '/' })}
                className="bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-600 transition font-medium"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
