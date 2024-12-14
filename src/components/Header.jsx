export default function Header() {
    return (
        <>
         <div className="flex items-center justify-between bg-[rgba(210,210,210,0.38)] shadow-md w-full px-4 h-[80px]
         ">
            <div className="flex gap-4 items-start">
                <img src="./vite.svg" alt="Logo" className="w-200 h-10" />
                <p className="text-xl font-bold text-gray-800">Nazwa</p>
            </div>
            <ul className="flex items-center gap-8 text-gray-700 text-lg">
                <li className="cursor-pointer hover:text-gray-900">Login</li>
                <li className="cursor-pointer hover:text-gray-900">About us</li>
                <li className="cursor-pointer hover:text-gray-900">Price</li>
            </ul>
        </div>  
         </>
    
     );
 }
