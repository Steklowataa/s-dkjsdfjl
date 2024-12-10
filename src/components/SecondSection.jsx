import ItemComponent from "./ItemComponent"

export default function SecondSection() {
    const items = [
        {name: "Buty unisex New Balance U991VS2, szare", price: "1099,02", img: "./public/vite.svg"},
        {name: "Buty damskie New Balance Fresh Foam 1080 v14 W1080M14 zielone", price: "482,99", img: "./public/vite.svg"},
        {name: "Buty unisex New Balance M1000EB, szare", price: "689,99", img: "./public/vite.svg"}
      ]
    
    return (
        <>
            <div>
                <p className="flex text-[40px] mt-[600px] justify-center">For Women</p>
                <hr className="h-[3px] my-8 bg-gray-200 border-0 dark:bg-gray-700 w-[250px] ml-[610px]"/>
                <ul className="mt-20 flex flex-row gap-10 ml-[300px]">
                    {items.map((item, index) => (
                        <li ley={index}>
                            <ItemComponent name={item.name} price={item.price} img={item.img} />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}