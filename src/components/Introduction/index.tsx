import Image from "next/image";
import photoProfile from "../../assets/photo-profile.png";
import { FaBars, FaMoon, FaSun, FaWhatsapp, FaLinkedinIn, FaGithub, FaFile } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { Button } from "../ui/button";
// FaWhatsapp, FaLinkedinIn, FaGithub, FaFile
//front: FaCode, design FaDesktop, back: FaCube
//Tecnologias: /di
//DiHTML5, DiCSS3, DiJsBadge, DiReact, DiBootstrap, DiPostgresql, DiNodeJsSmall, 
//DiGit, FaGithub, FaFigma, SiTailwindcss, SiCanva, SiGimp
export default function Introduction() {
    return (
        <div className="flex flex-col items-center justify-center m-4">
            <div className="bg-purple-color01 opacity-25 w-52 h-52 rounded-full absolute top-14 -z-10"></div>
                <Image
                    src={photoProfile}
                    alt="logo do portfólio"
                    width={208}
                    height={208}
                />
            <div className="flex justify-center items-center flex-col gap-8 my-4 w-72">
                <div>
                    <p className="text-xs">Olá, sou</p>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Frontend</h1>
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-purple-color01"> Developer.</h1>
                </div>
                <p className="scroll-m-20 text-base tracking-tight">
                    Bem-vindo(a), meu nome é João, um engenheiro químico, que está embarcando em uma empolgante transição para a profissão de desenvolvedor front-end com noções de design e backend. Com uma sólida formação em engenharia química, descobri minha verdadeira paixão pela tecnologia web e decidi mergulhar de cabeça nesse novo desafio.
                </p>
                <Button variant="default">Projetos</Button>
            </div>

            <div className="flex flex-col text-sm w-52 gap-4 pl-4 my-4 border-l-4 border-purple-color01">
                <div className="flex gap-2">
                    <FaWhatsapp className="text-2xl text-purple-color01" />
                    <p className="font-bold text-purple-color01">What's App</p>
                </div>
                <div className="flex gap-2">
                    <FaGithub className="text-2xl text-purple-color01"  />
                    <p className="font-bold text-purple-color01">Github</p>
                </div>
                <div className="flex gap-2">
                    <FaLinkedinIn className="text-2xl text-purple-color01" />
                    <p className="font-bold text-purple-color01">Linkedin</p>
                </div>
                <div className="flex gap-2">
                    <FaFile className="text-2xl text-purple-color01" />
                    <p className="font-bold text-purple-color01">Currículo</p>
                </div>
            </div>
        </div>
    );
};