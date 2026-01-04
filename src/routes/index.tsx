import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { FileText } from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
  
});

function RouteComponent() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollInterval: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth
        ) {
          // Kembali ke awal jika sudah sampai akhir
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Geser ke kanan
          container.scrollBy({ left: 300, behavior: "smooth" });
        }
      }, 3000); // Geser setiap 3 detik
    };

    startAutoScroll();

    // Pause auto-scroll saat user hover atau scroll manual
    const handleMouseEnter = () => clearInterval(scrollInterval);
    const handleMouseLeave = () => startAutoScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(scrollInterval);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className=" animation-fade-in   dark:bg-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold leading-snug">
            Sistem Layanan Cuti Pegawai
            <br />
            <span className="text-shadow-amber-50">
              Bidang PTK – Dinas Pendidikan Kepemudaan dan Olahraga Kabupaten
              Bantul
            </span>
          </h1>

          <p className="mt-10 text-lg ">
            Mendukung pelayanan kepegawaian guru dan tenaga kependidikan secara
            cepat, transparan, dan akuntabel berbasis digital.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/image/dinas.jpeg"
            alt="Ilustrasi PTK"
            className="w-200 drop-shadow-2xl rounded-xl"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
        <button
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/folders/1KjCv5WIpeYHDRh-aUs10tH_2VwugK51a?usp=sharing",
              "_blank"
            )
          }
          className="  bg-emerald-400 text-black px-8 py-4 mt-12 rounded-lg font-bold text-lg hover:bg-secondary transition shadow-lg flex items-center space-x-2 animate-bounce"
        >
          <FileText size={24} />
          <span>Ajukan Cuti Sekarang</span>
        </button>
      </div>
      <section className="max-w-6xl mx-auto px-6 py-12 mt-10">
        <h2 className="text-2xl font-bold text-shadow-white text-center">
          Bidang Pembinaan Tenaga Kependidikan (PTK)
        </h2>
        <p className="text-center max-w-2xl mx-auto mt-10">
          Bidang PTK bertugas menyelenggarakan pembinaan guru dan tenaga
          kependidikan, termasuk layanan administrasi kepegawaian seperti
          kenaikan pangkat, cuti, pindah tugas, dan penilaian kinerja.
        </p>
        <div className="mt-10 mb-10">
          <h3 className="text-xl font-semibold text-center mb-10">
            Galeri Kegiatan
          </h3>
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 scrollbar-hide"
          >
            <div className="flex gap-6 min-w-min px-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <img
                  key={index}
                  src={`/image/kegiatan ${index + 1}.jpeg`}
                  alt={`Kegiatan ${index + 1}`}
                  className="h-64 rounded-lg shadow-lg object-cover hover:scale-105 transition "
                />
              ))}
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className=" rounded-lg shadow p-6 border-2  hover:shadow-lg transition">
            <img src="/image/guru.jpg" className="w-14 mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-5">
              Pelayanan Guru
            </h3>
            <p className="text-center mt-3">
              Informasi dan layanan terkait cuti, penilaian kinerja, dan
              administrasi kepegawaian guru.
            </p>
          </div>
          <div className=" rounded-lg shadow p-6 border-2  hover:shadow-lg transition">
            <img src="/image/vector.jpg" className="w-14 mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-5">
              Standar Operasional
            </h3>
            <p className="text-center mt-3">
              Pedoman resmi untuk proses layanan cuti, mutasi, dan administrasi
              PTK.
            </p>
          </div>
          <div className=" rounded-lg shadow p-6 border-2  hover:shadow-lg transition">
            <img src="/image/service.jpg" className="w-14 mx-auto" />
            <h3 className="text-lg font-semibold text-center mt-5">
              Layanan Digital
            </h3>
            <p className="text-center mt-3">
              Sistem online mempermudah pegawai dalam pengajuan cuti dan melihat
              status layanan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
