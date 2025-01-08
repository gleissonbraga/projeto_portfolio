import "@/app/layout"
import Image from "next/image"
import Title from "../title/title"

export function About(){

   const newTitle = "sobre mim"

   return (
        <section id="about-me" className="w-[100%] bg-white flex pt-14 flex-col items-center">

             <Title title={newTitle} />

             <div  className=" w-[84%] h-[580px] flex mt-5 rounded-3xl" style={{boxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px"}}>
               <div className=" w-[52%] h-[500px] flex flex-col p-4 text-black items-center justify-evenly " >
                  <h3 className="uppercase tracking-wider text-[26px] font-bold font-poppins" >Gleisson Braga </h3>
                  <p className="w-[80%] text-gray-700 text-[18px]" >
                     Sou natural de Viamão - RS ao lado de Porto Alegre. Estudante de Análise e Desenvolvimento de Sistemas na Faculdade Unisenac, cursando 4° semestre. Atualmente procuro realizar a transição de carreira e busco como meta ser um Desenvolvedor Fullstack. Hoje além da faculdade me esforço ao máximo para estudar nas horas vagas e desenvolver projetos para fixação. Atualmente possuo expência e projetos em algumas tecnologias como <span>Python, NodeJS, Typescript, ReactJS, NextJS, PostgreSQL, Versionamento Git e GitHub</span>.
                  </p>
                  <a 
                     href="curriculo/curriculo.pdf" 
                     download="Curriculo_Gleisson_Braga.pdf" 
                     className="bg-[#D62828] w-[180px] h-[54] text-[18px] text-white rounded-3xl flex items-center justify-center gap-2 font-extrabold font-poppins hover:border-[#D62828] hover:text-black hover:bg-white hover:border-4">
                        Download
                     <Image src="svg/download.svg" alt="Icon" width={18} height={18} className=""/>
                  </a>
               </div>

               <div className="relative w-[48%] h-[500px] flex justify-center align-middle">
                        <Image src="svg/bg-gray-dois.svg" alt="Icon" width={650} height={650} className="absolute"/>
                        <Image src="svg/bg-red-quatro.svg" alt="Icon" width={650} height={650} className="absolute"/>
            
                        <img
                           src="image/gleisson2.png"
                           alt="Gleisson"
                           className="absolute w-[400px] h-[500px] rounded-b-full text-center"
                        />
                </div>
              
             </div>
        </section>
   )
}