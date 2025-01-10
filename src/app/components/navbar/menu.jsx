'use client'


import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Menu() {
    const [theme, setTheme] = useState('light')
    const [isDropDownOpen, setIsDropDownOpen] = useState(false)


    const toggleTheme = (newTheme) => {
        setTheme(newTheme)
        setIsDropDownOpen(false)
    }


    return (
        <>
            <header className={`
                font-poppins 
                h-[3.31rem] 
                flex 
                justify-around 
                ${theme === "light" ? "bg-[#FFFFFF] text-[#000000] " : "bg-black"}

                ${ theme === 'dark' ? "bg-black text-[#fffffff]" : "bg-[#FFFFFF]"}
                
                items-center 
                
                shadow-md 
                p-4
                fixed 
                top-0 
                left-1/2 
                transform 
                -translate-x-1/2 
                w-[96%]
                rounded-full
                z-50
            `}>
                <div className="">
                    <Link href="/" className="text-xl font-bold uppercase font-poppins tracking-wider pr-1">
                        <span className={`
                            ${theme === 'light' ? "text-[#D62828]" : "text-[#546aab] "}
                            ${theme === 'dark' ? "text-[#546aab] " : "text-[#D62828]" }
                            font-extrabold`}
                            >   
                                &lt;
                        </span>
                                Gleisson Braga
                        <span className={`
                            ${theme === 'dark' ? "text-[#546aab]" : "text-[#D62828]" }
                            ${theme === 'dark' ? "text-[#546aab] " : "text-[#D62828]" }
                            font-extrabold 
                            uppercase 
                            tracking-wider 
                            text-xl
                        `}>
                            /&gt;
                        </span>
                    </Link>
                </div>
                <nav className="flex uppercase gap-[4rem] font-semibold" >
                    <Link
                        href="/"
                        className={` 
                           ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                           ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}
                            hover:underline 
                            hover:underline-offset-4 
                            hover:opacity-85`}
                    >
                        Início
                    </Link>
                    <Link
                        href="#about-me"
                        className={` 
                            ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                            ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                             hover:underline 
                             hover:underline-offset-4 
                             hover:opacity-85`}
                    >
                        Sobre
                    </Link>
                    <Link
                        href="#skill"
                        className={` 
                            ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                            ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                             hover:underline 
                             hover:underline-offset-4 
                             hover:opacity-85`}
                    >
                        Habilidade
                    </Link>
                    <Link
                        href="#projects"
                        className={` 
                            ${theme === 'dark' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                            ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                             hover:underline 
                             hover:underline-offset-4 
                             hover:opacity-85`}
                    >
                        Projetos
                    </Link>
                </nav>
                <div className="flex gap-4 tracking-wider">
                    <a href="https://github.com/gleissonbraga" target="_blank">
                        <Image src="svg/github.svg" alt="Icon" width={24} height={24} className={`
                        ${theme === 'light' ? "filter invert" : ""}
                        ${theme === 'dark' ? "" : "filter invert"}
                        
                        hover:scale-[1.1] 
                        delay-100 
                        transition-transform 
                        duration-300 
                        ease-in-out`}/>
                    </a>
                    <a href="https://www.linkedin.com/in/gleisson-braga/" target="_blank">
                        <Image src="svg/linkedin.svg" alt="Icon" width={24} height={24} className={`
                        ${theme === 'light' ? "filter invert" : ""}
                        ${theme === 'dark' ? "" : "filter invert"}
                        
                        hover:scale-[1.1] 
                        delay-100 
                        transition-transform 
                        duration-300 
                        ease-in-out`}/>
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bragagleisson@gmail.com" target="_blank">
                        <Image src="svg/email.svg" alt="Icon" width={24} height={24} className={`
                        ${theme === 'light' ? "filter invert" : ""}
                        ${theme === 'dark' ? "" : "filter invert"}
                        hover:scale-[1.1] 
                        delay-100 
                        transition-transform 
                        duration-300 
                        ease-in-out`}/>
                    </a>
                </div>
                <div className="flex gap-3 items-center">
                    {/* <Image src="svg/brasil.svg" alt="Icon" width={24} height={24} className="rounded-full border-solid border p-[0.4rem] border-[#B0AEAE] w-8 h-8"/> */}
                    <button onClick={() => setIsDropDownOpen(!isDropDownOpen)}>
                        <Image src={theme === 'light' ? "svg/sol.svg" : "svg/lua.svg"} 
                            alt="Icon" 
                            width={24} 
                            height={24} 
                            className={`
                                ${theme === 'light' ? "hover:bg-gray-100" : "filter invert"}
                                ${theme === 'dark' ? "filter invert hover:bg-gray-300" : ""}
                                hover:scale-[1.1]
                                duration-500
                                trasition
                                rounded-full 
                                border-solid 
                                border p-[0.4rem] 
                                border-[#B0AEAE] 
                                w-8 
                                h-8
                                `} 
                                />
                    </button>
                    

                    { isDropDownOpen && (
                        <div className={`
                        
                        ${theme === 'light' ? " bg-white" : ""}
                        ${theme === 'dark' ? " bg-black" : ""}
                        
                         absolute 
                         top-full 
                         right-20  
                         w-24
                         opacity-80
                         rounded-lg 
                         shadow-lg
                         p-2
                         gap-2
                         flex
                         flex-col
                         justify-center
                         items-center
                         `}>
                                                            
                            <button onClick={() => toggleTheme('light')} className={`
                                ${theme === 'light' ? "" : "filter invert"}
                                ${theme === 'dark' ? "filter invert" : ""}
                                text-black
                                w-full 
                                text-start
                                flex  
                                items-center 
                                gap-2`}>
                                <img src="svg/sol.svg" alt="" className="w-4"/>
                                Claro
                            </button>
                            <button onClick={() => toggleTheme('dark')} className={`
                                ${theme === 'light' ? "" : "filter invert"}
                                ${theme === 'dark' ? "filter invert" : ""}
                                text-black
                                w-full 
                                text-start
                                flex  
                                items-center 
                                gap-2`}>
                                <img src="svg/lua.svg" alt="" className="w-4"/>
                                Escuro
                            </button>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}


