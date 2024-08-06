import { useEffect } from "react";
import useFetch from "../customHook/useFetch";
import Foodlist from "./Foodlist";

const Home = () => {

    let { data: items, pending, error } = useFetch("http://localhost:4000/items");

    useEffect(() => {
        if (localStorage.getItem("orders") === null) {
            localStorage.setItem("orders", "[]")
        }
    }, [])
    return (
        <div className="home" style={{marginTop:"5vh"}}>

            {error && <h1>{error}</h1>}
            {pending && <div className="loader"></div>}
            {items && <Foodlist  items={items} title="Food Cart"/>}

        </div>
    );
}

export default Home;