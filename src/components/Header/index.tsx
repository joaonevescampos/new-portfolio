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
        <header className="flex justify-between items-center m-4">
            <div>
                <Image
                    src={logo}
                    alt="logo do portfólio"
                    width={30}
                    height={30}
                />     
            </div>
            <div className="flex items-center gap-6">
                {/* {windowSize <= 768 ? (
                    <>
                        <ModeToggle />
                        <MobileMenu />
                    </>
                ) : (
                    <>
                        <DesktopMenu />
                        <ModeToggle />
                    </>
                )} */}
                <ModeToggle />
                <MobileMenu />   
            </div>
        </header>
    );
};