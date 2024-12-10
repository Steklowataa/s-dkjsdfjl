import { useState } from "react";

export default function Form({ setData }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email:", email);
        console.log("Name:", name);
        setData({email, name})
        setEmail("")
        setName("")

    };

    return (
        <>
            <div className="flex justify-center items-center border border-black border-[2px] rounded-[20px] p-4 w-[300px] mx-auto bg-gray-100">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                    <input 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Aktualizacja stanu dla email
                        type="text" 
                        placeholder="Email" 
                        className="w-full h-[40px] border border-gray-300 rounded-[10px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)} // Aktualizacja stanu dla name
                        type="text" 
                        placeholder="Name" 
                        className="w-full h-[40px] border border-gray-300 rounded-[10px] px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button 
                        type="submit" // Określenie, że to przycisk wysyłania formularza
                        className="bg-blue-500 text-white font-semibold h-[40px] rounded-[10px] hover:bg-blue-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
