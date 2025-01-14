"use client"

import Image from "next/image"
import Title from "../title/title"
import { useTheme } from "../../hooks/themeContext";
import { useTranslation } from "react-i18next";

export function About(){
   const {theme} = useTheme()
   const { t } = useTranslation()

   const newTitle = t('about.title')

   return (
        <section id="about-me" className={`
         ${theme === 'light' ? " bg-white" : "bg-[#1D1D1D]"}
         ${theme === 'dark' ? "bg-[#1D1D1D]" : " bg-white"}
        w-[100%] 
        flex 
        pt-14
        pb-6 
        flex-col 
        items-center`}
         >

             <Title title={newTitle} />

             <div  className={`
             ${theme === 'dark' ? 'bg-[#292626]' : ""}
             w-[84%] 
             h-[580px] 
             flex 
             mt-5 
             rounded-3xl
             flex-wrap`} 
            
             style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px"}}
             >
               <div className={`
                  ${theme === 'light' ? "text-[#000000] " : "text-[#ffffff] "}
                  ${theme === 'dark' ? "text-[#ffffff] " : "text-[#000000] " }
                  w-[52%] 
                  h-[500px] 
                  flex flex-col 
                  p-4 
                  items-center 
                  justify-evenly
                  `} 
                  >
                     <h3 className="u
                     ppercase 
                     tracking-wider 
                     text-[26px] 
                     font-bold 
                     font-poppins" 
                     >
                        Gleisson Braga 
                     </h3>
                     <p className={`
                     ${theme === 'light' ? " text-gray-700  " : " text-gray-200  "}
                     ${theme === 'dark' ? " text-gray-200  " : " text-gray-700  " }
                     w-[80%] 
                     text-[18px]`}
                     >
                        {t('about.me')} 
                        <span className="font-bold">
                        {t('about.me-techs')} 
                        </span>.
                     </p>
                     <a 
                        href="curriculo/curriculo.pdf" 
                        download="Curriculo_Gleisson_Braga.pdf" 
                        className={`
                        ${theme === 'light' ? "bg-[#D62828]  text-white  hover:text-black  hover:bg-white hover:border-[#D62828]" 
                           : 
                           "bg-[#222a44]  text-white  hover:text-white  hover:bg-[#1d1d1d] hover:border-[#222a44]"}
                        ${theme === 'dark' ? "bg-[#222a44]  text-white  hover:text-[#bbc3dd]  hover:bg-[#1d1d1d] hover:border-[#222a44]" 
                           : 
                           "bg-[#D62828]  text-white  hover:text-black  hover:bg-white hover:border-[#D62828]" }
                        w-[180px] 
                        h-[54] 
                        text-[18px] 
                        rounded-3xl 
                        flex items-center 
                        justify-center 
                        gap-2 
                        font-extrabold 
                        font-poppins  
                        hover:border-4
                        `}
                        >
                           {t('about.curriculum')}
                        <Image src="svg/download.svg" alt="Icon" width={18} height={18} className=""/>
                     </a>
               </div>

               <div className="
               relative 
               w-[48%] 
               h-[500px] 
               flex 
               justify-center 
               align-middle"
               >
                        <Image src={theme === 'light' ? "svg/bg-gray-dois.svg" : "svg/bg-gray-dark.svg"} 
                           alt="Icon" 
                           width={650} 
                           height={650} 
                           className="absolute"/>
                        <Image src={theme === 'dark' ? "svg/bg-blue-dark.svg" : "svg/bg-red-quatro.svg"} 
                           alt="Icon" 
                           width={650} 
                           height={650} 
                           className="absolute"/>
            
                        <img
                           src="image/gleisson2.png"
                           alt="Gleisson"
                           className="
                           absolute 
                           w-[400px] 
                           h-[500px] 
                           rounded-b-full 
                           text-center"
                        />
                </div>
              
             </div>
        </section>
   )
}