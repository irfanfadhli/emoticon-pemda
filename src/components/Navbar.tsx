import { MenuIcon } from 'lucide-react'
import { useTheme } from "../context/ThemeContext";
import { Button } from '@/components/ui/button'
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'



type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({ navigationData }: { navigationData: NavigationItem }) => {
const { isDark, toggleTheme } = useTheme();
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-4 sm:px-6'>
        <a href='/' className='flex items-center gap-3'>
            <img src='/image/logo-kabupaten-bantul.png' alt='Logo' className='h-10 md:h-16 w-10 md:w-16'/>
          </a>
        <div className='text-muted-foreground flex flex-1 items-center gap-8 font-medium md:justify-center lg:gap-16'>
          {navigationData.map((item) => (
            <a href={item.href} className='hover:text-primary max-md:hidden'>
                {item.title}
            </a>
          ))}
        </div>

        <div className='flex items-center gap-6'>
          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              <DropdownMenuGroup>
                {navigationData.map((item, index) => (
                  <DropdownMenuItem key={index}>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
           <button
                onClick={() => {
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
        </div>
      </div>
    </header>
  )
}

export default Navbar
