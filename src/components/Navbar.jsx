import { useEffect, useState } from "react"
import { X, Menu} from "lucide-react"
import { cn } from "@/lib/utils"
const navItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contacts", href: "#contacts"},
    
]


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(true);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return (
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Mouad </span> Portfolio
                    </span>
                </a>
                {/* Desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {
                        navItems.map((item, index) => (
                            <a key={index} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                {item.name}
                            </a>
                        ))
                    }
                </div>

                {/* Mobile nav */}*

                <button 
                    className="md:hidden p-2 text-foreground z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    { isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen 
                    ? "opacity-100 pointer-eventes-auto" 
                    : "opacity-0 pointer-events-none"
                )}>
                    <div className="flex flex-col md:flex space-y-8 text-xl">
                        {
                            navItems.map((item, index) => (
                                <a 
                                    key={index} 
                                    href={item.href} 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                    >

                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>

            </div>
        </nav>
    )
}
