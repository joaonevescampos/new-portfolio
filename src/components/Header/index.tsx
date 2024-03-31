import Image from "next/image";
import logo from "../../assets/logo-portfolio.png";
import { ModeToggle } from "../ModeToggle";
import { Menu } from "../Menu";
// FaWhatsapp, FaLinkedinIn, FaGithub, FaFile
//front: FaCode, design FaDesktop, back: FaCube
//Tecnologias: /di
//DiHTML5, DiCSS3, DiJsBadge, DiReact, DiBootstrap, DiPostgresql, DiNodeJsSmall, 
//DiGit, FaGithub, FaFigma, SiTailwindcss, SiCanva, SiGimp
export default function Header() {
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
                <ModeToggle />
                <Menu />
            </div>
        </header>
    );
};