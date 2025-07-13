import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return(
        <footer className="py-2 px-4 mt-12 pt-6 bg-card relative border-t border-border flex flex-col-reverse flex-wrap justify-between items-center">
            <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Ankan.co. All rights reserved.</p>

            <a href="#hero" className="p-2 mb-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"> <ArrowUp size={20}/> </a>
        </footer>
    )
}