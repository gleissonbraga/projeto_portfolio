"use client"

import { useTranslation } from "react-i18next";

export function Footer(){
    
    const { t } = useTranslation()

    return (
        <footer className="w-full h-[3.25rem] bg-[#292828]  font-poppins flex items-center justify-center  text-[1rems]">
            <p className="text-gray-400 font-semibold">&copy; 2025 | {t('footerEnd')}</p>
        </footer>
    )
}