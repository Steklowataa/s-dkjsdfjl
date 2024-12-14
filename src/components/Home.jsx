import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/form");
  };

  return (
    <div className="absolute bg-cover bg-center z-[-1] block w-full h-full" style={{backgroundImage: "url(/bg.png)"}}>
      {/* <Header /> */}
      <div className="w-[1150px] h-[470px] rounded-[20px] bg-[rgba(210,210,210,0.58)] border-[3px] border-white mt-[150px]
       ml-[160px] mr-[300px] flex justify-between items-center p-6">
        <div className="flex flex-col max-w-[50%] ml-[50px]">
          <div className="text-[45px] font-futura">
            <p className="mt-[20px]">Your Medical</p>
            <p>AI Assistant</p>
          </div>
          <div className="mt-[50px] leading-[30px] font-futura font-extralight">
            <p>24/7 support, constant access to doctors</p>
            <p>and care for your health, wherever you are</p>
          </div>
          <button 
            className="w-[180px] h-[60px] rounded-[20px] bg-[rgba(139,156,255,100)] text-white mt-[50px] font-futura text-[18px]"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>
        <div className="max-w-[40%] mr-[100px]">
          <img src="/dialog.png" alt="dialog" className="w-[1900px] h-[700px] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Home;
