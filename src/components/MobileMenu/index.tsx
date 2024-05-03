"use client"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            {!openMenu ? (
                <FaBars
                    className="text-xl cursor-pointer m-4"
                    onClick={() => setOpenMenu(true)}> 
                </FaBars>
            ) : (
                <div>
                    <FaTimes
                        className="absolute right-5 top-5 text-white cursor-pointer z-50"
                        onClick={() => setOpenMenu(false)}>
                    </FaTimes>
                    <ul className="absolute z-40 right-0 top-0 w-72 h-96 p-4 bg-purple-color01 opacity-90">
                        <li className="text-sm p-4 text-white font-semibold hover:text-purple-300">
                           <a href="#home" onClick={() => setOpenMenu(false)}>Home</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#tecnologies" onClick={() => setOpenMenu(false)}>Tecnologias</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#skills" onClick={() => setOpenMenu(false)}>Habilidades</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#projects" onClick={() => setOpenMenu(false)}>Projetos</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#recomendations" onClick={() => setOpenMenu(false)}>Recomendações</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#contact" onClick={() => setOpenMenu(false)}>Contato</a>
                        </li>
                    </ul>                   
                </div>
            )}
        </div>
    )
}