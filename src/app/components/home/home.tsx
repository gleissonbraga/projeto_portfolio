"use client"

import { useTheme } from "../../hooks/themeContext";
import Image from "next/image"
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/I18nextContext";


export default function HomePage() {
    const {theme} = useTheme()
    const { t } = useTranslation()
    const { currentLanguage } = useLanguage()


    return (
        <section className={`
        ${theme === 'light' ? "bg-[url('/image/background_home.jpeg')]" : "bg-[url('/image/background-dark-dois.jpg')]"}
        ${theme === 'dark' ? "bg-[url('/image/background-dark-dois.jpg')]')]" : "bg-[url('/image/background_home.jpeg')]"}
        relative 
        bg-cover 
        bg-center 
        min-h-screen`} 
        >

            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            
            <div className="
            relative 
            flex 
            flex-col 
            pt-64 
            pl-60 
            w-[64%]  
            gap-4
            min-[320px]:w-full
            min-[320px]:pt-40
            min-[320px]:pl-6
            min-[475px]:w-[80%]
            sm:w-[64%]
            sm:pt-50
            sm:pl-[50px]
            md:pt-52
            md:pl-[50px]
            lg:pt-50
            lg:pl-60
            xl:pt-64
            2xl:w-[60%]
            ">
                <h1 className={`
                ${theme === 'light' ? "text-[#F5080C]" : "text-[#546aab]"}
                ${theme === 'dark' ? "text-[#546aab]" : "text-[#F5080C]"}
                ${currentLanguage === 'pt' ? 'min-[320px]:text-[30px]' : 'min-[320px]:text-[38px]'}
                uppercase 
                text-[60px] 
                font-extrabold 
                text-stroke
                
                sm:text-[48px]
                xl:text-[60px]
                
                `}
                >
                    {t('main.work')}
                </h1>
                <p className="
                text-[32px]
                text-[#ffffff] 
                font-light
                min-[320px]:text-[18px]
                sm:text-[26px]
                ">
                    {t('main.me')}
                </p>
                <a href="https://wa.me/5551999303193?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank"
                 className={`
                ${theme === 'light' ? "text-[#F5080C]" : "text-[#546aab]"}
                ${theme === 'dark' ? "text-[#546aab]" : "text-[#F5080C]"}   
                 bg-white 
                 w-[180px] 
                 h-[54px] 
                 p-3
                 rounded-3xl 
                 flex 
                 items-center 
                 justify-center 
                 gap-2 
                 font-extrabold 
                 text-[22px] 
                 font-sans 
                 hover:scale-[1.1] 
                 transition-transform 
                 duration-500 
                 ease-in-out
                 min-[320px]:text-[18px]
                 min-[320px]:w-[140px]
                 min-[320px]:h-[40px]
                 sm:text-[22px]
                 sm:w-[180px]
                 sm:h-[54px]
                 `}
                 >
                    {t('main.contact')} 
                    <Image src={theme === 'light' ? "svg/telefone.svg" : "svg/telefone-dark.svg"} alt="Icon" width={18} height={18}/></a>
                    <div>
            </div>
            </div>

        </section>
    );
}