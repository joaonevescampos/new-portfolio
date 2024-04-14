import Image from "next/image";
import photoProfile from "../../assets/photo-profile.png";
import { FaBars, FaMoon, FaSun, FaWhatsapp, FaLinkedinIn, FaGithub, FaFile } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { Button } from "../ui/button";

export function Introduction() {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:gap-40 lg:gap-64 md:items-start md:justify-start p-8">
            <div>
                    <Image
                        src={photoProfile}
                        alt="logo do portfólio"
                        className="w-52 md:w-64 md:pt-12 "
                    />
            </div>
            <div>
                <div className="flex justify-center items-center md:items-start md:justify-start flex-col gap-8 my-4 w-72">
                    <div className="">
                        <p className="text-xs">Olá, sou</p>
                        <div className="md:flex md:gap-4">
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight">Frontend</h1>
                            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-purple-color01"> Developer.</h1>
                        </div>
                    </div>
                    <p className="scroll-m-20 text-base text-justify tracking-tight md:w-[410px]">
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
        </div>
    );
};