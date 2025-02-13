"use client"

import { skillList } from "@/lib"
import Title from "../title/title"
import { useTheme } from "../../hooks/themeContext";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export function Skills(){
    const {theme} = useTheme()
    const { t } = useTranslation()

    const newTitle = t('skillsLanguage.title')

    return (
        <section id="skill" className={`
        ${ theme === "light" ? "bg-[#FFFFFF] text-[#000000] " : "bg-[#1d1d1d]"}
        ${ theme === 'dark' ? "bg-[#1d1d1d] text-[#fffffff]" : "bg-[#FFFFFF]"}
        pt-14 
        flex 
        items-center 
        flex-col
        `}
        >
            <Title title={newTitle} />
            <ul 
                className={`
                    mt-5 
                    w-[90%] 
                    flex-wrap 
                    flex 
                    p-8
                    gap-14
                    min-[320px]:gap-4
                    min-[320px]:justify-center
                    min-[320px]:w-full
                    md:justify-normal
                    md:gap-14
                    md:w-[90%]
                    `}
                    
                >
                {skillList.map((skill) => (
                    <li key={skill.id} className={`
                    ${theme === 'light' ? "border-[#D62828]" : "border-[#546aab] bg-[#333333]"}
                    ${theme === 'dark' ? "border-[#546aab] bg-[#333333]" : "border-[#D62828]"}
                    
                    w-[120px] 
                    h-[120px] 
                    rounded-tl-3xl 
                    border-b-4 
                    flex 
                    flex-col 
                    justify-center 
                    items-center 
                    gap-2 
                    hover:scale-[1.1] 
                    cursor-pointer 
                    transition-transform 
                    duration-500 
                    ease-in-out
                    `}
                   
                    style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}}>
                        <span className={`
                        ${theme === 'light' ? "text-black" : ""}
                        ${theme === 'dark' ? "text-white" : ""}
                        
                         font-medium 
                         font-DM_Sans 
                         text-[1.2rem]`}
                        >{skill.name}</span>
                        <Image src={skill.image} width={14} height={14} alt="" className="
                        w-14 
                        h-14"
                         />
                    </li>
                ))}
            </ul>
        </section>
    )
}