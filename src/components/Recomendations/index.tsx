import * as React from "react";
import {FaQuoteLeft, FaQuoteRight, FaStar} from "react-icons/fa"
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import ilustration from "../../assets/Big Shoes - Person Sitting with Plants.png";
import Image from "next/image";

export function Recomendations() {

    const recomendations = [
    {
            person: "Fernando",
            review: "Desejo muito sucesso na sua jornada. Você é um profissional dedicado, respeitoso e persistente, qualidades que certamente o levarão longe. Lembre-se sempre: a vida na área de programação não é uma corrida de velocidade, mas uma maratona. Continue firme no seu caminho! Tamo junto!",
            relation: "Colega de trabalho",
            profission: "Desenvolvedor Frontend - Mundiware"
        },
        {
            person: "Vinicius",
            review: "[...] Você foi um dos meus melhores. Mas boa sorte na sua caminhada meu amigo. Foi um prazer trabalhar com você. Desejo todo sucesso do mundo pra ti.",
            relation: "Colega de trabalho",
            profission: "Desenvolvedor Frontend - Mundiware"
        },
        {
            person: "Daniel",
            review: "Serviço executado com muito empenho. Dedicação e atenção fazem parte de seu metodo de criação. Sempre disposto a criar e estudar novos caminhos para solução da demanda! o cara é fera. Valeu mano! atendeu demais as nessecidades do site e suas adaptações no decorrer da elaboração.",
            relation: "amigo",
            profission: "arquiteto."
        },
        {
            person: "Helena",
            review: "Adorei! Acho que você pegou bem o espírito da coisa. A ideia de portal e conexões. Ficou bem clean, elegante e profissional.",
            relation: "amiga",
            profission: "terapeuta e psicóloga."
        },
        {
            person: "Jamile",
            review: "Está sendo maravilhoso trabalhar contigo. Tô muito feliz pelo teu aprendizado super rápido no frontend. E tá ficando incrível o projeto.",
            relation: "colega de trabalho",
            profission: "Desenvolvedora frontend."
        },
        {
            person: "Tayanna",
            review: "Está sendo muito bom trabalhar com você! O projeto tá ficando incrível.",
            relation: "colega de trabalho",
            profission: "Desenvolvedora frontend."
        },
        {
            person: "Patrick",
            review: "Eu fiquei muito aflito quando perdemos o nosso front lá atrás. Mas você foi sensacional!",
            relation: "colega de trabalho",
            profission: "Desenvolvedor full stack."
        },
    ]

  return (
      <div className="flex flex-col items-center justify-center w-full">
          <Image
                src={ilustration}
                alt="ilustração"
                className='m-auto w-52'
            />
        <div className="mt-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Colegas e clientes e suas</p>
            <h2 id="recomendations" className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Recomendações</h2>
        </div>
          <Carousel className="w-full p-8 md:max-w-[600px] lg:max-w-[800px] ">
                <CarouselContent>
                    {recomendations.map((item) => (
                    <CarouselItem key={recomendations.indexOf(item)}>
                        <div className="w-full">
                        <Card>
                                    <CardContent className="border rounded border-gray-300 p-2">
                                        <div className="flex justify-end w-full pr-8 text-gray-700 dark:text-gray-300 m-4">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <FaQuoteLeft className="m-4 opacity-40 text-2xl" />
                                        <p className="text-left m-4">{item.review}</p>
                                        <div className="flex justify-end w-full pr-4">
                                        <FaQuoteRight className="flex justify-end opacity-40 text-2xl"/>
                                        </div>
                                        <div className="my-4">
                                        <h2 className="scroll-m-20 font-extrabold tracking-tight text-sm ml-4">{item.person}</h2>
                                        <p className="text-xs ml-4 text-gray-500">{item.relation}</p>
                                        <p className="text-xs ml-4 text-gray-500">{item.profission}</p>
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
