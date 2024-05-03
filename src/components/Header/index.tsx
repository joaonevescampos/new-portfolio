"use client";
import Image from "next/image";
import logo from "../../assets/logo-portfolio.png";
import { ModeToggle } from "../ModeToggle";
import { MobileMenu } from "../MobileMenu";
import { useEffect, useState } from "react";
import { DesktopMenu } from "../DesktopMenu";

export function Header() {
    // const [windowSize, setWindowSize] = useState(typeof window.innerWidth !== undefined ? window.innerWidth : 320);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowSize(window.innerWidth);
    //     }

    //     handleResize()
    //     window.addEventListener("resize", handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     }
    // }, []);
    return (
        <header className="absolute top-0 left-0 w-full h-20">
            <div className="flex justify-between items-center m-4">
            <div>
                {/* <Image
                    src={logo}
                    alt="logo do portfólio"
                    width={30}
                    height={30}
                />      */}
            </div>
            <div className="flex items-center justify-center gap-6">
                <ModeToggle />
                <MobileMenu />
            </div>
        </div>
        </header>
    );
};