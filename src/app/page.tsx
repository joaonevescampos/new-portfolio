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
        <div className="absolute top-[1450px] md:top-[1500px] rounded-tl-[80px] rounded-br-[80px] rounded -z-10 w-screen h-[800px] bg-purple-color01 bg-opacity-20 ">
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
