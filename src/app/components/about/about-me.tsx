import "@/app/layout"
import Image from "next/image"
import Title from "../title/title"

export function About(){

   const newTitle = "sobre mim"

   return (
        <section className="w-[100%] h-[700px] bg-white flex pt-10 flex-col items-center">


             <Title title={newTitle} />

             <div className=" w-[84%] h-[500px] flex mt-5">
               <div className=" w-[52%] h-[500px] flex flex-col p-10 text-black items-center justify-evenly">
                  <h3 className="uppercase tracking-wider text-[26px] font-bold font-poppins" >Gleisson Braga </h3>
                  <p className="w-[80%] text-gray-700 text-[18px]" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum odit quisquam iusto est eaque? Ex sint pariatur repellat fugit porro soluta? Tenetur ipsum sunt ipsa. Blanditiis ab nisi doloremque quaerat dbiabdiubauidbauidbauisdb da dsadas das dasd as dasdasdad asd as asd asdasdas DWACASC A D ASDASD A DAS DAS D AS D AD A</p>
                  <a 
                     href="curriculo/curriculo.pdf" 
                     download="Curriculo_Gleisson_Braga.pdf" 
                     className="bg-[#D62828] w-[180px] h-[54] text-[18px] text-white rounded-3xl flex items-center justify-center gap-2 font-extrabold font-poppins hover:border-[#D62828] hover:text-black hover:bg-white hover:border-4">
                        Download
                     <Image src="svg/download.svg" alt="Icon" width={18} height={18} className=""/>
                  </a>
               </div>

               <div className="relative w-[48%] h-[500px] flex justify-center align-middle">
                        <Image src="svg/bg-gray-dois.svg" alt="Icon" width={600} height={600} className="absolute"/>
                        <Image src="svg/bg-red-quatro.svg" alt="Icon" width={600} height={600} className="absolute"/>
            
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