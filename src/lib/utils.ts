import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Hitung hari kerja (tidak termasuk Sabtu & Minggu)
export function hitungHariKerja(mulai: string, selesai: string): number {
  if (!mulai || !selesai) return 0;
  
  const start = new Date(mulai);
  const end = new Date(selesai);
  let count = 0;
  const current = new Date(start);
  
  while (current <= end) {
    const day = current.getDay();
    if (day !== 0 && day !== 6) count++;
    current.setDate(current.getDate() + 1);
  }
  
  return count;
}

// Format tanggal
export function formatTanggal(tanggal: string): string {
  const date = new Date(tanggal);
  return date.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

// Get status color
export function getStatusColor(status: string): string {
  switch (status) {
    case 'Disetujui':
      return 'bg-green-100 text-green-800';
    case 'Ditolak':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-yellow-100 text-yellow-800';
  }
}

// Types
export interface User {
  nip: string;
  nama: string;
  jabatan: string;
  unitKerja: string;
}

export interface JenisCuti {
  id: number;
  nama: string;
  maxHari: number | null;
}

export interface Pengajuan {
  id: number;
  jenisCuti: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  jumlahHari: number;
  alasan: string;
  status: 'Menunggu' | 'Disetujui' | 'Ditolak';
  tanggalPengajuan: string;
}

export interface FormData {
  jenisCuti: string;
  tanggalMulai: string;
  tanggalSelesai: string;
  alasan: string;
  alamatCuti: string;
  noTelp: string;
}

// Mock Data
export const mockUser: User = {
  nip: '199001012020121001',
  nama: 'Ahmad Budiman',
  jabatan: 'Analis Kepegawaian',
  unitKerja: 'Badan Kepegawaian Daerah'
};

export const jenisCuti: JenisCuti[] = [
  { id: 1, nama: 'Cuti Tahunan', maxHari: 12 },
  { id: 2, nama: 'Cuti Besar', maxHari: null },
  { id: 3, nama: 'Cuti Sakit', maxHari: null },
  { id: 4, nama: 'Cuti Melahirkan', maxHari: 90 },
  { id: 5, nama: 'Cuti Alasan Penting', maxHari: null },
  { id: 6, nama: 'Cuti di Luar Tanggungan Negara', maxHari: null }
];

export const initialPengajuan: Pengajuan[] = [
  {
    id: 1,
    jenisCuti: 'Cuti Tahunan',
    tanggalMulai: '2025-01-15',
    tanggalSelesai: '2025-01-20',
    jumlahHari: 6,
    alasan: 'Keperluan keluarga',
    status: 'Disetujui',
    tanggalPengajuan: '2025-01-05'
  },
  {
    id: 2,
    jenisCuti: 'Cuti Sakit',
    tanggalMulai: '2024-12-10',
    tanggalSelesai: '2024-12-12',
    jumlahHari: 3,
    alasan: 'Sakit demam',
    status: 'Menunggu',
    tanggalPengajuan: '2024-12-09'
  }
];