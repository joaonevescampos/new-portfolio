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

export function Recomendations() {

    const recomendations = [
        {
            person: "Daniel",
            review: "Serviço executado com muito empenho. Dedicação e atenção fazem parte de seu metodo de criação. Sempre disposto a criar e estudar novos caminhos para solução da demanda! o cara é fera. Valeu mano! atendeu demais as nessecidades do site e suas adaptações no decorrer da elaboração."
        },
        {
            person: "Helena", review: "Adorei! Acho que você pegou bem o espírito da coisa. A ideia de portal e conexões. Ficou bem clean, elegante e profissional."
        },
    ]

  return (
      <div>
        <div className="mt-4 ml-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Melhores clientes e suas</p>
            <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01">Recomendações</h2>
        </div>
          <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {recomendations.map((item) => (
                    <CarouselItem key={recomendations.indexOf(item)}>
                        <div className="p-4">
                        <Card>
                            <CardContent className="flex flex-col border aspect-square items-center justify-center p-6">
                                
                                        <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl mt-4">{item.person}</h2>
                                        <p className="text-left my-4">{item.review}</p>
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
