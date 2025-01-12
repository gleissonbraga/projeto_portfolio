'use client'

import { projectsBackend, projectsFrontend, projectsFullstack} from "@/lib"
import { useState } from "react"
import Title from "../title/title"
import "./style.css"
import Image from "next/image"
import { useTheme } from "../../hooks/themeContext";





const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'fullstack'>('frontend')
    const {theme} = useTheme()
    
    const wordTitle = activeTab.charAt(0).toUpperCase() + activeTab.slice(1)

    const projects = {
        frontend: projectsFrontend,
        backend: projectsBackend,
        fullstack: projectsFullstack
    }

    const buttonStyles = (tab: 'frontend' | 'backend' | 'fullstack') => 
        theme === 'light' ? `font-DM_Sans px-2 py-1 uppercase rounded-full transition-all duration-300 ${activeTab === tab ? ' w-[8rem] text-[#D62828]' : 'bg-white w-[3rem] text-gray-700'}` : `font-DM_Sans px-2 py-1 uppercase rounded-full transition-all duration-300 ${activeTab === tab ? ' w-[8rem] text-[#546aab] bg-[#333333]' : 'bg-[#333333] w-[3rem] text-white'}`
       


    const buttonText = (tab: 'frontend' | 'backend' | 'fullstack') => {
        if (activeTab === tab) {
            return tab.charAt(0).toUpperCase() + tab.slice(1);
        }
        switch (tab) {
            case 'frontend':
                return 'FE';
            case 'backend':
                return 'BE';
            case 'fullstack':
                return 'FS';
            default:
                return '';
        }
    };
    

    return(
        
        
        <section id="projects" className={`
        ${ theme === "light" ? "bg-[#FFFFFF]" : "bg-[#292626]"}
        ${ theme === 'dark' ? "bg-[#292626]" : "bg-[#FFFFFF]"}
        min-h-[43rem] 
        pt-14 
        relative 
        flex 
        flex-col 
        items-center`}
       
        >

            <Title title={wordTitle} />

            <div className={`
            w-[8rem] 
            absolute 
            top-60 
            left-4 
            rounded-b-lg 
            flex 
            flex-col 
            items-center 
            justify-center 
            font-[500]`}
           >
                <div className="
                flex 
                flex-col 
                justify-center 
                items-center 
                gap-8">
                    <button className={buttonStyles('frontend')} style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} onClick={() => setActiveTab('frontend')}>{buttonText('frontend')}</button>
                    <button className={buttonStyles('backend')} style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} onClick={() => setActiveTab('backend')}>{buttonText('backend')}</button>
                    <button className={buttonStyles('fullstack')} style={{boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px"}} onClick={() => setActiveTab('fullstack')}>{buttonText('fullstack')}</button>
                </div>
            </div>
            <div className=" w-full min-h-[500px]  mt-5 flex justify-end ">
                <div className=" w-[90%] h-[auto] flex gap-10 flex-wrap justify-center p-5  ">
                    {projects[activeTab].map((project) => (
                        <div key={project.id} className="
                        w-[520px] 
                        h-[200px]
                        flex 
                        gap-4
                        "
                        >
                            <div className={`
                            ${theme === 'light' ? "text-black" : "text-white"}
                            ${theme === 'dark' ? "text-white" : "text-black"}
                            w-[50%] 
                            flex 
                            justify-center 
                            items-center 
                            flex-col 
                            gap-5 `}
                          
                            >
                                <h4 className="uppercase font-bold">{project.name}</h4>
                                <div className="text-center">
                                    <span className=" text-center font-semibold">Techs</span>
                                        <div className="flex flex-wrap gap-2 mt-6">
                                            {project.techs.map((tech) => (
                                                <div key={tech.idSvg}>
                                                    <Image src={tech.svg} alt="Icon" width={34} height={34}/>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                <div className="flex items-center justify-center flex-row gap-4 w-full">
                                    <a href={project.repository} className={`
                                    ${theme === 'light' ? "hover:text-[#d82626]" : "hover:text-[#546aab]  bg-[#333333]"}
                                    ${theme === 'dark' ? "hover:text-[#546aab]  bg-[#333333]" : "hover:text-[#d82626]"}
                                    w-[42%] 
                                    h-10  
                                    rounded-2xl 
                                    flex 
                                    justify-center 
                                    items-center 
                                    gap-2 
                                    hover:scale-[1.06] 
                                    transition-transform 
                                    duration-500 
                                    `}
                                    
                                     style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}} target="_blank" >Github <img src="svg/github-black.svg" alt="" className={`
                                        ${theme === 'light' ? "" : "filter invert"}
                                        ${theme === 'dark' ? "filter invert" : ""}
                                        w-6 
                                        h-6`}/>
                                    </a>
                                    <a href={project.deploy} className={`
                                    ${theme === 'light' ? "hover:text-[#d82626]" : "hover:text-[#546aab]  bg-[#333333]"}
                                    ${theme === 'dark' ? "hover:text-[#546aab] bg-[#333333]" : "hover:text-[#d82626]"}
                                    w-[42%] 
                                    h-10  
                                    rounded-2xl 
                                    flex 
                                    justify-center 
                                    items-center 
                                    gap-2 
                                    hover:scale-[1.06] 
                                    transition-transform 
                                    duration-500 
                                    `} style={{ boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px"}} target="_blank" >Deploy <img src="svg/deploy.svg" alt="" className={`
                                    ${theme === 'light' ? "" : "filter invert"}
                                    ${theme === 'dark' ? "filter invert" : ""}
                                    w-6 
                                    h-6`}
                                   
                                    /></a>
                                </div>
                            </div>
                            <div className="w-[44%] rounded-3xl">
                                <img src={project.image} alt="" className={`
                                rounded-3xl 
                                w-full 
                                h-full`}
                                 
                                />
                            </div>
                        </div>
                    ))}

                </div>
               

            </div>
        </section>

    )
}

export default Projects