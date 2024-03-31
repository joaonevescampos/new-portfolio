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
        { src: cucaflow, name: "Cucaflow", description: "hdjhsjd jdsnjdskj sdjdjsdkjs djsnskjdksjd djsndksnkdsn dksndks skdnskjdn odkoskdls dsjkdjsk dksdksjdnsk  dksdk  dskjnd djd jdnd jd ksdn " },
        { src: newboard, name: "New Board", description: "hdjhsjd jdsnjdskj sdjdjsdkjs djsnskjdksjd djsndksnkdsn dksndks skdnskjdn odkoskdls dsjkdjsk dksdksjdnsk  dksdk  dskjnd djd jdnd jd ksdn " },
        { src: mandala, name: "Mandala", description: "hdjhsjd jdsnjdskj sdjdjsdkjs djsnskjdksjd djsndksnkdsn dksndks skdnskjdn odkoskdls dsjkdjsk dksdksjdnsk  dksdk  dskjnd djd jdnd jd ksdn " },
        { src: hotel, name: "Hotel Campos", description: "hdjhsjd jdsnjdskj sdjdjsdkjs djsnskjdksjd djsndksnkdsn dksndks skdnskjdn odkoskdls dsjkdjsk dksdksjdnsk  dksdk  dskjnd djd jdnd jd ksdn " },
    ]

  return (
      <div className="mt-4">
        <div className="mt-4 ml-4 flex flex-col justify-center items-center ">
            <p className="text-xs">Alguns dos meus</p>
            <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01">Projetos</h2>
        </div>
          <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {projects.map((item) => (
                    <CarouselItem key={projects.indexOf(item)}>
                        <div className="p-1">
                        <Card className="bg-transparent">
                            <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
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
