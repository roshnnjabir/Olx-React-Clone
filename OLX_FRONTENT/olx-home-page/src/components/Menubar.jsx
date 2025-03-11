import { useContext } from "react";
import arrow from "../assets/arrow.png";
import { AuthContext } from "../contexts/AuthContext";

const Menubar = ({ menu, setMenu }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center shadow-sm p-2 pt-5 my-5">
        <div className="flex justify-center items-center mb-4 md:mb-0">
          <h1 className={`cursor-pointer pointer hover:text-blue-500 flex items-center ${menu === "" ? 'font-semibold' : ''}`} onClick={() => setMenu("")}>
            All Categories
            <img className="w-5 h-5 mt-1 ml-2" src={arrow} alt="arrow icon" />
          </h1>
        </div>
        <div className="flex flex-wrap justify-center space-x-4">
          <h1 className={`ml-5 cursor-pointer hover:text-blue-500 ${menu === "Electronics" ? 'font-semibold': ''}`} onClick={() => setMenu("Electronics")}>Electronics</h1>
          <h1 className={`ml-5 cursor-pointer hover:text-blue-500 ${menu === "Clothing" ? 'font-semibold': ''}`} onClick={() => setMenu("Clothing")}>Clothing</h1>
          <h1 className={`ml-5 cursor-pointer hover:text-blue-500 ${menu === "Books" ? 'font-semibold': ''}`} onClick={() => setMenu("Books")}>Books</h1>
          <h1 className={`ml-5 cursor-pointer hover:text-blue-500 ${menu === "Home Appliances" ? 'font-semibold': ''}`} onClick={() => setMenu("Home Appliances")}>Home Appliances</h1>
          <h1 className={`ml-5 cursor-pointer hover:text-blue-500 ${menu === "Sports & Outdoors" ? 'font-semibold': ''}`} onClick={() => setMenu("Sports & Outdoors")}>Fitness</h1>
        </div>
      </div>
    </>
  );
};

export default Menubar;
