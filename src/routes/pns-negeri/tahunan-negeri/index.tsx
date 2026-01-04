import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pns-negeri/tahunan-negeri/")({
  component: CutiMelahirkan,
});

function CutiMelahirkan() {
  return (
    <>
      <div className="p-6 flex justify-center  min-h-screen">
        <div className="w-full max-w-6xl  shadow-2xl rounded-2xl p-8 border-4  mt-10 ">
          <h1 className="text-center text-3xl font-extrabold tracking-wide mb-2 ">
            ALUR CUTI TAHUNAN
          </h1>
          <h2 className="text-center text-2xl font-bold italic tracking-wide mb-8 ">
            BAGI PNS
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                1
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                Admin E Cuti sekolah membuatkan form cuti melalui aplikasi
                e-cuti
                <h1>
                  (jika guru yang mengajukan cuti maka harus persetujuan kepala
                  sekolah)
                </h1>
                <p className="mb-3">
                  (jika kepala sekolah yang mengajukan cuti maka harus
                  persetujuan kabid dan kadin).
                </p>
              </div>
            </div>
            <div className=" flex items-start gap-4">
              <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                2
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                Form cuti di setujui dan di sahkan, cuti guru : harus tanda
                tangan kepala sekolah dan cap sekolah. cuti kepala sekolah harus
                di tanda tangani kepala sekolah tapi tidak di cap, tapi harus di
                tanda tangani atasan langsung (kabid dan kadin), diajukan /
                dikirim ke bidang ptk.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="font-semibold text-lg leading-relaxed ">
                <div className=" p-4 rounded-lg border-l-4 border-primary">
                  <h3 className="font-bold text-lg mb-3">
                    BAGI YANG MENGAJUKAN TTD KE DINAS
                  </h3>
                  <p className="mb-3">
                    Bisa mengetahui proses penandatanganan cuti melalui:
                  </p>
                  <Link
                    to="/ttd-cuti-swasta"
                    className="inline-block hover:bg-primary hover:text-white font-bold px-6 py-2 rounded shadow transition"
                  >
                    CHECK
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                3
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                Format cuti dibuat rangkap 2 (dua) untuk yang bersangkutan dan 1
                (satu), untuk bidang ptk 1(satu).
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="  font-bold rounded-full w-12 h-12 flex items-center justify-center text-xl border-2 ">
                4
              </div>
              <div className="font-semibold text-lg leading-relaxed ">
                ADMIN PRESENSI DINAS BISA MENGINPUT CUTI DI APLIKASI E-PRESENSI
              </div>
            </div>
          </div>
          <div className="p-6 flex justify-">
            <a
              href="/pns-negeri/jenis-cuti"
              className=" hover:bg-primary font-semibold px-6 py-2 rounded-md shadow transition"
            >
              Kembali
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CutiMelahirkan;
