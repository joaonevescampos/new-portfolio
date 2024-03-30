import Image from "next/image";
import logo from "../../assets/logo-portfolio.png";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { GoSun } from "react-icons/go";
// FaWhatsapp, FaLinkedinIn, FaGithub, FaFile
//front: FaCode, design FaDesktop, back: FaCube
//Tecnologias: /di
//DiHTML5, DiCSS3, DiJsBadge, DiReact, DiBootstrap, DiPostgresql, DiNodeJsSmall, 
//DiGit, FaGithub, FaFigma, SiTailwindcss, SiCanva, SiGimp
export default function Header() {
    return (
        <header className="flex justify-between items-center">
            <div>
                <Image
                    src={logo}
                    alt="logo do portfólio"
                    width={30}
                    height={30}
                />     
            </div>
            <div className="flex gap-6">
                <GoSun className="text-xl"></GoSun>
                <FaBars className="text-xl opacity-50"></FaBars>
            </div>
        </header>
    );
};