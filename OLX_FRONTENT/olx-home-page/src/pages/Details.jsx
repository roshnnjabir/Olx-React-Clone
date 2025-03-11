import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Navbar from "../components/Navbar";
import back_arrow_icon from '../assets/back_arrow_icon.png'
import { Link } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row p-6 max-w-7xl mx-auto space-y-8 md:space-y-0 my-15">
        <div className="w-10 h-auto">
          <Link to={'/'}><img src={back_arrow_icon} alt={back_arrow_icon} /></Link>
        </div>
        <div className="flex justify-center md:w-1/2 overflow-hidden">
          <img
            className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
            src={location?.state?.data?.image_url}
            alt={location?.state?.data?.name}
          />
        </div>

        <div className="flex flex-col md:w-1/2 space-y-4">

          <h1 className="font-bold text-3xl text-gray-900">
            $ {location?.state?.data?.price}
          </h1>

          <h2 className="text-lg text-gray-700">
            <span className="font-semibold">Category:</span> {location?.state?.data?.category_name}
          </h2>

          <h2 className="text-2xl text-gray-900">
            <span className="font-semibold">Title:</span> {location?.state?.data?.name}
          </h2>

          <h2 className="text-base text-gray-600">
            <span className="font-semibold">Description:</span>
          </h2>
          <p className="text-sm text-gray-500">{location?.state?.data?.description}</p>

          { user ? <button className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
            Contact Seller
          </button > : <button onClick={() => { setLoginPop(!loginPop); }} className="mt-4 py-2 px-6 bg-blue-600 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300">
            Login To Contact Seller
          </button>}
        </div>
      </div>
    </>
  );
};

export default Details;
