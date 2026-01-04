import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/e-presensi")({
  component: ProsedurComponent,
});

function ProsedurComponent() {
  return (
    <div className="space-y-6">
      <div className="bg-white text-black dark:bg-slate-900 dark:text-white rounded shadow-sm p-4">
        <nav className="text-sm text-black dark:text-white">
          <span className="hover:text-black dark:hover:text-white cursor-pointer">
            Home
          </span>
          <span className="mx-2">/</span>
          <span className="text-black dark:text-white font-medium">
            Prosedur
          </span>
        </nav>
      </div>

      <video
        src="/videos/e-presensi.mp4"
        controls
        className="w-full rounded lg shadow-md mt-6"
      ></video>

      <div className="my-8 text-center">
        <Button
          asChild
          size="lg"
          className="mt-6 bg-gray-400 hover:bg-white text-black font-semibold"
        >
          <a
            href="https://presensi-v2.bantulkab.go.id/site/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login ke E-Presensi
          </a>
        </Button>
      </div>
      <div className="p-6 flex justify-">
        <a
          href="/pns-negeri/"
          className="bg-gray-400 hover:bg-gray-400 text-black font-semibold px-6 py-2 rounded-md shadow transition"
        >
          Kembali
        </a>
      </div>
    </div>
  );
}
