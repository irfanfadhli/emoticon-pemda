import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link as RouterLink } from "@tanstack/react-router";
import { useTheme } from "../context/ThemeContext";
const Link = RouterLink as unknown as any;

interface HeaderProps {
  user?: {
    nip: string;
    nama: string;
    jabatan: string;
    unitKerja: string;
  };
}

export function Header({}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();
  useEffect(() => {
    console.log("Dark mode is:", isDark);
    console.log(
      "HTML has dark class:",
      document.documentElement.classList.contains("dark")
    );
  }, [isDark]);

  const handleDropdownHover = (menu: string | null) => {
    setActiveDropdown(menu);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="  dark:bg-slate-900 dark:text-white animation-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center py-4">
            <div className="w-16 h-16  mr-5 ">
              <div className="font-bold text-xs text-center leading-tight text-white">
                <img src="/image/logo-kabupaten-bantul.jpg" alt="" />
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-xl md:text-2xl font-bold">
                DINAS PENDIDIKAN KEPEMUDAAN DAN OLAHRAGA
              </h1>
              <p className="text-sm">PEMERINTAHAN KABUPATEN BANTUL</p>
              <p className="text-sm">DAERAH ISTIMEWA YOGYAKARTA</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="shadow-md relative border-b-2 border-white animation-fade-in">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="px-4 py-3 hover:bg-gray-400 transition"
                onClick={closeDropdown}
              >
                Beranda
              </Link>
              <Link
                to="/pns-negeri/"
                className="px-4 py-3 hover:bg-gray-400 transition"
                onClick={closeDropdown}
              >
                Cuti PNS Negeri
              </Link>
              <Link
                to="/swasta/"
                className="px-4 py-3 hover:bg-gray-400 transition"
                onClick={closeDropdown}
              >
                Cuti PNS Swasta
              </Link>
              <Link
                to="/pppk/"
                className="px-4 py-3 hover:bg-gray-400 transition"
                onClick={closeDropdown}
              >
                PPPK
              </Link>

              <div
                className="relative"
                onMouseEnter={() => handleDropdownHover("pelayanan")}
                onMouseLeave={() => handleDropdownHover(null)}
              ></div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  console.log("Button clicked!");
                  toggleTheme();
                }}
                className="p-2 hover:bg-gray-400 rounded transition"
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
