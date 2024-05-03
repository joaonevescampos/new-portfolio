"use client"
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div>
            <FaBars className="text-xl cursor-pointer m-4" onClick={() => setOpenMenu(true)}></FaBars>
            {openMenu && (
                <div>
                    <FaTimes
                        className="absolute right-5 top-5 text-white cursor-pointer z-50"
                        onClick={() => setOpenMenu(false)}>
                    </FaTimes>
                    <ul className="fixed right-0 top-0 w-72 h-full p-4 bg-purple-color01 ease-in-out duration-100">
                        <li className="text-sm p-4 text-white font-semibold">
                           <a href="#home">Home</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#tecnologies">Tecnologias</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#skills">Habilidades</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#projects">Projetos</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#recomendations">Recomendações</a>
                        </li>
                        <li className="text-sm p-4 text-white font-semibold">
                            <a href="#contact">Contato</a>
                        </li>
                    </ul>                   
                </div>
            )}
        </div>
    )
}