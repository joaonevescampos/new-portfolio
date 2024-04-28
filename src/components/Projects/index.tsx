"use client";
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
    const [visible, setVisible] = React.useState(false)
    const projects = [
        
        {
            src: newboard,
            name: "New Board",
            previous: "New Board é um software que gerencia tarefas, similar ao Trello.",
            description: "New Board é um software que gerencia tarefas, similar ao Trello. Desenvolvido por uma equipe de cinco desenvolvedores liderados por mim, este projeto utiliza as tecnologias: React, CSS, Node e PostgreSQL. Atuei como desenvolvedor frontend e designer, criando as telas de Home, Boards, Account entre outras.",
            code:"https://github.com/joaonevescampos/new-board",
            deploy: "#"
        },
        {
            src: cucaflow,
            name: "Cucaflow",
            previous: "Cucaflow é um software de produtividade, auxiliando na organização de artistas.",
            description: "Cucaflow é um software de produtividade, auxiliando na organização de artistas. Organizado pela Cubos Academy que reuniu uma equipe de 6 desenvolvedores e 6 designers, simulando um ambiente profissional. As tecnologias utilizadas no projeto foram Node, Typescript, Next, Tailwind, Shadcn Ui, Nest, Prisma e PostgreSQL. Atei como desenvolvedor frontend, fui responsável por criar as telas de cadastro, recuperação de senha e componente de lista de tarefas.",
            code:"https://github.com/patrickcardoso-dev/cucaflow-app",
            deploy: "https://cucaflow.netlify.app/"
        },
        {
            src: mandala,
            name: "Mandalas Digitais",
            previous: "Este foi o primeiro trabalho freelancer que fiz para um amigo arquiteto.",
            description: "Este foi o primeiro trabalho freelancer que fiz para um amigo arquiteto com apenas 3 meses de estudos como desenvolvedor frontend. Fiz o site dele com tecnologias básicas como HTML, CSS e JavaScript. O site tem como objetivo divulgar e vender mandalas digitais.",
            code:"https://github.com/joaonevescampos/site-mandala",
            deploy: "https://joaonevescampos.github.io/site-mandala/"
        },
        {
            src: hotel,
            name: "Hotel Campos",
            previous: "Hotel Campos é um projeto frontend onde tive meu primeiro contato com o Bootstrap.",
            description: "Hotel Campos é um projeto frontend onde tive meu primeiro contato com o Bootstrap. Usei bastante conhecimentos como Flexbox e Grid layout.",
            code:"https://github.com/joaonevescampos/hotel-campos",
            deploy: "https://joaonevescampos.github.io/hotel-campos/"
        },
    ]

  return (
      <div className="mt-4">
        <div className="mt-4 ml-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Alguns dos meus</p>
              <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Projetos</h2>
        </div>
          <Carousel className="max-w-xs md:max-w-none ">
                <CarouselContent className="md:w-[600px]">
                    {projects.map((item, index) => (
                    <CarouselItem key={index}>
                        <div>
                        <Card className="bg-transparent ">
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-sm">
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    className="w-96 md:w-[500px]"

                                        />
                                        <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mt-4">{item.name}</h2>
                                        {/* <p className="text-center my-4">{item.description}</p> */}
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
                                            <a href={item.code}>
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
