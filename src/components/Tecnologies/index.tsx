import React from 'react';
import {
    DiJavascript1,
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

export function Tecnologies() {
    const devIcons = [
       { tagIcon: DiJavascript1, name: "JavaScript"},
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
                <h2 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-2xl text-purple-color01">Tecnologias</h2>
            </div>
        </div>
            <div className='grid lg:grid-cols-4 lg:gap-4 grid-cols-3 gap-5 m-8'>
            {
                devIcons.map((icon) => {
                    return (
                        <div className='flex items-center justify-center flex-col border-2 p-2'>
                            {
                                React.createElement(icon.tagIcon, { className: 'col-span-1 text-purple-color01 bg-white w-12 h-12 rounded' })
                            }
                            <p className='text-xs text-center font-semibold'>{ icon.name }</p>
                        </div>
                )
            })}
            </div>
        </div> 
    )
}
