export default function Main() {
    return (
        <>
            <div className="relative">
                {/* Obraz z przezroczystością */}
                {/* <img
                    src="./public/_ (7).jpeg"
                    alt="Girl in shoes"
                    className="w-full h-[550px] opacity-60"
                /> */}

                {/* Tekst na obrazie */}
                <div className="absolute top-0 left-0 w-full h-full">
                    <p className="absolute font-black text-[50px] ml-[250px] mt-[150px]">
                        Znajdź coś
                    </p>
                    <p className="absolute ml-[250px] font-black mt-[215px] text-[40px]">
                        dla siebie
                    </p>
                    <p className="absolute ml-[250px] mt-[290px] text-[20px]">
                        Unikalny sklep internetowy z całą kolekcją
                    </p>
                    <p className="absolute ml-[250px] mt-[310px] text-[20px] opacity-100">
                        od New Balance
                    </p>
                    <button className="absolute w-[200px] h-[55px] rounded-[20px] bg-slate-700 mt-[400px] ml-[250px] text-white font-thin">Spradz oferte</button>
                </div>
            </div>
        </>
    );
}
