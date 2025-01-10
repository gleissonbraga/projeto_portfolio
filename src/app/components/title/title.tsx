"use client"
import { useTheme } from "../../hooks/themeContext";


interface TitleProperty{
    title: string
}

export default function Title({title}: TitleProperty) {
    const {theme} = useTheme()
    return (
        <div className="text-center 
        h-16 w-[70%] 
        border-b-2 
        border-[#666464] 
        rounded-sm" 
        style={{ boxShadow: "0px 10px 10px -12px rgba(0, 0, 0, 0.45)" }} >
            <h2 className={`
            ${theme === 'light' ? "text-[#000000] " : "text-[#ffffff] "}
            ${theme === 'dark' ? "text-[#ffffff] " : "text-[#000000] " }
            font-[900] 
            uppercase 
            font-poppins 
            text-5xl 
            tracking-wider`}
            >
                <span className={`
                    ${theme === 'light' ? "text-[#D62828]" : "text-[#546aab] "}
                    ${theme === 'dark' ? "text-[#546aab] " : "text-[#D62828]" }
                    `}
                >
                &lt;
                </span>
                    {title}
                <span className={`
                    ${theme === 'light' ? "text-[#D62828]" : "text-[#546aab] "}
                    ${theme === 'dark' ? "text-[#546aab] " : "text-[#D62828]" }
                    `}
                >
                    /&gt;
                </span>
            </h2>
        </div>
    )
}
