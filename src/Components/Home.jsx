import { useEffect } from "react";
import useFetch from "../customHook/useFetch";
import Foodlist from "./Foodlist";

const Home = () => {

    let {data :items, pending , error}= useFetch("http://localhost:4000/items");

    useEffect( () => {
        if(localStorage.getItem("orders") === null)
        {
            localStorage.setItem("orders" , "[]")
        }
    } , [])
    return (
        <div className="home">

            {error && <h1>{error}</h1>}
            {/* {  pending && <h1>loading...</h1>} */}
            {pending && <div className="loader"></div>}

            {items && <Foodlist items={items} title="All food" />}

        </div>
    );
}

export default Home;