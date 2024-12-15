import { Header } from "@/components/Header";
import { Introduction } from "../components/Introduction";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Recomendations } from "@/components/Recomendations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Tecnologies } from "@/components/Tecnologies";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-center">
        <div className="absolute top-[930px] md:top-[650px] md:rounded-tl-[300px] md:rounded-br-[300px] rounded-tl-[100px] rounded-br-[100px] rounded -z-10 w-screen md:h-[1930px] h-[2000px] bg-purple-color01 bg-opacity-20 ">
        </div>
        <Introduction />
        <Tecnologies/>
        <Skills />
        <Projects />
        <Recomendations />
        <Contact />
        <Footer />
      </main>
    </>
    
  );
}
