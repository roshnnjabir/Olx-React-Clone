import olx from "../assets/olx.png";
import lens from "../assets/lens.png";
import arrow from "../assets/arrow.png";
import search from "../assets/search.png";
import Login from "./Login";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = ({ setSearch }) => {
  const { user } = useContext(AuthContext);
  const [loginPop, setLoginPop] = useState(false);
  const auth = getAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    });
  }, [user]);

  return (
    <>
      <div className="flex p-4 bg-slate-100 shadow-md">
        <img src={olx} className="w-12 h-7 mt-2" alt="olx.logo" />
        <div className="flex border-2 border-spacing-1 w-71 p-2 border-black ml-5 bg-white">
          <img src={lens} className="w-6 h-5 mt-1" />
          <input placeholder="Location" className="ml-3 outline-none" />
          <img src={arrow} className="w-8 h-7" />
        </div>
        <div className="flex h-12 ml-4 border-2 border-black bg-white">
          <input onInput={(e) => setSearch(e?.target?.value)} placeholder="Search" className="ml-3 w-150 outline-none" />
          <img src={search} />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">ENGLISH</h1>
          <img src={arrow} alt="Arrow" className="w-8 h-7" />
        </div>
        <div className="flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline">
          {loggedIn ? (
            <h1 onClick={() => { signOut(auth); }} className="font-bold text-lg">Logout</h1>
          ) : (
            <h1 onClick={() => { setLoginPop(!loginPop); }} className="font-bold text-lg">Login</h1>
          )}
        </div>
        {loggedIn && (
          <Link to={'/sell'}>
            <div className="w-28 flex h-12 p-2 ml-6 cursor-pointer rounded-full border border-yellow-500">
              <h1 className="font-bold text-lg ml-3">+ SELL</h1>
            </div>
          </Link>
        )}
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;