"use client";
import Image from "next/image";
import photoProfile from "../../assets/photo-profile.png";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaFile } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";

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
                        <a href="https://api.whatsapp.com/send?phone=5561982481039&text=Ol%C3%A1,%20Jo%C3%A3o!%20Vi%20seu%20portfolio%20e%20me%20interessei%20pelo%20seu%20trabalho!"
                        className="font-bold text-purple-color01">
                            Whats App
                        </a>
                    </div>
                    <div className="flex gap-2">
                        <FaGithub className="text-2xl text-purple-color01"  />
                        <a href="https://github.com/joaonevescampos" className="font-bold text-purple-color01">Github</a>
                    </div>
                    <div className="flex gap-2">
                        <FaLinkedinIn className="text-2xl text-purple-color01" />
                        <a href="https://www.linkedin.com/in/joaonevescampos" className="font-bold text-purple-color01">Linkedin</a>
                    </div>
                    <div className="flex gap-2">
                        <FaFile className="text-2xl text-purple-color01" />
                        <Link href="/cv.pdf" className="font-bold text-purple-color01">Currículo</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};