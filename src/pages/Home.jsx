import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { HeroSecion } from "@/components/HeroSecion";
import { Navbar } from "@/components/Navbar";
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Background Effects */}
            <StarBackground />


            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main>
                <HeroSecion />
            </main>

            {/* Footer */}
        </div> 
    ) 
    
}
