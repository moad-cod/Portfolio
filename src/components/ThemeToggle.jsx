import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
        }
    }, [])
    
    const toggleTheme = () => {
        if(isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setDarkMode(true);
        }
    }

    return (
        <button 
            className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
            onClick={toggleTheme} 
        >
            {isDarkMode 
            ? <Sun className="w-6 h-6 text-yellow-300"/> 
            : <Moon className="w-6 h-6 text-blue-900"/>}
        </button>
    )
}