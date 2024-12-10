export default function ProfileCard({img, description, name}) {
    return (
        <>
            <div className="flex flex-col justify-center border-solid border-[5px] border-black w-[200px] h-[300px] text-center items-center rounded-[20px]">
                <img src={img}/>
                <h2>{name}</h2>
                <h4>{description}</h4>
            </div>
        </>
    )
}   