import "@/app/layout"
import Image from "next/image"
import Link from "next/link"

export function Menu() {
    return (
        <>
            <header className="font-poppins h-[3.31rem] flex justify-around bg-[#292626] items-center">
                <div>
                    <span className="text-xl font-bold uppercase font-poppins tracking-wider pr-1">
                        <span className="text-[#3364c6] font-extrabold">&lt;</span>
                            Gleisson Braga
                    </span>
                        <span className="text-[#3364c6] font-extrabold uppercase font-poppins tracking-wider text-xl">/&gt;</span>
                </div>
                <nav className="flex uppercase gap-[4rem]">
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#3364c6] hover:underline-offset-4 hover:opacity-85"
                    >
                        Início
                    </Link>
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#3364c6] hover:underline-offset-4 hover:opacity-85"
                    >
                        Sobre
                    </Link>
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#3364c6] hover:underline-offset-4 hover:opacity-85"
                    >
                        Habilidade
                    </Link>
                    <Link
                        href="/"
                        className="hover:underline hover:decoration-[#3364c6] hover:underline-offset-4 hover:opacity-85"
                    >
                        Projetos
                    </Link>
                </nav>
                <div className="flex gap-2">
                    <Image src="svg/github.svg" alt="Icon" width={24} height={24} />
                    <Image src="svg/linkedin.svg" alt="Icon" width={24} height={24} />
                    <Image src="svg/email.svg" alt="Icon" width={24} height={24} />
                </div>
                <div className="flex gap-3">
                    <Image src="svg/github.svg" alt="Icon" width={24} height={24} />
                    <Image src="svg/github.svg" alt="Icon" width={24} height={24} />
                </div>
            </header>
        
        </>
    )
}