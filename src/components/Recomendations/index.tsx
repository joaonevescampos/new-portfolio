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
            profission: "desenvolvedora frontend."
        },
        {
            person: "Tayanna",
            review: "Está sendo muito bom trabalhar com você! O projeto tá ficando incrível.",
            relation: "colega de trabalho",
            profission: "desenvolvedora frontend."
        },
        {
            person: "Patrick",
            review: "Eu fiquei muito aflito quando perdemos o nosso front lá atrás. Mas você foi sensacional!",
            relation: "colega de trabalho",
            profission: "desenvolvedor full stack."
        },
    ]

  return (
      <div className="flex flex-col items-center justify-center">
          <Image
                src={ilustration}
                alt="ilustração"
                className='m-auto w-52'
            />
        <div className="mt-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Colegas e clientes e suas</p>
            <h2 id="recomendations" className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Recomendações</h2>
        </div>
          <Carousel className="w-full max-w-72 md:max-w-[600px]">
                <CarouselContent>
                    {recomendations.map((item) => (
                    <CarouselItem key={recomendations.indexOf(item)}>
                        <div className="p-4">
                        <Card>
                                    <CardContent className=" border rounded border-gray-300 p-2">
                                        <div className="flex justify-end w-52 md:w-[500px] text-gray-700 m-4">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <FaQuoteLeft className="m-4 opacity-40 text-2xl" />
                                        <p className="text-left m-4">{item.review}</p>
                                        <FaQuoteRight className="opacity-40 text-2xl ml-[200px] md:ml-[480px]"/>
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
