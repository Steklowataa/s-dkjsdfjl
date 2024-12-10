import { Link, Route } from "react-router-dom";
import Shop from "../pages/Shop.jsx";
import ShopCategory from "../pages/ShopCategory.jsx";


export const Navbar = () => {
    //TODO: Remove repeating lines of code using pre-defined objects and map function (check 'Nawigacja')
    const navItems = [
        {path: '/', text: 'Men'},
        {path: '/women', text: 'Women'},
        //.. add more

    ]

    //TODO: repeating styles again in '<div className="flex items-center justify-between bg-gray-100 p-4 shadow-md w-full p-4">'

    //TODO: Instead of "./public/vite.svg" use "vite.svg"
    return (
        <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md w-full p-4">
            <div className="flex items-center gap-4 ml-5">
                <img
                    src="./public/vite.svg"
                    alt="Logo"
                    className="w-10 h-10"
                />
                <p className="text-xl font-bold text-gray-800">New Balance</p>
            </div>

            {/* Nawigacja */}
            <ul className="flex flex-grow justify-center gap-8 text-gray-700 text-lg">
                {navItems.map((item, i) => (
                    <li key={i} className="hover:text-blue-500 cursor-pointer transition"><Link to={item.path}>{item.text}</Link></li>
                ))}
                {/*<li className="hover:text-blue-500 cursor-pointer transition"><Link to="/men">Men</Link></li>*/}
                {/*<li className="hover:text-blue-500 cursor-pointer transition"><Link to="/women">Women</Link></li>*/}
                {/*<li className="hover:text-blue-500 cursor-pointer transition"><Link to="/kids">Kids</Link></li>*/}
                {/*<li className="hover:text-blue-500 cursor-pointer transition"><Link to="/">Popular</Link></li>*/}
            </ul>
            <div className="mr-[20px]">
                <p>Shop</p>
            </div>
        </div>
    );
};
