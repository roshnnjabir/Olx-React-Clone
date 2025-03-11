import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Menubar from '../components/Menubar';
import Home from '../components/Home';
import Footer from '../components/Footer';

const Main = () => {
    const [prod, setProd] = useState([])
    const [search, setSearch] = useState("")
    const [menu, setMenu] = useState("")

    const getProducts = async () => {
        try {
            const res = await fetch(import.meta.env.VITE_REACT_APP_API_URL);
            if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
            const json = await res.json();
            setProd(json);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    
    
    useEffect(()=> {
        getProducts()
    }, [])
    return (
        <>
            <Navbar setSearch={setSearch}/>
            <Menubar setMenu={setMenu} menu={menu}/>
            <Home products={prod} search={search} menu={menu} />
            <Footer />
        </>
    );
}

export default Main;
