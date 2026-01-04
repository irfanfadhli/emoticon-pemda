export default function Footer() {
  return (
    <footer className=" dark:bg-slate-900 dark:text-white mt-12 border-t-4 border-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-5 ">Kontak</h3>
            <p className="text-sm ">
              0274 367171
            </p>
            <p className="text-sm  mt-2">bidangptk.dikporabantul@gmail.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-5 ">Alamat</h3>
            <p className="text-sm ">
              Komplek II Kantor Pemda Bantul, Jl. Lingkar Timur Manding,
              Trirenggo, Area Sawah, Trirenggo, Kec. Bantul, Kabupaten Bantul,
              Daerah Istimewa Yogyakarta 55714
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-5 ">Jam Layanan</h3>
            <p className="text-sm ">
              Senin - Jumat: 07:30 - 15:00 WIB
            </p>
          </div>
        </div>
        <div className="border-t  mt-6 pt-6 text-center">
          <p className="text-sm">
            © 2025 PTK.Dikpora.Bantul D.I. Yogyakarta. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
