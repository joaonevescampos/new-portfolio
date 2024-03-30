import Header from "@/components/Header";
import Introduction from "../components/Introduction";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Recomendations } from "@/components/Recomendations";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-center">
        <Introduction />
        <Skills />
        <Projects />
        <Recomendations />
        <Contact />
      </main>
    </>
    
  );
}
