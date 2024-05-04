import React from 'react';
import {
    DiJavascript,
    DiHtml5,
    DiCss3,
    DiReact,
    DiBootstrap,
    DiNodejsSmall,
    DiPostgresql,
    DiGitBranch,
    DiGithubBadge,
    DiPython
} from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import ilustration from "../../assets/Big Shoes - Discussion.png";
import Image from "next/image";

export function Tecnologies() {
    const devIcons = [
       { tagIcon: DiJavascript, name: "JavaScript"},
       { tagIcon: DiHtml5, name: "HTML" },
       { tagIcon: DiCss3, name: "CSS"},
       { tagIcon: DiReact, name: "React" },
       { tagIcon: TbBrandNextjs, name: "Next" },
        {tagIcon: SiTailwindcss, name: "Tailwind"},
       { tagIcon: DiBootstrap, name:"Bootstrap" },
       { tagIcon: DiNodejsSmall, name:"Node JS" },
       { tagIcon: DiPostgresql, name: "PostgreSQL"},
       { tagIcon: DiGitBranch, name:"Git" },
       {tagIcon:  DiGithubBadge, name:"Github" },
       { tagIcon: DiPython, name:"Python" },
    ]
    return (
        <div>
            <div>
            <div className="mt-4 ml-4 flex flex-col justify-center items-center ">
                <p className="text-xs">Domino as seguintes</p>
                <h2 id='tecnologies' className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01 dark:text-purple-color03">Tecnologias</h2>
            </div>
        </div>
            <div className='grid md:grid-cols-4 md:gap-4 grid-cols-3 gap-5 m-8'>
            {
                devIcons.map((icon) => {
                    return (
                        <div key={icon.name} className='flex items-center justify-center flex-col border-2 p-2'>
                            {
                                React.createElement(icon.tagIcon, { className: 'col-span-1 text-purple-color01 dark:text-purple-color04 bg-transparent w-12 h-12 rounded' })
                            }
                            <p className='text-xs text-center font-semibold'>{ icon.name }</p>
                        </div>
                )
            })}
            </div>
            <Image
                src={ilustration}
                alt="ilustração"
                className='m-auto w-52'
            />
        </div> 
    )
}
