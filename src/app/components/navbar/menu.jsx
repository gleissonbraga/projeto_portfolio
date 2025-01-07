import "@/app/layout"
import Image from "next/image"
import Link from "next/link"

export function Menu() {
    return (
        <>
            <header className="
                font-poppins 
                h-[3.31rem] 
                flex 
                justify-around 
                bg-[#FFFFFF] 
                items-center 
                text-[#000000] 
                shadow-md 
                p-4
                fixed 
                top-0 
                left-0 
                w-full 
                z-50
            ">
                <div>
                    <Link href="/" className="text-xl font-bold uppercase font-poppins tracking-wider pr-1">
                        <span className="text-[#D62828] font-extrabold">&lt;</span>
                            Gleisson Braga
                        <span className="text-[#D62828] font-extrabold uppercase tracking-wider text-xl">/&gt;</span>
                    </Link>
                </div>
                <nav className="flex uppercase gap-[4rem] font-semibold" >
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#D62828] hover:underline-offset-4 hover:opacity-85"
                    >
                        Início
                    </Link>
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#D62828] hover:underline-offset-4 hover:opacity-85"
                    >
                        Sobre
                    </Link>
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#D62828] hover:underline-offset-4 hover:opacity-85"
                    >
                        Habilidade
                    </Link>
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#D62828] hover:underline-offset-4 hover:opacity-85"
                    >
                        Projetos
                    </Link>
                </nav>
                <div className="flex gap-4 tracking-wider">
                    <a href="https://github.com/gleissonbraga" target="_blank">
                        <Image src="svg/github.svg" alt="Icon" width={24} height={24} className="filter invert hover:scale-[1.1] delay-100 transition-transform duration-300 ease-in-out"/>
                    </a>
                    <a href="https://www.linkedin.com/in/gleisson-braga/" target="_blank">
                        <Image src="svg/linkedin.svg" alt="Icon" width={24} height={24} className="filter invert hover:scale-[1.1] delay-100 transition-transform duration-300 ease-in-out"/>
                    </a>
                    <a href="mailto:bragagleisson@gmail.com" target="_blank">
                        <Image src="svg/email.svg" alt="Icon" width={24} height={24} className="filter invert hover:scale-[1.1] delay-100 transition-transform duration-300 ease-in-out"/>
                    </a>
                </div>
                <div className="flex gap-3 h-[100%] items-center">
                    <Image src="svg/brasil.svg" alt="Icon" width={24} height={24} className="rounded-full border-solid border p-[0.4rem] border-[#B0AEAE] w-8 h-8"/>
                    <Image src="svg/sol.svg" alt="Icon" width={24} height={24} className="rounded-full border-solid border p-[0.4rem] border-[#B0AEAE] w-8 h-8"/>
                </div>
            </header>
        
        </>
    )
}