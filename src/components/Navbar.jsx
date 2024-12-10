import { Link } from "react-router-dom";
import '../App.css'

export const Navbar = () => {
    const navItems = [
        {path: "/men", name: "Popular"},
        {path: "/women", name: "Women"},
        {path: "/kids", name: "Kids"},
        {path: "/", name: "Popular"},
    ]
    return (
        <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md w-full p-4">
            <div className="flex items-center gap-4 ml-5">
                <img 
                    src="./vite.svg"
                    alt="Logo" 
                    className="w-10 h-10"
                />
                <p className="text-xl font-bold text-gray-800">New Balance</p>
            </div>
            {/* Nawigacja */}
            <ul className="flex flex-grow justify-center gap-8 text-gray-700 text-lg">
                {navItems.map((item, index) => (
                <li className="hover:text-blue-500 cursor-pointer transition;" key={index}>
                    <Link to={item.path}>{item.name}</Link>
                </li>))}
            </ul>
            <div className="mr-[20px]">
                <p>Shop</p>
            </div>
        </div>
    );
};
