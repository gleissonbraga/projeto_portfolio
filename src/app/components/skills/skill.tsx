import { skillList } from "@/lib"
import Title from "../title/title"

export function Skills(){

    const newTitle = "Habilidades"

    return (
        <section id="skill" className="pt-14 flex items-center flex-col">
            <Title title={newTitle} />
            <ul 
                className="
                    mt-5 
                    w-[90%] 
                    flex-wrap 
                    flex 
                    p-8
                    gap-14"
                >
                {skillList.map(({id, image, name}) => (
                    <li key={id} className="w-[120px] h-[120px] rounded-tl-3xl border-b-4 border-[#D62828] flex flex-col justify-center items-center gap-2 hover:scale-[1.1] cursor-pointer transition-transform duration-500 ease-in-out" style={{boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px"}}>
                        <span className="text-black font-medium font-DM_Sans text-[1.2rem]">{name}</span>
                        <img src={image} alt="" className="w-14 h-14" />
                    </li>
                ))}
            </ul>
        </section>
    )
}