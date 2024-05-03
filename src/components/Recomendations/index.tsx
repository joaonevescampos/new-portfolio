import * as React from "react";
import {FaQuoteLeft, FaQuoteRight} from "react-icons/fa"
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
            review: "Serviço executado com muito empenho. Dedicação e atenção fazem parte de seu metodo de criação. Sempre disposto a criar e estudar novos caminhos para solução da demanda! o cara é fera. Valeu mano! atendeu demais as nessecidades do site e suas adaptações no decorrer da elaboração."
        },
        {
            person: "Helena", review: "Adorei! Acho que você pegou bem o espírito da coisa. A ideia de portal e conexões. Ficou bem clean, elegante e profissional."
        },
        {
            person: "Jamile", review: "Está sendo maravilhoso trabalhar contigo. Tô muito feliz pelo teu aprendizado super rápido no frontend. E tá ficando incrível o projeto."
        },
        {
            person: "Tayanna", review: "Está sendo muito bom trabalhar com você! O projeto tá ficando incrível."
        },
        {
            person: "Patrick", review: "Eu fiquei muito aflito quando perdemos o nosso front lá atrás. Mas você foi sensacional!"
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
            <p className="text-xs">Melhores clientes e suas</p>
            <h2 id="recomendations" className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Recomendações</h2>
        </div>
          <Carousel className="w-full max-w-72 md:max-w-[600px]">
                <CarouselContent>
                    {recomendations.map((item) => (
                    <CarouselItem key={recomendations.indexOf(item)}>
                        <div className="p-4">
                        <Card>
                                    <CardContent className=" border rounded border-gray-300 p-2">
                                        
                                        <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight md:text-2xl m-4">{item.person}</h2>
                                        <FaQuoteLeft className="m-4 opacity-40 text-2xl"/>
                                        <p className="text-left m-4">{item.review}</p>
                                        <FaQuoteRight className="opacity-40 text-2xl ml-[200px] md:ml-[480px]"/>
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
