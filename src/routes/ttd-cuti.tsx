import { createFileRoute } from "@tanstack/react-router";
import {} from "lucide-react";
import {} from "../lib/utils";

export const Route = createFileRoute("/ttd-cuti")({
  component: JenisCutiPage,
});

export default function JenisCutiPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center  ">
      <div className="w-full flex flex-col items-center pt-14 pb-8 text-center px-4">
        <h2 className="text-3xl font-extrabold tracking-wider ">
          Check Pengajuan
        </h2>
        <h2 className="text-3xl font-extrabold tracking-wider ">
          Tanda Tangan Cuti
        </h2>
        <h3 className="text-xl font-semibold mt-2 s">
          Untuk Cuti PNS
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 mb-20 w-full px-6 max-w-4xl">
        <a
          href="https://docs.google.com/spreadsheets/d/1Fz3LKYXYV5Ny8eDGz3E7AmhFRMdjh9AKmykx2eml4-c/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full py-6 text-2xl font-bold  
            rounded-3xl border-2 border-gray-200 tracking-wide
            shadow-md hover:shadow-lg hover:bg-secondary
            transition-all text-center
          "
        >
          CUTI SAKIT
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/15N2JLYmApz6LPgGp1cVCmNFyF9RRNybApDE6g6m5Qgw/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full py-6 text-2xl font-bold  
            rounded-3xl border-2 border-gray-200 tracking-wide
            shadow-md hover:shadow-lg hover:bg-secondary
            transition-all text-center
          "
        >
          CUTI ALASAN PENTING
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1mCHbPvrQ7w97GchvNpgemxGeK4XMBRxH3THxjR1ObiU/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full py-6 text-2xl font-bold  
            rounded-3xl border-2 border-gray-200 tracking-wide
            shadow-md hover:shadow-lg hover:bg-secondary
            transition-all text-center
          "
        >
          CUTI BESAR
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1Q23cQcPm05EzbVa39vKGtCSjN-C_-584y0BPQ-DdL2E/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="
        w-full py-6 text-2xl font-bold  
            rounded-3xl border-2 border-gray-200 tracking-wide
            shadow-md hover:shadow-lg hover:bg-secondary
            transition-all text-center
          "
        >
          CUTI TAHUNAN
        </a>
        <a
          href="https://docs.google.com/spreadsheets/d/1HwSaqp9h2sKUhlychYGT_jGYYY3RgVZ4IOSZR4hFE1I/edit?gid=0#gid=0"
          target="_blank"
          rel="noopener noreferrer"
          className="
            w-full py-6 text-2xl font-bold  
            rounded-3xl border-2 border-gray-200 tracking-wide
            shadow-md hover:shadow-lg hover:bg-secondary
            transition-all text-center
          "
        >
          CUTI MELAHIRKAN
        </a>
        <button
          className="
          w-full py-6 text-2xl font-bold  
            rounded-3xl border-2 border-gray-200 tracking-wide
            shadow-md hover:shadow-lg hover:bg-secondary
            transition-all text-center
          "
        >
          CLTN
        </button>
      </div>
      <div className="p-6 flex justify-">
        <a
          href="/pns-negeri/"
          className=" hover:bg-secondary  font-semibold px-6 py-2 rounded-md shadow transition"
        >
          Kembali
        </a>
      </div>
    </div>
  );
}
