export default function ItemComponent({ name, price, img }) {
    return (
        <div className="relative w-[250px] h-[300px] bg-slate-300 rounded-[20px] p-3 text-center">
            <button className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-3 py-1 rounded-full shadow-md hover:bg-blue-600 transition">
                Add
            </button>
            <div className="flex justify-center items-center h-[60%]">
                <img src={img} alt={name} className="max-h-full max-w-full object-contain rounded-lg" />
            </div>

            <div className="mt-4">
                <p className="text-lg font-semibold">{name}</p>
                <p className="text-sm text-gray-700">${price}</p>
            </div>
        </div>
    );
}
