import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Home = ({products, search, menu}) => {
  const { user } = useContext(AuthContext);

    return (
      <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 mx-4 my-1">
          { products?.filter((data) => (data?.name?.toLowerCase().includes(search.toLowerCase()) && (data?.category_name.toLowerCase() === menu.toLowerCase() || !menu))).map((data) => (
            <Link to="/details" state={{ data: data }} key={data.id} className="border rounded-lg p-3 shadow-sm hover:shadow-lg transition duration-300">
              <div className="overflow-hidden w-full h-48">
                <img src={data?.image_url} alt={data?.name} className="w-full h-full object-cover rounded-md" />
              </div>
              <h1 className="font-bold text-lg mt-2">$ {data?.price}</h1>
              <h2 className="text-gray-700">{data?.name}</h2>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">{data?.description}</p>
            </Link>
          ))}
        </div>
        {user && <div className="w-100% justify-center align-middle flex my-3">
          <p>Logged in as {user.email || user.displayName}</p></div>}
      </>
    );
}

export default Home;
