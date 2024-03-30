import Header from "@/components/Header";
import Introduction from "../components/Introduction";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="flex flex-col items-center justify-center">
        <Introduction />
        <Skills />
        <Projects />
      </main>
    </>
    
  );
}
