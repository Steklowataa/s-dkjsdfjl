import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Form() {
    const navigate = useNavigate();

    const handleSubmitDoctor = (e) => {
        e.preventDefault();
        navigate("/formForDoctor");
    }
    const handleSubmitUser = (e) => {
        e.preventDefault();
        navigate("/formForUser");
    }

    return (
        <>
            <div className="flex items-center justify-center flex-col text-white font-futura mt-[100px] ">
                <div className="text-[60px] font-bold">Lets start!</div>
                <div className="mt-[400px] text-[25px] font-extralight">To begin with, choose who you are</div>
                <div className="flex justify-center gap-8 mt-[20px]">
                    <button 
                        className="px-4 py-2 text-white text-[30px] font-light underline" 
                        onClick={handleSubmitDoctor}
                    >
                        Doctor
                    </button>
                    <button 
                        className="px-4 py-2 text-white text-[30px] font-light underline" 
                        onClick={handleSubmitUser}
                    >
                        Patient
                    </button>
                </div>
            </div>
        </>
    )
}
