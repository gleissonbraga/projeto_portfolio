import "@/app/layout"
import Image from "next/image"
import Link from "next/link"


// export default function HomePage(){
//     return (
//         <section className="bg-[url('/image/background_home.jpeg')] bg-cover bg-center min-h-screen  text-[#000000] blur-[1.2px]">
//             <div className="flex flex-col pt-60 pl-60 opacity-100 w-[48%]">
//                 <h1 className="uppercase text-[50px] font-extrabold opacity-100 text-[#D62828] blur-none">Desenvolvedor Full Stack</h1>
//                 <p className="text-[32px] text-[#ffffff]">Olá, eu sou Gleisson Braga</p>
//                 <a href="#">Contato</a>
//             </div>
//         </section>
//     )
// }

export default function HomePage() {
    return (
        <section className="relative bg-[url('/image/background_home.jpeg')] bg-cover bg-center min-h-screen text-[#000000]">

            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            
            <div className="relative flex flex-col pt-64 pl-60 w-[64%]  gap-4">
                <h1 className="uppercase text-[#F5080C] text-[60px] font-extrabold text-stroke">Desenvolvedor Full Stack</h1>
                <p className="text-[32px] text-[#ffffff] font-light">Olá, eu sou Gleisson Braga</p>
                <a href="https://wa.me/5551999303193?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços!" target="_blank"
                 className="bg-white w-[180px] h-[54] p-3 rounded-3xl flex items-center justify-center gap-2 font-extrabold text-[#F5080C] text-[22px] font-sans hover:scale-[1.1] transition-transform duration-500 ease-in-out">
                    Contato 
                    <Image src="svg/telefone.svg" alt="Icon" width={18} height={18}/></a>

                    <div>
            </div>
            </div>

        </section>
    );
}

// export default function HomePage() {
//     return (
//         <section className="relative bg-[url('/image/background_home.jpeg')] bg-cover bg-center min-h-screen text-[#000000] justify-center align-middle w-[100%] gap-10">
//             <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
            
//             <div className="relative flex items-center justify-evenly pl-16 pt-36  gap-7 w-[100%] bg-[#00000055] pb-4 rounded-3xl">
//                 {/* Conteúdo do texto */}
//                 <div className="flex flex-col gap-4 w-[50%] pl-16 ">
//                     <h1 className="uppercase text-[#F5080C] text-[60px] font-bold text-stroke">
//                         Desenvolvedor Full Stack
//                     </h1>
//                     <p className="text-[32px] text-[#ffffff] font-light">
//                         Olá, eu sou Gleisson Braga
//                     </p>
//                     <a href="#" className="bg-white w-[180px] h-[54] p-3 rounded-3xl flex items-center justify-center gap-2 font-extrabold text-[#F5080C] text-[22px] font-sans hover:scale-[1.1] transition-transform duration-500 ease-in-out">
//                         Contato 
//                         <Image src="svg/telefone.svg" alt="Icon" width={24} height={24} />
//                     </a>
//                 </div>

//                 {/* Imagem do lado direito */}
//                 <div className="w-[30%] h-[540px] pr-9 text-center">
//                     <img
//                         src="image/gleisson2.png"
//                         alt="Gleisson"
//                         className="w-full h-full object-cover rounded-b-full"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// }
