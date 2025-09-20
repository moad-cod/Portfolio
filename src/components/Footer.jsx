import { ArrowUp } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card relative border border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center"> 
        <p className="text-sm text-muted-foreground">
             &copy; {new Date().getFullYear()} Mouad.co. All rights reserved
        </p>
        <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 heading-lavender transition-colors">
            <ArrowUp className="h-5 w-5 heading-lavender" />
        </a>
    </footer>
  )
}
