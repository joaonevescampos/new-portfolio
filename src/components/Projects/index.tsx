"use client"
import * as React from "react";
import Image from "next/image";
import cucaflow from "../../assets/project-cucaflow.png";
import newboard from "../../assets/project-newboard.png";
import mandala from "../../assets/project-mandala.png";
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

export function Projects() {

    const projects = [
        {
            src: cucaflow,
            name: "Cucaflow",
            description: "Cucaflow é um software de produtividade, auxiliando na organização pessoal de artistas. Organizado pela Cubos Academy que através do HandsOn, reuniu uma equipe de seis desenvolvedores e seis designers e simulou um ambiente profissional. As tecnologias utilizadas no projeto foram Node, Typescript, Next, Tailwind, Shadcn Ui, Nest, Prisma e PostgreSQL. Atuando neste projeto como desenvolvedor frontend, fui responsável por criar as telas de cadastro, recuperação de senha e componente de lista de tarefas.",
        },
        {
            src: newboard,
            name: "New Board",
            description: "New Board é um software que gerencia tarefas, similar ao Trello. Desenvolvido por uma equipe de cinco desenvolvedores liderados por mim, este projeto utiliza as tecnologias: React, CSS, Node e PostgreSQL. Atuei como desenvolvedor frontend e designer, criando as telas de Home, Boards, Account entre outras."
        },
        {
            src: mandala,
            name: "Mandalas Digitais",
            description: "Este foi o primeiro trabalho freelancer que fiz para um amigo arquiteto com apenas 3 meses de estudos como desenvolvedor frontend. Fiz o site dele com tecnologias básicas como HTML, CSS e JavaScript. O site tem como objetivo divulgar e vender mandalas digitais."
        },
        {
            src: hotel,
            name: "Hotel Campos",
            description: "Hotel Campos é um projeto frontend básico individual onde tive meu primeiro contato com o Bootstrap. Usei bastante conhecimentos como Flexbox e Grid layout."
        },
    ]

  return (
      <div className="mt-4">
        <div className="mt-4 ml-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Alguns dos meus</p>
              <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01">Projetos</h2>
        </div>
          <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {projects.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                        <Card className="bg-transparent">
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-sm">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    className="w-96"

                                        />
                                        <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mt-4">{item.name}</h2>
                                        <p className="text-center my-4">{item.description}</p>
                                        
                                        <Button
                                            variant="default"
                                            className="mb-4"
                                        >
                                            Ver projeto
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="mb-4"
                                        >
                                            Ver código
                                        </Button>
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
