"use client";
import React, {useState, useEffect} from "react";

//components
import ThemeToggler from "./ThemeToggler"
import Logo from "./ui/Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import { Sheet } from "./ui/sheet";


const Header = () => {
    const [header, setHeader] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setHeader(true) : setHeader(false);
        };
        
        //add event
        window.addEventListener("scroll", handleScroll)
        //remove
        return () => window.removeEventListener("scroll", handleScroll);
    })
    return (
        
        <header 
        className={`${
            header 
            ? "py-4 bg-white shadow-lg dark:bg-accent sticky top-0 z-30 transition-all" 
            : "py-6 dark:bg-transparent"
            } sticky top-0 z-30 transition-all ${pathname === "/" && "bg-[#fef9ff]"}`}>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/*Nav*/}
                        <Nav 
                            containerStyles="hidden xl:flex gap-x-8 items-center" 
                            linkStyles="relative hover:text-primary transition-all" 
                            underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"/>
                        <ThemeToggler />
                        {/*Mobile Nav*/}
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            <Sheet className="bg-red-50"/>
            </div>
        </header>
    )
}


export default Header

//Sticky asegura que el encabezado se adhiera en la parte superior de la pagina al hacer scroll.