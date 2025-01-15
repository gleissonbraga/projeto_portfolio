import Image from "next/image";
import { useTheme } from "../../../hooks/themeContext";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";


export function Hamburguer(){
   
    const [dropDown, setDropDown] = useState(false)
    const { t } = useTranslation()
    const { theme} = useTheme();


    const handleDrop = () => {
        setDropDown(!dropDown)
    }


    return(
        <div className={`
                font-poppins 
                h-[2rem] 
                flex 
                ${theme === "light" ? "bg-[#FFFFFF] text-[#000000] " : "bg-[#292626]"}
                ${theme === 'dark' ? "bg-[#292626] text-[#fffffff]" : "bg-[#FFFFFF]"}
                items-center 
                shadow-md 
                p-4
                fixed 
                top-2 
                right-[-20] 
                transform 
                -translate-x-1/2 
                rounded-full
                z-50
                md:hidden
               `}>
            <div className="relative z-50 flex items-center justify-center">
                <button onClick={handleDrop} >
                    <Image src="svg/menu-sharp.svg" alt="" width={20} height={20} className="relative z-50"></Image>
                </button>
                {dropDown && (
                    <div className={`
                    ${theme === "light" ? "bg-[#FFFFFF] text-[#000000] " : "bg-[#292626]"}
                    ${theme === 'dark' ? "bg-[#292626] text-[#fffffff]" : "bg-[#FFFFFF]"}
                    absolute
                    top-[-6]
                    right-[-16]
                    w-36
                    rounded-2xl
                    flex
                    flex-col
                    items-center
                    border-solid
                    border-[1px]
                    border-black
                    `}
                    
                    >  
                        <nav className="flex flex-col gap-2 mt-8 p-2 ">
                            <div className="flex flex-col gap-2 items-center">
                                <Link
                                    href="#home"
                                    className={` 
                                        ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                                        ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                                        hover:underline 
                                        hover:underline-offset-4 
                                        hover:opacity-85
                                        uppercase
                                        text-[14px]
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
                                        uppercase
                                        text-[14px]
                                        `}
                                >
                                    {t('nav.about')}
                                    </Link>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                
                                <Link
                                    href="#skill"
                                    className={` 
                                        ${theme === 'light' ? " hover:decoration-[#D62828]" : " hover:decoration-[#546aab] "}
                                        ${theme === 'dark' ? " hover:decoration-[#546aab]" : " hover:decoration-[#D62828] "}

                                        hover:underline 
                                        hover:underline-offset-4 
                                        hover:opacity-85
                                        uppercase
                                        text-[14px]
                                        `}
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
                                        uppercase
                                        text-[14px]
                                        `}
                                >
                                    {t('nav.projects')}
                                    </Link>
                            </div>
                            
                        </nav>
                        <div  className="flex gap-6 mt-4 p-2">
                            <a href="https://github.com/gleissonbraga" target="_blank">
                                <Image src="svg/github.svg" alt="" width={20} height={20} className="relative z-50 filter invert"></Image>
                            </a>
                            <a href="https://www.linkedin.com/in/gleisson-braga/" target="_blank">
                            <Image src="svg/linkedin.svg" alt="" width={20} height={20} className="relative z-50 filter invert"></Image>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=bragagleisson@gmail.com" target="_blank">
                            <Image src="svg/email.svg" alt="" width={20} height={20} className="relative z-50 filter invert"></Image>
                            </a>
                        </div>  
                        <div className=" flex gap-4 mt-4 mb-4 p-2">
                            <button>
                                <Image src={theme === 'light' ? "svg/sol.svg" : "svg/lua.svg"} 
                                    alt="Icon" 
                                    width={20} 
                                    height={20} 
                                    className={`
                                        ${theme === 'light' ? "hover:bg-gray-100" : "filter invert"}
                                        ${theme === 'dark' ? "filter invert hover:bg-gray-300" : ""}
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
                            <button>
                                <Image src={theme === 'light' ? "svg/sol.svg" : "svg/lua.svg"} 
                                    alt="Icon" 
                                    width={20} 
                                    height={20} 
                                    className={`
                                        ${theme === 'light' ? "hover:bg-gray-100" : "filter invert"}
                                        ${theme === 'dark' ? "filter invert hover:bg-gray-300" : ""}
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
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}