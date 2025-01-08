'use client'

import { projectsBackend, projectsFrontend, projectsFullstack} from "@/lib"
import { useState } from "react"
import Title from "../title/title"
import "./style.css"
import Image from "next/image"




const Projects: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'fullstack'>('fullstack')
    
    const selectFrontend = ` ${activeTab === 'frontend' ? 'bg-[#EEEAEA] border-b-2 border-[#D62828]' : 'bg-white'}`
    const selectBackend = ` ${activeTab === 'backend' ? 'bg-[#EEEAEA] border-b-2 border-[#D62828]' : 'bg-white'}`
    const selectFullstack = ` ${activeTab === 'fullstack' ? 'bg-[#EEEAEA] border-b-2 border-[#D62828]' : 'bg-white'}`
    const teste = activeTab.charAt(0).toUpperCase() + activeTab.slice(1)

    const projects = {
        frontend: projectsFrontend,
        backend: projectsBackend,
        fullstack: projectsFullstack
    }

    

    return(

        
        <section id="projects" className="pt-14 relative h-[700px] flex flex-col items-center">

            <Title title={teste} />

            <div className="w-[8rem] h-[10rem] absolute top-12 left-14 rounded-b-lg flex flex-col items-center justify-center  text-black font-[500]" style={{boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"}}>
                <h3 className="w-[100%] h-[40%] mb-4 font-DM_Sans flex items-center justify-center">Projetos</h3>
                <div className="h-[60%]">
                <button className={`w-[100%] font-DM_Sans px-1 py-1 ${selectFrontend}`} onClick={() => setActiveTab('frontend')}>Frontend</button>
                <button className={`w-[100%] font-DM_Sans px-1 py-1 ${selectBackend}`} onClick={() => setActiveTab('backend')}>Backend</button>
                <button className={`w-[100%] font-DM_Sans px-1 py-1 rounded-b-lg ${selectFullstack}`} onClick={() => setActiveTab('fullstack')}>Fullstack</button>
                </div>
            </div>
            <div className="bg-orange-500 w-full h-[500px] mt-5 flex justify-end">
                <div className="bg-blue-600 w-[86%] h-[500px] ">
                    {projects[activeTab].map((project, index) => (
                        <div key={project.id}>
                            
                            <div>
                                <h4>{project.name}</h4>
                                <div>
                                    <span>Techs</span>
                                    {project.techs.map((tech) => (
                                        <Image src={tech.svg} alt="Icon" width={34} height={34}/>
                                    ))}
                                </div>
                                <div>
                                    <a href={project.repository}>Github</a>
                                    <a href={project.deploy}>Deploy</a>
                                </div>
                            </div>
                            <div>
                                <img src={project.image} alt="" />
                            </div>
                        </div>
                    ))}

                </div>


            </div>
        </section>

    )
}

export default Projects