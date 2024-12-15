"use client";
import * as React from "react";
import Image from "next/image";
import cucaflow from "../../assets/project-cucaflow.png";
import newboard from "../../assets/project-newboard.png";
import mandala from "../../assets/project-mandala.png";
import mySpotify from "../../assets/project-myspotify.png";
import hotel from "../../assets/hotel-campos.png";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import {
    DiJavascript,
    DiHtml5,
    DiCss3,
    DiReact,
    DiBootstrap,
    DiNodejsSmall,
    DiPostgresql,
} from "react-icons/di";
import { SiPrisma, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";

export function Projects() {
    const [visible, setVisible] = React.useState(false)
    const projects = [
        
        {
            src: newboard,
            type: "Full Stack",
            name: "New Board",
            techs: [DiHtml5, DiCss3, DiJavascript, DiReact, DiPostgresql, DiNodejsSmall],
            previous: "New Board é um software que gerencia tarefas, similar ao Trello.",
            description: "New Board é um software que gerencia tarefas, similar ao Trello. Desenvolvido por uma equipe de cinco desenvolvedores liderados por mim, este projeto utiliza as tecnologias: React, CSS, Node e PostgreSQL. Atuei como desenvolvedor frontend e designer, fazendo todo o design do projeto no Figma e criando as telas de Home, Boards, Account entre outras.",
            repo:"https://github.com/joaonevescampos/new-board",
            deploy: "https://new-board-project.vercel.app/"
        },
        {
            src: mySpotify,
            type: "Frontend",
            techs: [DiHtml5, DiCss3, DiReact],
            name: "My Spotify",
            previous: "Aplicativo de música inspirado no Spotify.",
            description: "Um site de música inspirado no Spotify. Este site é totalmente responsivo, desenvolvido em React com design completamente idealizado e criado por mim.",
            repo:"https://github.com/joaonevescampos/myspotify",
            deploy: "https://myspotify-eta.vercel.app/"
        },
        {
            src: cucaflow,
            type: "Full Stack",
            name: "Cucaflow",
            techs: [BiLogoTypescript, TbBrandNextjs, SiTailwindcss, SiPrisma, DiPostgresql, DiNodejsSmall],
            previous: "Cucaflow é um software de produtividade, auxiliando na organização de artistas.",
            description: "Cucaflow é um software de produtividade, auxiliando na organização de artistas. Organizado pela Cubos Academy que reuniu uma equipe de 6 desenvolvedores e 6 designers, simulando um ambiente profissional. As tecnologias utilizadas no projeto foram Node, Typescript, Next, Tailwind, Shadcn Ui, Nest, Prisma e PostgreSQL. Atuei como desenvolvedor frontend, fui responsável por criar as telas de cadastro, recuperação de senha e componente de lista de tarefas.",
            repo:"https://github.com/patrickcardoso-dev/cucaflow-app",
            deploy: "https://cucaflow.netlify.app/"
        },
        {
            src: mandala,
            type: "Frontend",
            techs: [DiHtml5, DiCss3, DiJavascript],
            name: "Mandalas Digitais",
            previous: "Site feito como portfólio de um arquiteto para vendas de Madalas Digitais.",
            description: "Site feito como portfólio de um arquiteto para vendas de Madalas Digitais. Com apenas 3 meses de estudos como desenvolvedor frontend, fiz o site com tecnologias básicas como HTML, CSS e JavaScript. O site tem como objetivo divulgar e vender mandalas digitais.",
            repo:"https://github.com/joaonevescampos/site-mandala",
            deploy: "https://joaonevescampos.github.io/site-mandala/"
        },
        {
            src: hotel,
            type: "Frontend",
            techs: [DiHtml5, DiCss3, DiJavascript, DiBootstrap],
            name: "Hotel Campos",
            previous: "Hotel Campos é um site de reserva de Hotéis.",
            description: "Hotel Campos é um site de reserva de Hotéis. É um projeto frontend onde tive meu primeiro contato com o Bootstrap. Usei diversos conhecimentos como Flexbox e Grid layout.",
            repo:"https://github.com/joaonevescampos/hotel-campos",
            deploy: "https://joaonevescampos.github.io/hotel-campos/"
        },
    ]

  return (
      <div className="mt-4">
        <div className="mt-4 ml-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Alguns dos meus</p>
              <h2 id="projects" className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Projetos</h2>
        </div>
          <Carousel className="max-w-xs md:max-w-none">
                <CarouselContent className="md:w-[600px]">
                    {projects.map((item, index) => (
                    <CarouselItem key={index}>
                        <div>
                        <Card className="bg-transparent">
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-sm">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    className="w-96 md:w-full"
                                />
                                        <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl my-4">{item.name}</h2>
                                        <div className="flex items-center justify-center w-96">
                                        {item.techs.map((tech) =>
                                            <div key={tech.toString()}>
                                                {
                                                    React.createElement(tech, { className: ' text-purple-color01 dark:text-purple-color03 bg-transparent w-12 h-12 rounded' })
                                                }
                                            </div>    
                                        )}
                                        </div>
                                        {
                                            !visible ? (
                                                <div className="text-center my-4">
                                                {item.previous}
                                                    <p className="m-2 font-bold" onClick={() => setVisible(true)}>ler mais...
                                                    </p>
                                                </div>
                                            ) : (
                                                    <p className="text-center my-4">{ item.description }</p>
                                            )
                                           
                                        }
                                        <div className="flex flex-col md:flex-row md:gap-4">
                                            <a href={item.deploy}>
                                            <Button
                                                variant="default"
                                                className="mb-4"
                                            >
                                                Ver projeto
                                            </Button>
                                            </a>
                                            <a href={item.repo}>
                                            <Button
                                                variant="outline"
                                                className="mb-4"
                                            >
                                                Ver código
                                            </Button>
                                           </a>
                                        </div>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                  
                </CarouselContent>
                <CarouselPrevious />
            <CarouselNext />
          </Carousel>
    </div>
  )
}
