import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { DiCss3, DiGit, DiGithub, DiHtml5, DiJsBadge, DiReact, DiNodejsSmall, DiPostgresql } from "react-icons/di"
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiGimp } from "react-icons/si"

  
export function Skills() {

    return (
        <div className="px-8 w-full">
            <div className="m-4 flex flex-col justify-center items-center">
                <p className="text-xs">Algumas das minhas</p>
                <h2 id="skills" className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Habilidades</h2>
            </div>

        <Accordion type="single" collapsible className="md:flex md:justify-center">
        <AccordionItem value="frontend">
          <AccordionTrigger>Front-end</AccordionTrigger>
            <AccordionContent>
            <p className="mb-4 w-full">Possuo um amplo conhecimento prático das principais tecnologias requeridas por um desenvolvedor frontend, com vasto domínio principalmente das tecnologias HTML, CSS e React.</p>     
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[87%]">
                <div className="flex items-center gap-2">
                    <DiHtml5 className="text-xl"></DiHtml5>
                    <p className="font-bold text-xs">HTML</p>
                </div>
                <p className="font-bold text-xs">87%</p>            
            </div>
                        
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[82%]">
                <div className="flex items-center gap-2">
                    <DiCss3 className="text-xl"></DiCss3>
                    <p className="font-bold text-xs">CSS</p>
                </div>
                <p className="font-bold text-xs">82%</p>            
            </div> 

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[68%]">
                <div className="flex items-center gap-2">
                    <DiJsBadge className="text-xl"></DiJsBadge>
                    <p className="font-bold text-xs">JavaScript</p>
                </div>
                <p className="font-bold text-xs">68%</p>            
            </div>
                        
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[64%]">
                <div className="flex items-center gap-2">
                    <SiTypescript className="text-xl"></SiTypescript>
                    <p className="font-bold text-xs">TypeScript</p>
                </div>
                <p className="font-bold text-xs">64%</p>            
            </div>

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[78%]">
                <div className="flex items-center gap-2">
                    <DiReact className="text-xl"></DiReact>
                    <p className="font-bold text-xs">React</p>
                </div>
                <p className="font-bold text-xs">78%</p>            
            </div>

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[71%]">
                <div className="flex items-center gap-2">
                    <SiNextdotjs className="text-xl"></SiNextdotjs>
                    <p className="font-bold text-xs">Next</p>
                </div>
                <p className="font-bold text-xs">71%</p>            
            </div>

             <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[74%]">
                <div className="flex items-center gap-2">
                    <SiTailwindcss className="text-xl"></SiTailwindcss>
                    <p className="font-bold text-xs">Tailwind</p>
                </div>
                <p className="font-bold text-xs">74%</p>            
            </div>
                        
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[78%]">
                <div className="flex items-center gap-2">
                    <DiGit className="text-xl"></DiGit>
                    <p className="font-bold text-xs">Git</p>
                </div>
                <p className="font-bold text-xs">78%</p>            
                        </div>

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[83%]">
                <div className="flex items-center gap-2">
                    <DiGithub className="text-xl"></DiGithub>
                    <p className="font-bold text-xs">Github</p>
                </div>
                <p className="font-bold text-xs">83%</p>            
            </div>            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="backend">
        <AccordionTrigger>
            Backend
        </AccordionTrigger>
          <AccordionContent>
            <p className="mb-4 w-full">
                Apesar de focar mais em aprimorar minhas habilidades como desenvolvedor frontend, também possuo domínio básico de desenvolvimento backend. Principais tecnologias que utilizo são Node JS e PostgreSQL.
            </p>     
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[87%]">
                <div className="flex items-center gap-2">
                    <DiNodejsSmall className="text-xl"></DiNodejsSmall>
                    <p className="font-bold text-xs">Node JS</p>
                </div>
                <p className="font-bold text-xs">87%</p>            
            </div>
                        
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[82%]">
                <div className="flex items-center gap-2">
                    <DiPostgresql className="text-xl"></DiPostgresql>
                    <p className="font-bold text-xs">PostgreSQL</p>
                </div>
                <p className="font-bold text-xs">82%</p>            
            </div> 
                        
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[78%]">
                <div className="flex items-center gap-2">
                    <DiGit className="text-xl"></DiGit>
                    <p className="font-bold text-xs">Git</p>
                </div>
                <p className="font-bold text-xs">78%</p>            
                        </div>

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[83%]">
                <div className="flex items-center gap-2">
                    <DiGithub className="text-xl"></DiGithub>
                    <p className="font-bold text-xs">Github</p>
                </div>
                <p className="font-bold text-xs">83%</p>            
            </div>            
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="design">
            <AccordionTrigger>
                Design      
            </AccordionTrigger>
          <AccordionContent>
          <p className="mb-4 w-full">
                Como um artista nato com criatividade de sobra, sempre me interessei por arte e design. Adquiri noções básicas de design e domínio principalmente do Figma e Canva.
            </p>     
            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[78%]">
                <div className="flex items-center gap-2">
                    <DiNodejsSmall className="text-xl"></DiNodejsSmall>
                    <p className="font-bold text-xs">Figma</p>
                </div>
                <p className="font-bold text-xs">78%</p>            
            </div>

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[93%]">
                <div className="flex items-center gap-2">
                    <DiGithub className="text-xl"></DiGithub>
                    <p className="font-bold text-xs">Canva</p>
                </div>
                <p className="font-bold text-xs">93%</p>            
            </div>

            <div className="flex justify-between items-center gap-4 rounded p-2 mb-2 text-white bg-purple-color01 w-[73%]">
                <div className="flex items-center gap-2">
                    <SiGimp className="text-xl"></SiGimp>
                    <p className="font-bold text-xs">Gimp</p>
                </div>
                <p className="font-bold text-xs">73%</p>            
            </div>            
          </AccordionContent>
        </AccordionItem>
      </Accordion>
        </div>
    )
  }
  