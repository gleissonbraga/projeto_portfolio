"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "../../hooks/themeContext";
import { useLanguage } from "../../hooks/I18nextContext";
import { useTranslation } from "react-i18next";


export function Menu() {
    const { theme, isDropDownOpen, toggleTheme, toggleDropDown} = useTheme();

    const { currentLanguage, isDropLanguage, toggleDropLang, toggleLanguage } = useLanguage()

    const { t } = useTranslation()

    return (
        <>  
            <header className={`
                font-poppins 
                h-[3.31rem] 
                flex 
                justify-around 
                ${theme === "light" ? "bg-[#FFFFFF] text-[#000000] " : "bg-[#292626]"}
                ${ theme === 'dark' ? "bg-[#292626] text-[#fffffff]" : "bg-[#FFFFFF]"}
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
                min-[320px]:hidden
                md:flex
            `}>
                <div className="
                md:w-44
                lg:w-52
                xl:w-80
                ">
                    <Link href="/" className="
                    text-xl 
                    font-bold 
                    uppercase 
                    font-poppins 
                    tracking-wider 
                    pr-1
                    md:text-center
                    md:text-sm
                    lg:text-base
                    xl:text-xl
                    ">
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
                            md:text-sm
                            lg:text-base
                            xl:text-xl
                        `}>
                            /&gt;
                        </span>
                    </Link>
                </div>
                <nav className="
                flex 
                uppercase 
                gap-[4rem] 
                font-semibold
                md:gap-4
                lg:gap-10
                xl:gap-[4rem]
                " >
                    <Link
                        href="/"
                        className={` 
                           ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                           ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}
                            hover:underline 
                            hover:underline-offset-4 
                            hover:opacity-85
                            md:text-[0.8rem]
                            lg:text-[1rem]
                            xl:text-lg
                            `}
                    >
                        {t('nav.home')}
                    </Link>
                    <Link
                        href="#about-me"
                        className={` 
                            ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                            ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                             hover:underline 
                             hover:underline-offset-4 
                             hover:opacity-85
                             md:text-[0.8rem]
                             lg:text-[1rem]
                             xl:text-lg
                             `}
                    >
                        {t('nav.about')}
                    </Link>
                    <Link
                        href="#skill"
                        className={` 
                            ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                            ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                             hover:underline 
                             hover:underline-offset-4 
                             hover:opacity-85
                             md:text-[0.8rem]
                             lg:text-[1rem]
                             xl:text-lg`}
                    >
                        {t('nav.skills')}
                    </Link>
                    <Link
                        href="#projects"
                        className={` 
                            ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                            ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                             hover:underline 
                             hover:underline-offset-4 
                             hover:opacity-85
                             md:text-[0.8rem]
                             lg:text-[1rem]
                             xl:text-lg
                             `}
                    >
                        {t('nav.projects')}
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
                        ease-in-out
                        `}/>
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
                <div className="
                flex 
                gap-3 
                items-center">
                    <button onClick={toggleDropLang}>
                        <Image src={currentLanguage === 'pt' ? "svg/brasil.svg" : "svg/unitedStates.svg"}  
                            alt="Icon" 
                            width={24} 
                            height={24} 
                            className={`
                                ${theme === 'dark' ? "border-[#b0aeae64]" : "border-[#B0AEAE] "}
                                hover:scale-[1.1]
                                duration-500
                                trasition
                                rounded-full 
                                border-solid 
                                border 
                                p-[0.4rem] 
                                w-8 
                                h-8
                                `} 
                                />
                    </button>
                    { isDropLanguage && (
                        <div className={`
                            ${theme === 'light' ? " bg-white" : ""}
                            ${theme === 'dark' ? " bg-black" : ""}
                             absolute 
                             top-full 
                             right-28  
                             w-28
                             opacity-80
                             rounded-lg 
                             shadow-lg
                             p-1
                             gap-2
                             flex
                             flex-col
                             justify-center
                             items-center
                             md:right-16
                             lg:right-20
                             xl:right-28
                             `}>
                                                                
                                <button onClick={() => toggleLanguage(currentLanguage === 'pt' ? 'pt' : 'pt')} className={`
                                    ${theme === 'light' ? "hover:bg-[#F4F4F5]" : "hover:bg-[#393536]"}
                                    ${theme === 'dark' ? " hover:bg-[#393536] text-white" : "hover:bg-[#F4F4F5]"}
                                    p-2
                                    rounded-xl
                                    text-black
                                    w-full 
                                    text-start
                                    flex
                                    text-[0.9rem]  
                                    uppercase
                                    items-center 
                                    gap-2`}>
                                    <img src="svg/brasil.svg" alt="" className="w-4"/>
                                    pt-br
                                </button>
                                <button onClick={() => toggleLanguage(currentLanguage === 'pt' ? 'en' : 'en')} className={`
                                    ${theme === 'light' ? "hover:bg-[#F4F4F5]" : "hover:bg-[#393536] "}
                                    ${theme === 'dark' ? " hover:bg-[#393536] text-white" : "hover:bg-[#F4F4F5]"}
                                    p-2
                                    rounded-xl
                                    text-black
                                    w-full 
                                    text-start
                                    flex  
                                    text-[0.9rem]
                                    uppercase
                                    items-center 
                                    gap-2`}>
                                    <img src="svg/unitedStates.svg" alt="" className="w-4"/>
                                    en-us
                                </button>
                            </div>
                    )

                    }
                    
                    <button onClick={toggleDropDown}>
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
                                border 
                                p-[0.4rem] 
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
                         w-28
                         opacity-80
                         rounded-lg 
                         shadow-lg
                         p-1
                         gap-2
                         flex
                         flex-col
                         justify-center
                         items-center
                         md:right-8
                         lg:right-10
                         xl:right-16
                         `}>
                                                            
                            <button onClick={() => toggleTheme(theme === "light" ? "light" : "light")}  className={`
                                ${theme === 'light' ? "hover:bg-[#F4F4F5]" : "filter invert "}
                                ${theme === 'dark' ? "filter invert hover:bg-[#CCCCCC]" : ""}
                                p-2
                                rounded-xl
                                text-black
                                w-full 
                                text-start
                                flex  
                                items-center 
                                gap-2`}>
                                <img src="svg/sol.svg" alt="" className="w-4"/>
                                {t('nav.light')}
                            </button>
                            <button onClick={() => toggleTheme(theme === "light" ? "dark" : "dark")}  className={`
                                ${theme === 'light' ? "hover:bg-[#F4F4F5]" : "filter invert  "}
                                ${theme === 'dark' ? "filter invert hover:bg-[#CCCCCC]" : ""}
                                p-2
                                
                                rounded-xl
                                text-black
                                w-full 
                                text-start
                                flex  
                                items-center 
                                gap-2`}>
                                <img src="svg/lua.svg" alt="" className="w-4"/>
                                {t('nav.dark')}
                            </button>
                        </div>
                    )}
                </div>
            </header>
        </>
    )
}


