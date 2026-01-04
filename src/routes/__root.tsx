import { createRootRoute, Outlet } from "@tanstack/react-router";

import { useTheme } from "../context/ThemeContext";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const Route = createRootRoute({
  component: RootComponent,
});
const navigationData = [
  {
    title: 'Beranda',
    href: '/'
  },
  {
    title: 'Cuti PNS Negeri',
    href: '/pns-negeri/'
  },
  {
    title: 'Cuti PNS Swasta',
    href: '/swasta/'
  },
  {
    title: 'PPPK',
    href: '/pppk/'
  }
]


function RootComponent() {
  const {} = useTheme();

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <div className="min-h-screen text-black transition-colors duration-300 bg-white dark:text-white dark:bg-slate-900">
          <Navbar  navigationData={navigationData} />

          <main className="max-w-7xl mx-auto px-4 py-8">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}
