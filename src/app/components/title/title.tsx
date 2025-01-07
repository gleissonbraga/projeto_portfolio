

interface TitleProperty{
    title: string
}

export default function Title({title}: TitleProperty) {
    return (
        <div className="text-center h-16 w-[70%] border-b-2 border-[#666464] rounded-sm" style={{ boxShadow: "0px 10px 10px -12px rgba(0, 0, 0, 0.45)" }} >
            <h2 className="font-[900] text-[#000000] uppercase font-poppins text-5xl tracking-wider">
                <span className="text-[#D62828]">&lt;</span>
                    {title}
                <span className="text-[#D62828]">/&gt;</span>
            </h2>
        </div>
    )
}


// box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;