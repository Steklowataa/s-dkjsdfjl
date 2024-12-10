export default function Main() {
    return (
        <>
            <div className="relative">

                <img
                    src="./public/_ (7).jpeg"
                    alt="Girl in shoes"
                    className="w-full h-[550px] opacity-60"
                /> *
                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center space-y-2 pl-[250px]">
                    <p className="font-black text-[50px] mb-[-6px]">
                        Znajdź coś
                    </p>
                    <p className="font-black text-[50px] ">
                        dla siebie
                    </p>
                    <p className="text-[20px]">
                        Unikalny sklep internetowy z całą kolekcją
                    </p>
                    <p className="text-[20px] opacity-100">
                        od New Balance
                    </p>
                    <div className="h-[50px]"></div>
                    <button className="w-[200px] h-[55px] rounded-[20px] bg-slate-700 text-white font-thin">
                        Sprawdz ofertę
                    </button>
                </div>
            </div>
        </>
    );
}
